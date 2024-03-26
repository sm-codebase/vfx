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

const Empresa = () => {
  return (
    <div
      id="empresa"
      className="w-full bg-gray-200   text-black p-5  mt-10 md:my-[50px]"
    >
      <div className="grid justify-items-center text-gray-700 ">
        <div className="md:w-1/2">
          <div className="text-2xl font-bold text-gray-700 ">
            <h3 className="text-[#c20001] underline uppercase">a empresa</h3>
          </div>

          <div className="text-justify mt-5 leading-6  ">
            <p>
              Fundada em 2008 na cidade de Mogi Guaçu, a VFX nasceu com a missão
              de oferecer as mais diversas soluções em projetos de engenharia
              construtiva, com uma trajetória de crescimento constante,
              transformando-se de uma pequena empresa em uma referência em
              atendimento juntamente com nossos parceiros de negócios e
              contribuindo com o desenvolvimento econômico da sociedade.{" "}
            </p>
            <p className="mt-3">
              {" "}
              A VFX Montagens Industriais presta serviços de montagem e
              manutenção eletromecânica aos mais variados setores industriais.{" "}
            </p>
            <p className="mt-3">
              Ao longo dos 16 anos de atuação no mercado a VFX se tornou-se uma
              referencia nacional em obras industriais executando importantes
              projetos de implantação, ampliação, modernização e manutenção nas
              industrias em todo território nacional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empresa;
