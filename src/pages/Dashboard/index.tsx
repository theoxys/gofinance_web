import { useEffect } from "react";
import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { useAuth } from "../../hooks/useAuth";
import { useGroup } from "../../hooks/useGroups";
import { useTransaction } from "../../hooks/useTransactions";
import { Container } from "./styled";

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { loadingTransactions, getTransactions } = useTransaction();
  const { getGroup } = useGroup();

  useEffect(() => {
    getTransactions(user.group?.id);
    getGroup(user.group?.id!);
  }, [getTransactions, user, getGroup]);

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
