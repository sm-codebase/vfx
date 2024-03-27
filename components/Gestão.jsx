import React from "react";
import Image from "next/image";
import produtoimg1 from "../public/assets/sl-img-3.png";

const Gestão = () => {
  return (
    <div className="md:grid justify-center md:mt-[100px] my-10 bg-gray-200 ">
      <div className="">
        <div className="p-5">
          <h2 className="">Sistema de gestão integrado</h2>
          <p className="my-3">
            A VFX possui um sistema de gestão integrado, a caminho de se
            certificar na norma ISO 9001 e tem como base os pilares, Pessoas,
            Processos e Tecnologia para:
          </p>
        </div>

        <div className="md:grid grid-cols-2 md:my-10 justify-items-center">
          <div className="md:leading-8 p-5">
            <p>Controle de Qualidade;</p>
            <p>Segurança, Saúde e Meio Ambiente;</p>
            <p>Gestão de Pessoas;</p>
            <p>Planejamento e Controle;</p>
            <p>Project Management Office (PMO)</p>
          </div>

          <div className="w-[500px] h-[300px] relative group">
            <div className="h-full w-full">
              <Image
                alt="imagem"
                src={produtoimg1}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gestão;
