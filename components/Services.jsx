import React from "react";
import Image from "next/image";

import ProdutoImg from "../public/assets/industria-img-2.png";

const services = () => {
  return (
    <div id="services" className="container mx-auto text-black p-5">
      <div className="flex flex-col md:flex-row items-center  text-gray-700 ">
        <div className="md:w-1/2">
          <div className="text-2xl font-bold text-gray-700 mb-2 mt-8">
            <h3 className="text-red-400 underline text-justify ">SERVIÇOS</h3>
          </div>

          <div className="text-justify">
            <p>
              A VFX Montagens Industriais oferece diversos serviços para atender
              às necessidades dos seus clientes. Na área de segurança do
              trabalho, a empresa oferece serviços como Ordem de Serviço, Cipa
              (Indicado pelo Empregador), Epis, Espaço Confinado, Gerenciamento
              de Risco e Trabalho em Altura.
            </p>
            <p>
              Além disso, a VFX possui calandras, máquinas que têm a função de
              curvar ou desempenar chapas de aço e metal. Na área de combate a
              incêndio, a empresa realiza projetos e montagens de tubulações,
              hidrantes, detectores de fumaça, luz de emergência, sprinkler e
              para-raios de combate a incêndio para lojas e indústrias.
            </p>
            <p>
              E, por fim, a VFX Montagens Industriais conta com profissionais
              capacitados na área de elétrica, manutenção e montagens, com
              certificados e treinamentos NR10, além de EPIs e ferramentas
              adequadas para a função. Tudo para garantir a qualidade e
              segurança nos serviços prestados.
            </p>
          </div>
        </div>
      

      <div className="py-2 px-10 md-w-1/2 md:pr-5 mt-10">
        <Image
          src={ProdutoImg}
          alt="imagem do produto"
          width={400}
          height={400}
          className="mx-auto block lg:w-full lg:h-auto rounded-lg"
        />
      </div>
      </div>
    </div>
  );
};

export default services;
