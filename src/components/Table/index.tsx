import { useTransaction } from "../../hooks/useTransactions";
import { Container } from "./styled";
import moment from "moment";
import "moment/locale/pt-br";

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

  const Currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

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
              <td className={transaction.type}>
                {Currency.format(transaction.value)}
              </td>
              <td>
                {moment(transaction.created_at).format(
                  "DD [de] MMMM [às] hh:mm"
                )}
              </td>
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
