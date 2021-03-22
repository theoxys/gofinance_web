import { useTransaction } from "../../hooks/useTransactions";
import { Container } from "./styled";

interface Userdata {
  name: string;
  avatar: string;
}

interface TransactionData {
  title: string;
  value: number;
  type: string;
  creator: Userdata;
  date: string;
}

interface TableData {
  data?: TransactionData[];
  isLoading: boolean;
}

export const Table: React.FC<TableData> = ({ data, isLoading }) => {
  const { transactions } = useTransaction();

  if (isLoading) {
    return <LoadingTable />;
  }

  return (
    <Container>
      <table cellSpacing="0">
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{transaction.value}</td>
              <td>{transaction.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

const LoadingTable = () => {
  const loaders = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Carregando dados...</th>
          </tr>
        </thead>
        <tbody>
          {loaders.map((loader) => (
            <tr key={loader}>
              <td className="loading"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
