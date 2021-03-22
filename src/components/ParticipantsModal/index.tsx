import Modal from "react-modal";
import { useGroup } from "../../hooks/useGroups";
import { LetterAvatar } from "../Header";
import { Container, ParticipantCard } from "./styled";

interface ModalData {
  isOpen: boolean;
  closeModal(): void;
}

export const ParticipantsModal: React.FC<ModalData> = ({
  isOpen,
  closeModal,
}) => {
  const { participants } = useGroup();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <Container>
        <h2>Participantes do Grupo:</h2>
        {participants.map((participant, index) => (
          <ParticipantCard key={index}>
            <main>
              <LetterAvatar username={participant.username} />
            </main>
            <h3>{participant.username}</h3>
          </ParticipantCard>
        ))}
      </Container>
    </Modal>
  );
};
