import { Container } from "./styled";

export const Table: React.FC = () => {
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
