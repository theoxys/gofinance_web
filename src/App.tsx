import { Router } from "./routes/index.routes";
import { AuthProvider } from "./hooks/useAuth";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router />
      <GlobalStyle />
      <ToastContainer />
    </AuthProvider>
  );
};
