import React, { useState } from "react";

const Questao01Y = ({ alunos, setMedias, setLoading }) => {
  // Função que calcula as médias dos alunos e armazena elas em um vetor
  React.useEffect(() => {
    const medias = alunos.map((aluno) => (aluno.notas.ap1 + aluno.notas.ap2) / 2);
    setMedias(medias);
    setLoading(false);
  }, [alunos, setMedias, setLoading]);

  return null;
};

function Questao01X() {
  const [loading, setLoading] = useState(true);
  const [medias, setMedias] = useState([]);

  // Função que filtra os alunos com média abaixo de 5
  const renderAlunosAbaixoMedia = () => {
    const alunosAbaixoMedia = [];
    medias.forEach((media, i) => {
      if (media <= 5) {
        alunosAbaixoMedia.push(<p key={i}>{alunos[i].nome}</p>);
      }
    });
    return alunosAbaixoMedia;
  };

  const alunos = [
    { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
    { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
    { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } },
  ];

  // Função que inicializa a variável de estado "medias" com o vetor de médias recebido de Questao01Y
  const setMediasWrapper = (medias) => {
    setMedias(medias);
    setLoading(false);
  };

  // Renderiza o componente Questao01Y e o JSX com os alunos abaixo da média, somente após o cálculo das médias
  return (
    <div>
      
        <div>
          <Questao01Y alunos={alunos} setMedias={setMediasWrapper} setLoading={setLoading} />
          <h2>Alunos com média abaixo de 5:</h2>
          {renderAlunosAbaixoMedia()}
        </div>
      
    </div>
  );
}

export default Questao01X;