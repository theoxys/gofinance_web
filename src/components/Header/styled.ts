import styled from "styled-components";

export const Container = styled.header`
  background: var(--box);
`;

export const Content = styled.div`
  max-width: calc(1440px + 2rem);
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  section {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      margin-left: 1rem;
    }

    h2 {
      margin-left: 1rem;
      padding-left: 1rem;
      border-left: 2px solid rgba(255, 255, 255, 0.2);
      color: var(--text);
    }
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: var(--text);
      margin-right: 1rem;
      margin-left: 1rem;
    }
  }

  button {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    overflow: hidden;
    padding: 2px;
    border: 2px solid var(--text);
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    img {
      min-width: 3rem;
      min-height: 3rem;
    }
  }

  .icon-button {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: transparent;
    transition: all ease 0.2s;
    border: none;
    box-shadow: none;

    &:hover {
      background-color: rgba(var(--rgba-primary), 0.2);
    }

    svg {
      width: 1.2rem;
      height: 1.2rem;
      color: var(--text);
    }
  }

  img {
    max-height: 29px;
  }
`;

export const Capitalize = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  strong {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;
