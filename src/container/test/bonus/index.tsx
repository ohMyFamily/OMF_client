import classNames from 'classnames';
import { useState, useRef, Dispatch, SetStateAction } from 'react';
import $ from './bonus.module.scss';
import BlueTitleText from '@/components/common/Item/BlueTitleText';
import { Body1, Caption1, Title2 } from '@/components/common/Typography';
import Button from '@/components/common/Button';
import { QuestionLayoutType } from '@/pages/test';

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
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const url = URL.createObjectURL(file!);
    setPreviewUrl(url);
    if (!event.target.files) return;
    setSelectedImage(file!);
  };

  // 이미지 첨부를 한 경우, 하지 않은 경우
  const handleComplete = async () => {
    if (selectedImage) {
      onSubmit(previewUrl || undefined);
    } else {
      onSubmit();
    }
    handleStep('완료');
  };

  return (
    <div className={classNames($.Container)}>
      <BlueTitleText size="lg">
        <Caption1>BONUS STAGE</Caption1>
      </BlueTitleText>
      <Title2>{title}</Title2>
      <Body1>{content}</Body1>

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
            <Body1>
              탭하여 업로드하기
              <br />
              이미지만 업로드 가능
            </Body1>
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
