import styled from "styled-components";

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
    background-color: var(--background);
    color: var(--text);
    &::placeholder {
      color: var(--text);
    }
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
