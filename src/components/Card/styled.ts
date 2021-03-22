import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
    0% {
        background-position: right top;
        opacity: 0.3;
    }
    50%{
        opacity: 1;
    }
    100% {
        background-position: left top;
        opacity: 0.3;
    }
`;

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
  transition: all ease 0.3s;

  &.positive {
    background-color: rgba(var(--rgba-green));
    border: 2px solid var(--green);
  }

  &.negative {
    background-color: rgba(var(--rgba-red));
    border: 2px solid var(--red);
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

    span {
      &.loading {
        height: 1.2rem;
        width: 50%;
      }
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  strong {
    font-size: 1.7rem;

    &.loading {
      height: 2rem;
      width: 100%;
    }
  }

  .loading {
    animation: ${shimmer} 1.5s ease infinite;
    border-radius: 0.5rem !important;
    min-width: 2rem;
    background: linear-gradient(
      270deg,
      #292a4a 0%,
      #292a4a 28.65%,
      #3e3f5c 50.52%,
      #292a4a 70.83%,
      #292a4a 100%
    );
    background-size: 300% auto;
    background-repeat: no-repeat;
  }
`;
