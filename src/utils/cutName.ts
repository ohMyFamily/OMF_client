// 자식 이름이 7자 초과시 말줄임 함수
export const cutNickname = (text: string, maxLength: number = 7): string => {
    if (!text) return '';
    
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };
  
  export default cutNickname;