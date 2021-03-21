import { Container, TextButton, AnimationBox, LogoutButton } from "./styled";
import LogoSvg from "../../assets/logo.svg";
import { FormEvent, useState } from "react";
import { Disclaimer } from "../Login/styled";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useAuth } from "../../hooks/useAuth";
import { joinGroup } from "../../services/groups";

export const JoinGroupPage = () => {
  const [groupId, setGroupId] = useState("");

  const { signOut, user, updateUser } = useAuth();

  async function handleJoinGroup(event: FormEvent) {
    event.preventDefault();
    const response = await joinGroup(user.id, groupId);
    if (response) {
      updateUser(response);
    }
  }

  return (
    <Container>
      <form onSubmit={handleJoinGroup}>
        <AnimationBox>
          <img src={LogoSvg} alt="GoFinance" />
          <h2>Você ainda não pertenca a nenhum grupo!</h2>
          <span>
            Crie seu próprio grupo de finanças ou entre em algum existente
            digitanto o ID no campo acima!
          </span>
          <input
            type="text"
            placeholder="ID do Grupo"
            value={groupId}
            onChange={(e) => setGroupId(e.target.value)}
          />

          <button className="login">Entrar no grupo!</button>
          <TextButton to="/login">Quero criar meu próprio grupo!</TextButton>
        </AnimationBox>
      </form>
      <LogoutButton onClick={signOut}>
        <RiLogoutBoxLine />
        Sair
      </LogoutButton>
      <Disclaimer>
        Feito com 💚 por{" "}
        <a href="https://www.linkedin.com/in/matheusfpires/">Matheus Pires</a>
      </Disclaimer>
    </Container>
  );
};
