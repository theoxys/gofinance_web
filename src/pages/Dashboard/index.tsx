import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { useTransaction } from "../../hooks/useTransactions";
import { Container } from "./styled";

export const DashboardPage: React.FC = () => {
  const { loadingTransactions } = useTransaction();

  return (
    <Container>
      <Header />
      <Dashboard />
      <div className="data-box">
        <Table isLoading={loadingTransactions} />
      </div>
    </Container>
  );
};
