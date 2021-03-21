import React from "react";
import { Container, Content, Capitalize } from "./styled";
import LogoSvg from "../../assets/logo.svg";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useAuth } from "../../hooks/useAuth";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiGroupLine } from "react-icons/ri";

export const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Content>
        <section>
          <img src={LogoSvg} alt="GoFinance" />
          <h2>{user.group?.name}</h2>
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
