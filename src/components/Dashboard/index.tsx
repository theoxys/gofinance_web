import { Card } from "../Card";
import { Container, Grid, Content, Button } from "./styled";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import { AddModal } from "../AddModal";
import { useCallback, useState } from "react";
import { useTransaction } from "../../hooks/useTransactions";
import { useGroup } from "../../hooks/useGroups";

export const Dashboard = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { transactions } = useTransaction();
  const { participants } = useGroup();

  const handleOpenAddModal = useCallback(() => {
    setIsAddModalOpen(true);
  }, []);

  const handleCloseAddModal = useCallback(() => {
    setIsAddModalOpen(false);
  }, []);

  const totalDeposit = transactions?.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.value;
        acc.balance += transaction.value;
      } else {
        acc.withdraws += transaction.value;
        acc.balance -= transaction.value;
      }
      acc.userSlice = acc.balance / participants.length;
      return acc;
    },
    { deposits: 0, withdraws: 0, balance: 0, userSlice: 0 }
  );

  const Currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Container>
      <Content>
        <Grid>
          <Card
            icon={FiArrowUpCircle}
            className="deposit"
            title="Entradas"
            value={Currency.format(totalDeposit?.deposits!)}
          />
          <Card
            icon={FiArrowDownCircle}
            className="whitdraw"
            title="Saidas"
            value={`-${Currency.format(totalDeposit?.withdraws!)}`}
          />
          <Card
            className="positive"
            title="Total"
            value={Currency.format(totalDeposit?.balance!)}
          />
        </Grid>
        <Card
          className="positive"
          title="Minha Parte"
          value={Currency.format(totalDeposit?.userSlice!)}
        />
        <section>
          <Button>Quitar minha parte</Button>
          <Button onClick={handleOpenAddModal}>Nova Transação</Button>
        </section>
      </Content>
      <AddModal isOpen={isAddModalOpen} closeModal={handleCloseAddModal} />
    </Container>
  );
};
