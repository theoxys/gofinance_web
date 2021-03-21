import { useEffect, useState } from "react";
import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { Container } from "./styled";

export const DashboardPage: React.FC = () => {
  const [isTableLoading, setIsTableLoading] = useState(false);

  useEffect(() => {
    setIsTableLoading(true);
  }, []);

  return (
    <Container>
      <Header />
      <Dashboard />
      <div className="data-box">
        <Table isLoading={isTableLoading} />
      </div>
    </Container>
  );
};
