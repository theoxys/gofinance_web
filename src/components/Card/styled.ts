import styled from "styled-components";

export const Container = styled.div`
  width: 17.5rem;
  min-width: 17.5rem;
  height: 8.5rem;
  border-radius: 8px;
  background-color: var(--box);
  color: var(--text);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.positive {
    background-color: rgba(var(--rgba-green));
    border: 2px solid var(--green);
  }

  &.deposit {
    svg {
      color: var(--green);
    }
  }

  &.whitdraw {
    svg {
      color: var(--red);
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  strong {
    font-size: 1.7rem;
  }
`;
