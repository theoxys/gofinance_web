import { useCallback, useEffect, useState } from "react";
import { StoreContext } from "./context";

export const StoreProvider: React.FC = ({ children }) => {
  const [token, setTokenData] = useState<any>();

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      const storedToken = localStorage.getItem("token");
      setTokenData(storedToken);
    }
  }, []);

  const setToken = useCallback((token) => {
    setTokenData(token);
    localStorage.setItem("token", token);
  }, []);

  return (
    <StoreContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
