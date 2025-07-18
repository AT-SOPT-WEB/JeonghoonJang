import MainContainer from "../components/MainContainer";
import { useState } from "react";
import { useNavigate } from "react-router";
import { getFirstPasswordError } from "../utils/getFirstPasswordError";
import { getIsFull } from "../utils/getIsFull";
import CreateId from "../components/signupSteps/CreateId";
import CreatePasswd from "../components/signupSteps/CreatePasswd";
import CreateNickname from "../components/signupSteps/CreateNickname";
import { SIGN_UP_STEP, type SignUpStep } from "../constants/signupStep";
import { signup } from "../apis/auth";

const SignUp = () => {
  const nav = useNavigate();
  const [id, setId] = useState("");
  const [passWd, setPassWd] = useState("");
  const [confirmPassWd, setConfirmPassWd] = useState("");
  const [nickName, setNickName] = useState("");
  const [step, setStep] = useState<SignUpStep>(SIGN_UP_STEP.CREATE_ID);

  const handleSignup = async () => {
    try {
      await signup({
        loginId: id,
        password: passWd,
        nickname: nickName,
      });
      alert(`${nickName}님 반갑습니다! 회원가입에 성공했어요.`);
      nav("/login");
    } catch (error) {
      alert("회원가입 실패.");
    }
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setId(value);
  };

  const handlePassWdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassWd(value);
  };

  const handleConfirmPassWdChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setConfirmPassWd(value);
  };

  const nextStep = () => {
    switch (step) {
      case SIGN_UP_STEP.CREATE_ID:
        setStep(SIGN_UP_STEP.CREATE_PASSWD);
        break;
      case SIGN_UP_STEP.CREATE_PASSWD:
        setStep(SIGN_UP_STEP.CREATE_NICKNAME);
        break;
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isFull) {
      if (
        step === SIGN_UP_STEP.CREATE_ID ||
        step === SIGN_UP_STEP.CREATE_PASSWD
      )
        nextStep();
      else if (step === SIGN_UP_STEP.CREATE_NICKNAME) handleSignup();
    }
  };

  const firstError = getFirstPasswordError(passWd, confirmPassWd);

  const isFull = getIsFull({
    step,
    id,
    passWd,
    confirmPassWd,
    nickName,
    firstError: !!firstError,
  });

  return (
    <MainContainer>
      {/* 이 부분 수정하기. 컴포넌트 따로 만들어서 ()부분 렌더링, 그리고 step도 1,2,3이 아닌 네이밍 하기 */}
      {step === SIGN_UP_STEP.CREATE_ID && (
        <CreateId
          id={id}
          onChange={handleIdChange}
          onKeyDown={onKeyDown}
          isFull={isFull}
          onNext={nextStep}
        />
      )}
      {step === SIGN_UP_STEP.CREATE_PASSWD && (
        <CreatePasswd
          passWd={passWd}
          confirmPassWd={confirmPassWd}
          onChangePassWd={handlePassWdChange}
          onChangeConfirmPassWd={handleConfirmPassWdChange}
          onKeyDown={onKeyDown}
          firstError={firstError ?? null}
          isFull={isFull}
          onNext={nextStep}
        />
      )}
      {step === SIGN_UP_STEP.CREATE_NICKNAME && (
        <CreateNickname
          nickName={nickName}
          onChange={(e) => setNickName(e.target.value)}
          onKeyDown={onKeyDown}
          isFull={isFull}
          onSubmit={handleSignup}
        />
      )}
      <div className="flex gap-1 text-xs">
        <span>이미 회원이신가요?</span>
        <button
          className="text-green-600 underline cursor-pointer"
          onClick={() => nav("/login")}
        >
          로그인
        </button>
      </div>
    </MainContainer>
  );
};

export default SignUp;
