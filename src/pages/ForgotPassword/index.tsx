import { Container, TextButton, AnimationBox } from "./styled";
import LogoSvg from "../../assets/logo.svg";
import { FormEvent, useState } from "react";
import { Disclaimer } from "../Login/styled";

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <Container>
      <form onSubmit={handleLogin}>
        <AnimationBox>
          <img src={LogoSvg} alt="GoFinance" />
          <h2>Recupar senha!</h2>
          <span>
            Insira seu email abaixo e será enviado um link para redefinir sua
            senha!
          </span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="login">Enviar Recuparação de senha!</button>
          <TextButton to="/login">Voltar</TextButton>
        </AnimationBox>
      </form>
      <Disclaimer>
        Feito com 💚 por{" "}
        <a href="https://www.linkedin.com/in/matheusfpires/">Matheus Pires</a>
      </Disclaimer>
    </Container>
  );
};
