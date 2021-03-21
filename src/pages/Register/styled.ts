import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const FadeUp = keyframes`
    from{
        opacity: 0;
        transform: translateX(30px)
    }to{
        opacity: 100;
        transform: translateY(0)
    }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  form {
    width: 25rem;
    height: 40rem;

    border-radius: 0.5rem;
    background-color: var(--box);

    img {
      width: 85%;
      margin-bottom: 3rem;
    }

    h2 {
      margin-bottom: 1.5rem;
    }
    input {
      height: 3.75rem;
      width: 85%;
      padding: 0.5rem 2rem;
      line-height: 1.5rem;
      border-radius: 0.5rem;
      color: var(--box);
      margin-bottom: 1rem;
    }

    .login {
      height: 3.75rem;
      width: 85%;
      border-radius: 8px;
      background-color: var(--primary);
      color: var(--text);
      font-weight: 500;
      transition: all ease 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.5rem;

      svg {
        height: 1.5rem;
        width: 1.5rem;
        margin-right: 1rem;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }

    title {
      width: 100%;
      border-bottom: 1px solid var(--text);
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.6;
      margin-top: 0.5rem;
      margin-bottom: 2rem;

      span {
        font-size: 1rem;
        line-height: 1.5rem;
        position: relative;
        top: 0.75rem;
        padding: 0 0.5rem;
        background-color: var(--box);
      }
    }
  }
`;

export const TextButton = styled(Link)`
  height: 2.5rem;
  color: var(--text);
  width: 85%;
  font-weight: 500;
  background-color: transparent;
  border: 2px solid transparent;
  transition: all ease 0.2s;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(var(--rgba-primary), 0.2);
    border: 2px solid var(--primary);
  }
`;

export const AnimationBox = styled.div`
  color: var(--text);

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  animation: ${FadeUp} 0.3s ease;
`;
