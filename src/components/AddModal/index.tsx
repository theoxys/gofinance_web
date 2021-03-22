import { useCallback, useState } from "react";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import Modal from "react-modal";
import { useAuth } from "../../hooks/useAuth";
import { useGroup } from "../../hooks/useGroups";
import { useTransaction } from "../../hooks/useTransactions";
import { Container, RadioBox, TransactionType } from "./styled";

interface ModalData {
  isOpen: boolean;
  closeModal(): void;
}

export const AddModal: React.FC<ModalData> = ({ isOpen, closeModal }) => {
  const [activeType, setActiveType] = useState("deposit");
  const [title, setTile] = useState("");
  const [value, setValue] = useState(0);
  const { user } = useAuth();
  const { setNewAbsolutBalance, absoluteBalance } = useGroup();
  const { createTransaction } = useTransaction();

  const handleSubmitTransaction = useCallback(
    async (event) => {
      event.preventDefault();
      await createTransaction({
        title,
        value,
        type: activeType,
        userId: user.id,
        groupId: user.group?.id,
      });
      const newAbsoluteValue =
        activeType === "deposit"
          ? absoluteBalance + value
          : absoluteBalance - value;
      await setNewAbsolutBalance(user.group?.id!, newAbsoluteValue);
      closeModal();
      setValue(0);
      setTile("");
      setActiveType("deposit");
    },
    [
      title,
      value,
      activeType,
      user,
      createTransaction,
      closeModal,
      absoluteBalance,
      setNewAbsolutBalance,
    ]
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <Container onSubmit={handleSubmitTransaction}>
        <h2>Cadastrar nova transação</h2>

        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTile(e.target.value)}
        />
        <input
          step="0.01"
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          onFocus={(e) => e.target.select()}
        />

        <TransactionType>
          <RadioBox
            type="button"
            onClick={() => setActiveType("deposit")}
            isActive={activeType === "deposit"}
            color="#85CC9D"
          >
            <FiArrowUpCircle />
            Entrada
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setActiveType("withdraw")}
            isActive={activeType === "withdraw"}
            color="#E52E4D"
          >
            <FiArrowDownCircle />
            Saida
          </RadioBox>
        </TransactionType>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
