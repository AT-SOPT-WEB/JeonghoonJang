import { createContext, useContext, useEffect, useState } from "react";
import { getMyProfile } from "../apis/user";

interface User {
  nickname: string;
}

const AuthContext = createContext<User | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    getMyProfile()
      .then((data) => {
        console.log("getMyProfile 응답 화긴:", data);
        setUser(data);
      })
      .catch(() => {
        localStorage.removeItem("userId");
        setUser(null);
      });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
