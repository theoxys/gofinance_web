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
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>13/04/2021</td>
          </tr>

          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="withdraw">R$ 12.000,00</td>
            <td>13/04/2021</td>
          </tr>

          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>13/04/2021</td>
          </tr>
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
