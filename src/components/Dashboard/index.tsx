import { Card } from "../Card";
import { Container, Grid, Content, Button } from "./styled";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import { AddModal } from "../AddModal";
import { useCallback, useState } from "react";
import { useTransaction } from "../../hooks/useTransactions";
import { useGroup } from "../../hooks/useGroups";
import { useAuth } from "../../hooks/useAuth";
import moment from "moment";
import { toast } from "react-toastify";

export const Dashboard = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { transactions, createTransaction } = useTransaction();
  const { participants } = useGroup();
  const { user, quiteUserValue } = useAuth();

  const handleOpenAddModal = useCallback(() => {
    setIsAddModalOpen(true);
  }, []);

  const handleCloseAddModal = useCallback(() => {
    setIsAddModalOpen(false);
  }, []);

  const amount = transactions?.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.value;
        acc.balance += transaction.value;
        if (moment(transaction.created_at).diff(user.quited_date) > 0) {
          acc.userSlice += transaction.value;
        }
      } else {
        acc.withdraws += transaction.value;
        acc.balance -= transaction.value;
        if (moment(transaction.created_at).diff(user.quited_date) > 0) {
          acc.userSlice -= transaction.value;
        }
      }
      return acc;
    },
    { deposits: 0, withdraws: 0, balance: 0, userSlice: 0 }
  );

  const totalPayments = participants.reduce((payment, participant) => {
    if (
      participant.id !== user.id &&
      moment(user.payd_value).diff(participant.quited_date) > 0
    ) {
      return (payment += participant.payd_value);
    }
    return payment;
  }, 0);

  const userValue = amount?.userSlice! / 3 + totalPayments / 3;

  const Currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleQuitUserValue = useCallback(async () => {
    await createTransaction({
      title:
        amount?.userSlice! > 0
          ? `${user.name} - Retirou`
          : `${user.name} - Pagou`,
      value: Math.abs(userValue),
      type: amount?.userSlice! > 0 ? "withdraw" : "deposit",
      userId: user.id,
      groupId: user.group?.id,
    });
    await quiteUserValue(user.id, userValue);

    toast.success("Você quitou suas pendencias!");
  }, [createTransaction, user, amount, quiteUserValue, userValue]);

  return (
    <Container>
      <Content>
        <Grid>
          <Card
            icon={FiArrowUpCircle}
            className="deposit"
            title="Entradas"
            value={Currency.format(amount?.deposits!)}
          />
          <Card
            icon={FiArrowDownCircle}
            className="whitdraw"
            title="Saidas"
            value={`-${Currency.format(amount?.withdraws!)}`}
          />
          <Card
            className={amount?.balance! > 0 ? "positive" : "negative"}
            title="Total"
            value={Currency.format(amount?.balance!)}
          />
        </Grid>
        <Card
          className={amount?.userSlice! > 0 ? "positive" : "negative"}
          title="Minha Parte"
          value={Currency.format(userValue)}
        />
        <section>
          <Button onClick={handleQuitUserValue}>Quitar minha parte</Button>
          <Button onClick={handleOpenAddModal}>Nova Transação</Button>
        </section>
      </Content>
      <AddModal isOpen={isAddModalOpen} closeModal={handleCloseAddModal} />
    </Container>
  );
};
