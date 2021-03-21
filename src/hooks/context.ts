import { createContext } from "react";

export const StoreContext = createContext({
  token: null,
  setToken: (token: any) => {},
});
