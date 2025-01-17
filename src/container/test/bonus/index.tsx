import classNames from 'classnames';
import { useState, useRef, Dispatch, SetStateAction } from 'react';
import $ from './bonus.module.scss';
import BlueTitleText from '@/components/common/Item/BlueTitleText';
import { Body2, Caption1, Title2 } from '@/components/common/Typography';
import Button from '@/components/common/Button';
import { QuestionLayoutType } from '@/pages/test';
import { useUploadImageMutation } from '@/apis/queries/answer';

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
  nickname,
  handleStep,
  onSubmit,
  selectedImage,
  setSelectedImage,
}: BonusStageProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(selectedImage ? URL.createObjectURL(selectedImage) : null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { mutateAsync: uploadImage } = useUploadImageMutation();

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file!);
      setPreviewUrl(url);
      setSelectedImage(file!);
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
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />

      <div
        className={$.ImageContainer}
        onClick={handleImageClick}
        style={previewUrl ? { backgroundImage: `url(${previewUrl})` } : undefined}
      >
        {!previewUrl && (
          <div className={$.textWrapper}>
            <Body2>
              탭하여 업로드하기
              <br />
              이미지만 업로드 가능
            </Body2>
          </div>
        )}
      </div>
      <div className={classNames($.ButtonContainer)}>
        <Button variant="tertiary" onClick={handleComplete} disabled={!!selectedImage}>
          사진이 없어요 ㅜ
        </Button>
        <Button variant="secondary" onClick={handleComplete} disabled={!selectedImage}>
          완료
        </Button>
      </div>
    </div>
  );
};
