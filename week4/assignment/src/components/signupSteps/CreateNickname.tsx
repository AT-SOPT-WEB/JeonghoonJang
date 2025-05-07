import PageTitle from "../PageTitle";
import PageSubTitle from "../PageSubTitle";
import InputBox from "../InputBox";
import Button from "../Button";

const CreateNickname = ({
  nickName,
  onChange,
  onKeyDown,
  isFull,
  onSubmit,
}: {
  nickName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  isFull: boolean;
  onSubmit: () => void;
}) => (
  <>
    <PageTitle text="회원가입" />
    <PageSubTitle text="닉네임" />
    <InputBox
      placeholder="닉네임을 입력해주세요"
      value={nickName}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
    <Button text="회원가입 하기" isFull={isFull} onClick={onSubmit} />
  </>
);

export default CreateNickname;
