import { api } from "./index";
import axios from "axios";

interface Login {
  loginId: string;
  password: string;
  nickname?: string;
}

export const signup = async (data: Login) => {
  try {
    const res = await api.post("/api/v1/auth/signup", data);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "회원가입 요청 실패");
    } else {
      throw new Error("예상치 못한 에러 발생");
    }
  }
};

export const signin = async (data: Login) => {
  const res = await api.post("/api/v1/auth/signin", data);
  return res.data.data;
};
