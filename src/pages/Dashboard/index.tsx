import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { Container } from "./styled";

export const DashboardPage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Dashboard />
      <div className="data-box">
        <Table />
      </div>
    </Container>
  );
};
