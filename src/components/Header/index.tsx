import React from "react";
import { Container, Content, Capitalize } from "./styled";
import LogoSvg from "../../assets/logo.svg";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useAuth } from "../../hooks/useAuth";

export const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  const LetterAvatar = () => {
    return (
      <Capitalize>
        <strong>{user.name.charAt(0)}</strong>
      </Capitalize>
    );
  };

  return (
    <Container>
      <Content>
        <img src={LogoSvg} alt="GoFinance" />
        <main>
          <button className="icon-button" onClick={signOut}>
            <RiLogoutBoxLine />
          </button>

          <span>{user.name}</span>
          <button>
            {user.avatar ? (
              <img src={user.avatar} alt="Profile" />
            ) : (
              <LetterAvatar />
            )}
          </button>
        </main>
      </Content>
    </Container>
  );
};
