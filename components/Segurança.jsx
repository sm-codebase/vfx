import React from "react";
import Image from "next/image";
import Produtoimg1 from "../public/assets/logo-qsms.png";

const Segurança = () => {
  return (
    <div className="mx-auto p-10 bg-gray-300 w-full m-10">
      <div>
        <h2 className="my-5">Segurança, Saúde e Meio Ambiente</h2>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="leading-8">
          <p>
            A <b>VFX</b> Montagens Industriais, atua orientado pelo sistema de
            gestão integrado e pela Política de QSMS - Qualidade, Segurança,
            Meio Ambiente e Saúde - na qual estabelece relações éticas,
            duradouras e baseadas em diversos procedimentos e normas técnicas em
            sua cadeia de serviços, pois entende que, dessa forma, além de
            impactar diretamente e de forma positiva na eficiência de suas
            operações, também ajuda a proteger o meio ambiente e estimula o
            cuidado com seus colaboradores, parceiros, clientes e com o
            desenvolvimento da comunidade em torno de suas unidades.
          </p>
        </div>

        <div className="h-[200px] w-[200px] relative group ">
          <div className="">
            <Image
              src={Produtoimg1}
              alt="imagem"
              layout="fill"
              objectFit="cover"
              className="rounded-tl-xl"
            />
          </div>
        </div>
      </div>

      <div>
        <p className="leading-8 my-3">
          Comprometida com a qualidade na prestação dos seus serviços, as
          operações contam com equipes técnicas especializadas a atuarem de
          forma sustentável e transparente na comunicação às partes interessadas
          garantindo um ambiente seguro e saudável para todos. Para isto,
          assumimos como compromisso
        </p>
      </div>
    </div>
  );
};

export default Segurança;
