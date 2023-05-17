import React, { useState } from "react";

function Questao02() {
  const [flag, setFlag] = useState(false); // variável para alternar entre frente e costas
  const [imgSrc, setImgSrc] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  ); // variável para armazenar o caminho da imagem

  const handleClick = () => {
    setFlag(!flag); // alterna o valor da flag ao clicar no botão
    if (flag) {
      setImgSrc(
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      ); // muda imagem para a frente
    } else {
      setImgSrc(
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
      ); // muda imagem para a costas
    }
  };

  return (
    <div>
      <img src={imgSrc} alt="pokemon" />
      <button onClick={handleClick}>Mudar Imagem</button>
    </div>
  );
}

export default Questao02;