import { Router } from "./routes/index.routes";
import { AuthProvider } from "./hooks/useAuth";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TransactionProvider } from "./hooks/useTransactions";
import { GroupProvider } from "./hooks/useGroups";

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <GroupProvider>
        <TransactionProvider>
          <Router />
          <GlobalStyle />
          <ToastContainer />
        </TransactionProvider>
      </GroupProvider>
    </AuthProvider>
  );
};
