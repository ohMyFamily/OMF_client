import { useEffect, useRef } from 'react';

/**
 * iOS 환경에서 키보드가 올라올 때 발생하는 레이아웃 이슈를 해결하기 위한 커스텀 훅
 * @param {Object} options
 * @param {number} options.keyboardUpOffset - 키보드가 올라왔을 때 적용할 offset (기본값: -200px)
 * @param {number} options.keyboardDownOffset - 키보드가 내려갔을 때 적용할 offset (기본값: 16px)
 * @param {number} options.scrollToPosition - 키보드가 올라왔을 때 스크롤할 위치 (기본값: 200px)
 * @param {number} options.keyboardThreshold - 키보드가 올라왔다고 판단할 viewport 높이 변화 기준점 (기본값: 100px)
 * @returns {Object} - containerRef와 isKeyboardVisible 상태 제공
 */
const useIOSKeyboard = ({
  keyboardUpOffset = -201,
  keyboardDownOffset = 16,
  scrollToPosition = 200,
  keyboardThreshold = 100,
} = {}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const initialViewportHeight = useRef<number | null>(null);

  useEffect(() => {
    if (!window.visualViewport) return;

    initialViewportHeight.current = window.visualViewport.height;

    const handleVisualViewportResize = () => {
      if (!containerRef.current || initialViewportHeight.current === null) return;

      const currentVisualViewport = window.visualViewport!.height;
      const heightDifference = initialViewportHeight.current - currentVisualViewport;
      const keyboardIsUp = heightDifference > keyboardThreshold;
      const bottomOffset = keyboardIsUp ? keyboardUpOffset : keyboardDownOffset;

      containerRef.current.style.height = `${currentVisualViewport - bottomOffset}px`;

      if (keyboardIsUp) {
        window.scrollTo(0, scrollToPosition);
      }
    };

    handleVisualViewportResize();

    window.visualViewport.addEventListener('resize', handleVisualViewportResize);

    return () => {
      window.visualViewport!.removeEventListener('resize', handleVisualViewportResize);
    };
  }, [keyboardUpOffset, keyboardDownOffset, scrollToPosition, keyboardThreshold]);

  return { containerRef };
};

export default useIOSKeyboard;
