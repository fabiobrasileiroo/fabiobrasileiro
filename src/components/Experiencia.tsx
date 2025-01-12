import React from 'react';

const Experiencia = () => {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const mesAtual = dataAtual.getMonth() + 1; // getMonth() retorna de 0 a 11, por isso +1

  const anoInicio = 2023;
  const mesInicio = 12; // Dezembro

  let anosDeExperiencia = anoAtual - anoInicio;

  // Verifica se o mês atual é antes de dezembro, se sim, não conta o ano atual
  if (mesAtual < mesInicio) {
    anosDeExperiencia--;
  }

  // Garante que mostre pelo menos 1+
  anosDeExperiencia = anosDeExperiencia < 1 ? 1 : anosDeExperiencia + 1;

  return (
    <div>
      <div className="text-2xl font-bold text-[#4A90E2]">
        {anosDeExperiencia}+
      </div>
      <div className="text-sm text-[#8B9BB4]">Anos de Experiência</div>
    </div>
  );
};

export default Experiencia;
