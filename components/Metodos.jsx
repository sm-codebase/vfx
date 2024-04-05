import React from "react";
import Image from "next/image";
import Produtoimg1 from "../public/assets/grafico-1.png";
import Produtoimg2 from "../public/assets/grafico-2.png";

const Metodos = () => {
  return (
    <div className="md:mt-[50px] ">
      <div>
        <h2 className="text-center">
          Métodos de Controle: Cronograma MS project 2013
        </h2>
      </div>

      <div className="grid md:grid-cols-2 justify-items-center my-10 gap-4 ">
        <div className="md:h-[500px] md:w-[500px] h-[300px] w-[300px]  relative group grid justify-center  items-center ">
          <Image
            src={Produtoimg1}
            alt="imagem do grafico"
            className=""
            objectFit="cover"
          />
        </div>

        <div className="md:h-[500px] md:w-[500px] h-[300px] w-[300px] relative group grid  items-center ">
          <Image src={Produtoimg2} alt="imagem do grafico" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default Metodos;
