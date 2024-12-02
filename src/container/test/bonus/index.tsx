import classNames from 'classnames';
import { useState, useRef, useEffect } from 'react';
import $ from './bonus.module.scss';
import BlueTitleText from '@/components/common/Item/BlueTitleText';
import { Body1, Caption1, Title2 } from '@/components/common/Typography';
import Button from '@/components/common/Button';
import { QuestionLayoutType } from '@/pages/test';

export const BonusStage = ({ content, title }: QuestionLayoutType) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleNext = () => {};

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
        <Button variant="tertiary" onClick={handleNext} disabled={!!selectedImage}>
          사진이 없어요 ㅜ
        </Button>
        <Button variant="secondary" onClick={handleNext} disabled={!selectedImage}>
          완료
        </Button>
      </div>
    </div>
  );
};
