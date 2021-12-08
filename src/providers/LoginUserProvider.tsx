import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";

import { User } from "../types/api/user";

type LoignUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  loginUser: LoignUser | null;
  setLoginUser: Dispatch<SetStateAction<LoignUser | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

// このLoginUserProvider配下でContextの値を参照できるようになる
// →Routerのとこを囲う
export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoignUser | null>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
