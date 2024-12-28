import React from "react";
import styled from "styled-components";
import Vaga from "./vaga";

const VagasSection = styled.section`
  padding: 2rem;
  background: #121212;
`;

const Lista = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export default function ListaVagas() {
  const vagas = [
    { title: "Desenvolvedor Front-End", description: "Trabalhe com React e Styled Components." },
    { title: "Designer UI/UX", description: "Crie interfaces incríveis." },
    { title: "DevOps", description: "Automatize processos e mantenha sistemas." },
  ];

  return (
    <VagasSection>
      <h2>Vagas Disponíveis</h2>
      <Lista>
        {vagas.map((vaga, index) => (
          <Vaga key={index} title={vaga.title} description={vaga.description} />
        ))}
      </Lista>
    </VagasSection>
  );
}