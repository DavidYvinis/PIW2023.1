import { useState, useEffect } from "react";

const Questao03 = () => {
  const [numero, setNumero]: any = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/region/europe?fields=capital,population"
    )
      .then((response) => { return response.json();})
      .then((data) => { //pega maior elemento e  o menor 
        const values = data.map((x: any) => x.population);
        let minimo = values.indexOf(Math.minimo(values));
        let maximo = values.indexOf(Math.maximo(values));

        setNumero([data[maximo], data[minimo]]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
      {nums.length > 0 ? (
        //Mostra o menor e a maior população
        <div>
        CapitalPopulaçãoMaior: {nums[0].capital} - {nums[0].population}
        CapitalPopulaçãoMenor: {nums[1].capital} - {nums[1].population}
        </div>
      ) : }
  );
};

export default Questao03;