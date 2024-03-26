import React from "react";
import Image from "next/image";
import Produtoimg1 from "../public/assets/sl-img-1.png";

const Metodos = () => {
  return (
    <div className="md:mt-[50px]">
      <div>
        <h2 className="text-center">Metodos de Controle: Cromograma MS project 2013</h2>
      </div>

      <div className="grid grid-rows-3 grid-flow-col my-10 gap-4 ">
        <div className="h-[300px] w-full relative group col-span-2 ">
          <Image
            src={Produtoimg1}
            alt="imagem do grafico"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="h-[300px] w-full relative group col-span-1">
          <Image
            src={Produtoimg1}
            alt="imagem do grafico"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="h-[300px] w-full relative group col-span-3">
          <Image
            src={Produtoimg1}
            alt="imagem do grafico"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="h-[300px] w-full relative group">
          <Image
            src={Produtoimg1}
            alt="imagem do grafico"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="h-[300px] w-full relative group">
          <Image
            src={Produtoimg1}
            alt="imagem do grafico"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="h-[300px] w-full relative group">
          <Image
            src={Produtoimg1}
            alt="imagem do grafico"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Metodos;
