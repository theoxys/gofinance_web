import styled from "styled-components";

export const Container = styled.div`
  h2 {
    color: var(--text);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const ParticipantCard = styled.div`
  background-color: var(--background);
  margin: 1rem 0;
  border-radius: 0.5rem;
  padding: 1rem;

  color: var(--text);

  display: flex;
  align-items: center;
  justify-content: flex-start;

  div {
    width: 2.3rem;
    height: 2.3rem;
    margin-right: 1rem;
  }
`;
