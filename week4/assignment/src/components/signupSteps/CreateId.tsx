import PageTitle from "../PageTitle";
import PageSubTitle from "../PageSubTitle";
import InputBox from "../InputBox";
import Button from "../Button";

const CreateId = ({
  id,
  onChange,
  onKeyDown,
  isFull,
  onNext,
}: {
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  isFull: boolean;
  onNext: () => void;
}) => (
  <>
    <PageTitle text="회원가입" />
    <PageSubTitle text="아이디" />
    <InputBox
      type="text"
      placeholder="아이디를 입력해주세요(8~20자, 대소문자/숫자만 가능)"
      value={id}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
    <Button text="다음" isFull={isFull} onClick={onNext} />
  </>
);

export default CreateId;
