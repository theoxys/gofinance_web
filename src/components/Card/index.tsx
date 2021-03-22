import { Container } from "./styled";
import { FiDollarSign } from "react-icons/fi";
import { IconType } from "react-icons";
import React from "react";
import { useTransaction } from "../../hooks/useTransactions";

interface CardData {
  className?: string;
  icon?: IconType;
  type?: string;
  title: string;
  value?: string;
}

export const Card: React.FC<CardData> = ({ className, icon, title, value }) => {
  //onst { loadingTransactions } = useTransaction();
  let loadingTransactions = true;
  if (loadingTransactions) {
    return <CardLoading />;
  }

  return (
    <Container className={className}>
      <header>
        <span>{title}</span>
        {icon ? React.createElement(icon) : <FiDollarSign />}
      </header>
      <strong>{value}</strong>
    </Container>
  );
};

const CardLoading: React.FC = () => {
  return (
    <Container className="loading">
      <header>
        <span className="loading"></span>
        <svg className="loading"></svg>
      </header>
      <strong className="loading"></strong>
    </Container>
  );
};
