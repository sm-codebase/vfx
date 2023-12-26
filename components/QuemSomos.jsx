import React from "react";
import {
  FaTeeth,
  FaGlobe,
  FaCog,
  FaSquare,
  FaSquareFull,
  FaSquarespace,
  FaStethoscope,
  FaHeartbeat,
  FaStar,
  FaMedal,
  FaPager,
  FaBook,
} from "react-icons/fa";
import Image from "next/image";
import ProdutoImg from "../public/assets/industria-img-1.png";

const quemSomos = () => {
  return (
    <div id="quemsomos" className="container mx-auto text-black p-5">
      <div className="flex flex-col md:flex-row items-center  text-gray-700 ">
      <div className="md:w-1/2">
        <div className="text-2xl font-bold text-gray-700 mb-2 mt-8">
          <h3 className="text-red-400 underline text-justify">QUEM SOMOS</h3>
        </div>
        

        <div className="text-justify">
          <p>
            Nossa meta é atender às normas e projetos de cada equipamento ou
            estrutura para garantir assim que nossos clientes obtenham
            exatamente aquilo que desejam em termos de características, custo e
            atendimento. Nada é tão importante e essencial que não possa ser
            realizado com segurança preservando a vida, a integridade e o bem
            estar do ser humano.
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

export default quemSomos;
