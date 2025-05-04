import classNames from 'classnames';
import { useState, useRef, Dispatch, SetStateAction } from 'react';
import $ from './bonus.module.scss';
import BlueTitleText from '@/components/common/Item/BlueTitleText';
import { Body2, Caption1, Title2 } from '@/components/common/Typography';
import Button from '@/components/common/Button';
import Spinner from '@/components/common/Spinner';
import { QuestionLayoutType } from '@/pages/test';
import { useUploadImageMutation } from '@/apis/queries/answer';
import { useToast } from '@/hooks/useToast';
import { compressImage, isHeicFile, convertHeicToJpeg } from '@/utils/imageUtils';

interface BonusStageProps extends QuestionLayoutType {
  nickname: string;
  handleStep: (step: string) => void;
  onSubmit: (imageUrl?: string) => void;
  selectedImage: File | null;
  setSelectedImage: Dispatch<SetStateAction<File | null>>;
}

export const BonusStage = ({
  content,
  title,
  handleStep,
  onSubmit,
  selectedImage,
  setSelectedImage,
}: BonusStageProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    selectedImage ? URL.createObjectURL(selectedImage) : null
  );
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { mutateAsync: uploadImage } = useUploadImageMutation();
  const { addToasts } = useToast();

  const handleImageClick = () => {
    if (!isProcessing) {
      fileInputRef.current?.click();
    }
  };

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsProcessing(true);
      setPreviewUrl(null);

      try {
        let finalFile = file;
        if (isHeicFile(file)) {
          finalFile = await convertHeicToJpeg(file);
          console.log('HEIC 변환 완료');
        }
        const shouldCompress = finalFile.size > 1 * 1024 * 1024;
        const processedFile = shouldCompress ? await compressImage(finalFile) : finalFile;

        const url = URL.createObjectURL(processedFile);
        setPreviewUrl(url);
        setSelectedImage(processedFile);
      } catch (error) {
        console.error('이미지 처리 실패:', error);
        addToasts('다른 이미지로 다시 시도해주세요.', { top: '598px' });
        
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
        setSelectedImage(file);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const handleComplete = async () => {
    try {
      let image;
      if (selectedImage) {
        const response = await uploadImage(selectedImage);
        image = response.data;
      }
      // image가 없으면 image는 undefined인 상태로 onSubmit 호출
      onSubmit(image);
      handleStep('완료');
    } catch (error) {
      console.error('업로드 실패:', error);
    }
  };

  return (
    <div className={classNames($.Container)}>
      <BlueTitleText size="lg">
        <Caption1>BONUS STAGE</Caption1>
      </BlueTitleText>
      <Title2>{title}</Title2>
      <Body2>{content}</Body2>

      <input
        type="file"
        accept="image/*,.heic,.HEIC"
        ref={fileInputRef}
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />

      <div
        className={classNames($.ImageContainer, { [$.processing]: isProcessing })}
        onClick={handleImageClick}
        style={previewUrl ? { backgroundImage: `url(${previewUrl})` } : undefined}
      >
        {!previewUrl && !isProcessing && (
          <div className={$.textWrapper}>
            <Body2>
              탭하여 업로드하기
              <br />
              (이미지만 업로드 가능)
            </Body2>
          </div>
        )}
        {isProcessing && (
          <div className={$.textWrapper}>
            <Spinner showDescription={false} />
          </div>
        )}
      </div>
      <div className={classNames($.ButtonContainer)}>
        <Button
          variant="tertiary"
          onClick={handleComplete}
          disabled={!!selectedImage || isProcessing}
        >
          사진이 없어요 ㅜ
        </Button>
        <Button
          variant="secondary"
          onClick={handleComplete}
          disabled={!selectedImage || isProcessing}
        >
          완료
        </Button>
      </div>
    </div>
  );
};