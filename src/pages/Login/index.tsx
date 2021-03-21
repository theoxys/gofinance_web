import { Container, TextButton, AnimationBox, Disclaimer } from "./styled";
import LogoSvg from "../../assets/logo.svg";
import { FormEvent, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { ImGoogle3 } from "react-icons/im";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    await signIn({ email: email, password: password });
  }

  return (
    <Container>
      <form onSubmit={handleLogin}>
        <AnimationBox>
          <img src={LogoSvg} alt="GoFinance" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login">Entrar</button>

          <TextButton to="/register">Criar nova conta!</TextButton>

          <title>
            <span>Outras opções</span>
          </title>

          <button className="login">
            <ImGoogle3 />
            Entrar com a conta Google
          </button>
          <TextButton to="/forgot-password">Esqueci minha senha!</TextButton>
        </AnimationBox>
      </form>
      <Disclaimer>
        Feito com 💚 por{" "}
        <a href="https://www.linkedin.com/in/matheusfpires/">Matheus Pires</a>
      </Disclaimer>
    </Container>
  );
};
