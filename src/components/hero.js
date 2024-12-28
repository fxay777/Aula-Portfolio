import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background: #0a0a0a;
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #f04e30;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
`;

export default function Hero() {
  return (
    <HeroSection>
      <Title>Seu Nome</Title>
      <Subtitle>Desenvolvedor Front-End</Subtitle>
    </HeroSection>
  );
}