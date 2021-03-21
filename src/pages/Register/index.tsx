import { Container, TextButton, AnimationBox } from "./styled";
import LogoSvg from "../../assets/logo.svg";
import { FormEvent, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Disclaimer } from "../Login/styled";
import { toast } from "react-toastify";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const { signUp } = useAuth();

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    const response = await signUp({
      name: name,
      email: email,
      password: password,
    });
    if (response.status === "error") {
      toast.error(response.message);
    } else {
      toast.success(response.message);
    }
  }

  return (
    <Container>
      <form onSubmit={handleLogin}>
        <AnimationBox>
          <img src={LogoSvg} alt="GoFinance" />
          <h2>Criar nova conta!</h2>
          <input
            type="text"
            placeholder="Usuário"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <input
            type="password"
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="login">Criar conta!</button>

          <TextButton to="/login">Já tenho uma conta!</TextButton>
        </AnimationBox>
      </form>
      <Disclaimer>
        Feito com 💚 por{" "}
        <a href="https://www.linkedin.com/in/matheusfpires/">Matheus Pires</a>
      </Disclaimer>
    </Container>
  );
};
