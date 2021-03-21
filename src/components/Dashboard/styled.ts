import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  align-items: center;
  width: 100%;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: 1rem;
    height: 8.5rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 17.5rem);
  grid-gap: 1rem;
  padding-right: 1rem;
  border-right: 2px solid rgba(255, 255, 255, 0.1);
  margin-right: 1rem;
`;

export const Button = styled.button`
  height: 3.75rem;
  width: 12.5rem;
  border-radius: 8px;
  background-color: var(--primary);
  color: var(--text);
  font-weight: 500;
  transition: all ease 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
