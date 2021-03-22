import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
    0% {
        background-position: right top;
        opacity: 0.4;
    }
    50%{
        opacity: 1;
    }
    100% {
        background-position: left top;
        opacity: 0.4;
    }
`;

export const Container = styled.div`
  margin-top: 1rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    .loading {
      animation: ${shimmer} 1.2s ease infinite;
      border-radius: 0.5rem !important;
      height: 3.6rem;
      background: linear-gradient(
        270deg,
        #1c1d3f 0%,
        #1c1d3f 28.65%,
        #282949 50.52%,
        #1c1d3f 70.83%,
        #1c1d3f 100%
      );
      background-size: 300% auto;
      background-repeat: no-repeat;
    }

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
