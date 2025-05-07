import { passWdMessage } from "../constant/passwdCorrectMessage";

export const getFirstPasswordError = (
  passWd: string,
  confirmPassWd: string
) => {
  return passWdMessage.find(({ key, isValid }) => {
    if (key === "TOO_LONG") return !isValid({ pw: passWd });
    if (key === "NOT_MATCH" && passWd.length <= 20) {
      return !isValid({ pw: passWd, confirm: confirmPassWd });
    }
    return false;
  });
};
