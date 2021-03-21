import { Card } from "../Card";
import { Container, Grid, Content, Button } from "./styled";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import { AddModal } from "../AddModal";
import { useCallback, useState } from "react";

export const Dashboard = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenAddModal = useCallback(() => {
    setIsAddModalOpen(true);
  }, []);

  const handleCloseAddModal = useCallback(() => {
    setIsAddModalOpen(false);
  }, []);

  return (
    <Container>
      <Content>
        <Grid>
          <Card icon={FiArrowUpCircle} className="deposit" title="Entradas" />
          <Card icon={FiArrowDownCircle} className="whitdraw" title="Saidas" />
          <Card className="positive" title="Total" />
        </Grid>
        <Card className="positive" title="Minha Parte" />
        <section>
          <Button>Quitar minha parte</Button>
          <Button onClick={handleOpenAddModal}>Nova Transação</Button>
        </section>
      </Content>
      <AddModal isOpen={isAddModalOpen} closeModal={handleCloseAddModal} />
    </Container>
  );
};
