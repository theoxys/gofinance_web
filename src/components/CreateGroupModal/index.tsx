import { useCallback, useState } from "react";
import Modal from "react-modal";
import { useAuth } from "../../hooks/useAuth";
import { useGroup } from "../../hooks/useGroups";
import { Container } from "./styled";

interface ModalData {
  isOpen: boolean;
  closeModal(): void;
}

export const CreateGroupModal: React.FC<ModalData> = ({
  isOpen,
  closeModal,
}) => {
  const [name, setName] = useState("");
  const [groupId, setGroupId] = useState("");
  const { user, updateUser } = useAuth();

  const { createGroup } = useGroup();

  const handleCreateGroup = useCallback(
    async (event) => {
      event.preventDefault();
      const newUserData = await createGroup({
        name,
        group_id: groupId,
        userId: user.id,
      });
      updateUser(newUserData);
      closeModal();
    },
    [user, name, groupId, updateUser, closeModal, createGroup]
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <Container onSubmit={handleCreateGroup}>
        <h2>Criar novo grupo</h2>

        <input
          type="text"
          placeholder="Nome do Grupo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="ID do grupo (Deve ser unico e sem espaços)"
          value={groupId}
          onChange={(e) => setGroupId(e.target.value)}
        />

        <button type="submit">Criar Grupo</button>
      </Container>
    </Modal>
  );
};
