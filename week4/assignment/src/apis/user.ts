import { api } from "./index";

export const getMyProfile = async () => {
  const res = await api.get("/api/v1/users/me");
  return res.data.data;
};

export const updateNickname = async (nickname: string) => {
  const res = await api.patch("/api/v1/users", { nickname });
  return res.data;
};

export const searchNicknames = async (keyword: string) => {
  const res = await api.get("/api/v1/users", {
    params: { keyword },
  });
  return res.data.data.nicknameList;
};
