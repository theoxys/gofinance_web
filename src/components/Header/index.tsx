import React, { useCallback } from "react";
import { Container, Content, Capitalize } from "./styled";
import LogoSvg from "../../assets/logo.svg";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useAuth } from "../../hooks/useAuth";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiGroupLine } from "react-icons/ri";
import { VscCloseAll } from "react-icons/vsc";
import { leaveGroup } from "../../services/groups";

export const Header: React.FC = () => {
  const { signOut, user, updateUser } = useAuth();

  const handleLeaveGroup = useCallback(async () => {
    const newUser = await leaveGroup(user.id);
    updateUser(newUser);
  }, [user, updateUser]);

  return (
    <Container>
      <Content>
        <section>
          <img src={LogoSvg} alt="GoFinance" />
          <h2>{user.group?.name}</h2>
          <button className="icon-button" onClick={handleLeaveGroup}>
            <VscCloseAll />
          </button>
        </section>
        <main>
          <button className="icon-button">
            <IoMdNotificationsOutline />
          </button>

          <button className="icon-button">
            <RiGroupLine />
          </button>

          <button className="icon-button" onClick={signOut}>
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
