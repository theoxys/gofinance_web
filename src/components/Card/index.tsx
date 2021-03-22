import { Container } from "./styled";
import { FiDollarSign } from "react-icons/fi";
import { IconType } from "react-icons";
import React from "react";

interface CardData {
  className?: string;
  icon?: IconType;
  type?: string;
  title: string;
  value?: string;
}

export const Card: React.FC<CardData> = ({ className, icon, title, value }) => {
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
