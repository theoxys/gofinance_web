import styled from "styled-components";
import { transparentize } from "polished";

interface RadioBoxData {
  isActive?: boolean;
  color: string;
}

export const Container = styled.form`
  h2 {
    color: var(--text);
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 3.75rem;

    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }

  button[type="submit"] {
    height: 3.75rem;
    width: 100%;
    border-radius: 8px;
    background-color: var(--green);
    color: var(--text);
    font-weight: 600;
    transition: all ease 0.2s;
    margin-top: 1rem;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RadioBox = styled.button<RadioBoxData>`
  width: 100%;
  height: 3.75rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => (props.isActive ? props.color : "white")};
  transition: all ease 0.1s;
  background-color: ${(props) =>
    props.isActive ? transparentize(0.5, props.color) : "white"};
  outline: transparent;
  color: ${(props) => (props.isActive ? "white" : "#000")};

  &:hover {
    border: 2px solid
      ${(props) => (props.isActive ? props.color : "rgba(0,0,0,0.2)")};
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;
  }

  & + button {
    margin-left: 1rem;
  }
`;
