type PassWdMessage = {
  key: string;
  isValid: ({ pw, confirm }: { pw: string; confirm?: string }) => boolean;
  message: string;
};

export const passWdMessage: PassWdMessage[] = [
  {
    key: "NOT_MATCH",
    isValid: ({ pw, confirm }) => pw === confirm,
    message: "비밀번호가 일치하지 않습니다.",
  },
  {
    key: "TOO_LONG",
    isValid: ({ pw }) => pw.length <= 20,
    message: "비밀번호는 20자 이하로 입력해주세요.",
  },
];
