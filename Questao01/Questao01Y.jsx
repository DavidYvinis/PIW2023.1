import React, { useState } from "react";

const Questao01Y = ({ alunos, setMedias, setLoading }) => {
  // Função que calcula as médias dos alunos recebidos via props e as armazena em um vetor
  React.useEffect(() => {
    const medias = alunos.map((aluno) => (aluno.notas.ap1 + aluno.notas.ap2) / 2);
    setMedias(medias);
    setLoading(false);
  }, [alunos, setMedias, setLoading]);

  // Questao01Y não renderiza nada, apenas faz o cálculo das médias e repassa para o componente pai
  return null;
};