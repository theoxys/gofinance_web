import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text);
      padding: 1rem 2rem;
      line-height: 1.5rem;

      &:first-child {
        text-align: left;
      }
    }

    td {
      padding: 1rem 2rem;
      border: none;
      border-collapse: collapse;
      background: var(--box);
      color: var(--text);
      text-align: center;

      &:first-child {
        border-radius: 8px 0 0 8px;
        text-align: left;
      }

      &:last-child {
        border-radius: 0 8px 8px 0;
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
