type CheckIsFull = {
  step: number;
  id: string;
  passWd: string;
  confirmPassWd: string;
  nickName: string;
  firstError: boolean;
};

export const getIsFull = ({
  step,
  id,
  passWd,
  confirmPassWd,
  nickName,
  firstError,
}: CheckIsFull): boolean => {
  switch (step) {
    case 1:
      return id.trim() !== "";
    case 2:
      return passWd.trim() !== "" && confirmPassWd.trim() !== "" && !firstError;
    case 3:
      return nickName.trim() !== "";
    default:
      return false;
  }
};
