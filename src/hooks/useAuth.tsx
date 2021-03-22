import { createContext, useCallback, useState, useContext } from "react";
import { api } from "../services/api";

interface LoginCredentials {
  email: string;
  password: string;
}

interface GroupData {
  name: string;
  id: string;
  group_id: string;
}
interface UserData {
  email: string;
  name: string;
  group: GroupData | null;
  avatar?: string | null;
  id: string;
  payd_value: number;
  quited_date: string;
}
interface AuthState {
  token: string;
  user: UserData;
  refreshToken?: string;
}
interface ResponseData {
  status: string;
  message: string;
}
interface ContextData {
  token: string;
  user: UserData;
  signIn(credentials: LoginCredentials): Promise<void>;
  signOut(): void;
  signUp(credentials: any): Promise<ResponseData>;
  updateUser(credentials: any): void;
  quiteUserValue(userId: string, value: number): Promise<void>;
}

export const AuthContext = createContext<ContextData>({} as ContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("gofinance:token");
    const user = localStorage.getItem("gofinance:user");

    if (token && user) {
      api.defaults.headers.authorization = "Bearer " + token;

      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signUp = useCallback(async ({ name, email, password }) => {
    try {
      const response = await api.post("auth/local/register", {
        username: name,
        email,
        password,
      });

      const user = {
        email: response.data.user.email,
        name: response.data.user.username,
        group: response.data.user.group,
        avatar: response.data.user.avatar,
        id: response.data.user.id,
        payd_value: response.data.user.payd_value,
        quited_date: response.data.user.quited_date,
      };
      const token = response.data.jwt;
      setData({ token: token, user: user });

      localStorage.setItem("gofinance:token", token);
      localStorage.setItem("gofinance:user", JSON.stringify(user));
      api.defaults.headers.authorization = "Bearer " + token;

      return {
        status: "success",
        message: "Seu cadastro foi realizado com sucesso!",
      };
    } catch (error) {
      return {
        status: "error",
        message: error.response.data.message[0].messages[0].message,
      };
    }
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("auth/local", {
      identifier: email,
      password,
    });

    const token = response.data.jwt;
    const user = {
      email: response.data.user.email,
      name: response.data.user.username,
      group: response.data.user.group,
      avatar: response.data.user.avatar,
      id: response.data.user.id,
      payd_value: response.data.user.payd_value,
      quited_date: response.data.user.quited_date,
    };
    localStorage.setItem("gofinance:token", token);
    localStorage.setItem("gofinance:user", JSON.stringify(user));

    api.defaults.headers.authorization = "Bearer " + token;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("gofinance:token");
    localStorage.removeItem("gofinance:user");
    setData({} as AuthState);
    api.defaults.headers = {};
  }, []);

  const updateUser = useCallback(
    (user: any) => {
      const newUser = {
        email: user.email,
        name: user.username,
        group: user.group,
        avatar: user.avatar,
        id: user.id,
        payd_value: user.payd_value,
        quited_date: user.quited_date,
      };
      localStorage.setItem("gofinance:user", JSON.stringify(newUser));
      setData({ user: newUser, token: data.token });
    },
    [data]
  );

  const quiteUserValue = useCallback(
    async (userId: string, value: number) => {
      const response = await api.put(`users/${userId}`, {
        quited_date: Date.now().toString(),
        payd_value: value,
      });
      const user = {
        email: response.data.email,
        name: response.data.username,
        group: response.data.group,
        avatar: response.data.avatar,
        id: response.data.id,
        payd_value: response.data.payd_value,
        quited_date: response.data.quited_date,
      };
      localStorage.setItem("gofinance:user", JSON.stringify(user));
      setData({ user, token: data.token });
    },
    [data]
  );

  return (
    <AuthContext.Provider
      value={{
        token: data.token,
        signIn,
        signOut,
        signUp,
        user: data.user,
        updateUser,
        quiteUserValue,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): ContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
