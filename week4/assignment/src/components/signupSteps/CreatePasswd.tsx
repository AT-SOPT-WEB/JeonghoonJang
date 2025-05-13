import PageTitle from "../PageTitle";
import PageSubTitle from "../PageSubTitle";
import InputBox from "../InputBox";
import Button from "../Button";

const CreatePasswd = ({
  passWd,
  confirmPassWd,
  onChangePassWd,
  onChangeConfirmPassWd,
  onKeyDown,
  firstError,
  isFull,
  onNext,
}: {
  passWd: string;
  confirmPassWd: string;
  onChangePassWd: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeConfirmPassWd: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  firstError: { message: string } | null;
  isFull: boolean;
  onNext: () => void;
}) => {
  return (
    <>
      <PageTitle text="회원가입" />
      <PageSubTitle text="비밀번호" />
      <InputBox
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={passWd}
        onChange={onChangePassWd}
        onKeyDown={onKeyDown}
      />
      <InputBox
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPassWd}
        onChange={onChangeConfirmPassWd}
        onKeyDown={onKeyDown}
      />
      {firstError && (
        <div className="text-sm text-red-500">
          <p>{firstError.message}</p>
        </div>
      )}
      <Button text="다음" isFull={isFull} onClick={onNext} />
    </>
  );
};

export default CreatePasswd;
