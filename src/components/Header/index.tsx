import React, { useCallback } from "react";
import { Container, Content, Capitalize } from "./styled";
import LogoSvg from "../../assets/logo.svg";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useAuth } from "../../hooks/useAuth";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiGroupLine } from "react-icons/ri";
import { VscCloseAll } from "react-icons/vsc";
import ReactTooltip from "react-tooltip";
import { useGroup } from "../../hooks/useGroups";

export const Header: React.FC = () => {
  const { signOut, user, updateUser } = useAuth();
  const { leaveGroup } = useGroup();

  const handleLeaveGroup = useCallback(async () => {
    const newUser = await leaveGroup(user.id);
    updateUser(newUser);
  }, [user, updateUser, leaveGroup]);

  return (
    <Container>
      <Content>
        <section>
          <img src={LogoSvg} alt="GoFinance" />
          <h2>{user.group?.name}</h2>
          <button
            className="icon-button"
            onClick={handleLeaveGroup}
            data-tip="Sair do grupo"
          >
            <VscCloseAll />
          </button>
        </section>
        <main>
          <button className="icon-button" data-tip="Notificações">
            <IoMdNotificationsOutline />
          </button>

          <button className="icon-button" data-tip="Participantes do grupo">
            <RiGroupLine />
          </button>

          <button className="icon-button" onClick={signOut} data-tip="Logout">
            <RiLogoutBoxLine />
          </button>

          <span>{user.name}</span>
          <button>
            {user.avatar ? (
              <img src={user.avatar} alt="Profile" />
            ) : (
              <LetterAvatar username={user.name} />
            )}
          </button>
        </main>
      </Content>
      <ReactTooltip place="bottom" />
    </Container>
  );
};

interface LetterAvatarData {
  username: string;
}

export const LetterAvatar: React.FC<LetterAvatarData> = ({ username }) => {
  return (
    <Capitalize>
      <strong>{username.charAt(0)}</strong>
    </Capitalize>
  );
};
