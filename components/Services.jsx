import React from "react";
import Image from "next/image";
import { IoCheckmarkOutline } from "react-icons/io5";

import ProdutoImg from "../public/assets/sl-img-2.png";

const services = () => {
  return (
    <div id="services" className=" text-black p-5 mt-10 md:p-[50px]">
      <div className="md:grid justify-center text-gray-700 p-5">
        <div className="">
          <div className="text-2xl font-bold">
            <h3 className="text-[#c20001] underline uppercase text-justify ">
              Atuação
            </h3>
          </div>
          <div className="md:grid grid-cols-2 gap-4 ">
            <div>
            <div className="flex items-center ">
            <IoCheckmarkOutline size={20}/>
              <h3 className="text-xl my-3 mx-2">Montagem Eletromecânica</h3>
              </div>
              <ul className="list-disc">
              <li>Sistema de Tubulações de Materiais Diversos</li>
              <li>Infraestrutura Elétrica Industrial</li>
              <li>Equipamentos Industriais</li>
              <li> Estruturas Metálicas</li>
              <li>Tanques de Armazenamento</li>
              </ul>
            </div>

            <div>
            <div className="flex items-center ">
            <IoCheckmarkOutline size={20}/>
            <h3 className="text-xl my-3 mx-2">Fabricação - VFX Metal mecânica</h3>
            </div>
            <ul className="list-disc">
            <li>
              Fabricação de Spools, Aço Inox, Aço Carbono, Aços Liga,
              Polipropileno e CPVC
            </li>
            <li>Estruturas Metálicas</li>
            <li>Serviços de Caldeiraria em Geral</li>
            <li> Jateamento e Pintura</li>
            <li> Pinturas Eletrostáticas</li>
            </ul>
          </div>

            <div>
            <div className="flex items-center ">
            <IoCheckmarkOutline size={20}/>
              <h3 className="text-xl my-3 mx-2">Manutenção Industrial</h3>
              </div>
              <ul className="list-disc">
              <li>Parada Técnica</li>
              <li>Contratação na Modalidade Pacote</li>
              <li>Equipes Fixas Modalidade Contrato Administração</li>
              <li> Contrato Modalidade Guarda Chuva</li>
              <li> Consultoria</li>
              <li>Fiscalização de Obras e Paradas</li>
              </ul>
            </div>

           

            <div className="h-full w-full relative group ">
            <div className="my-3 w-full h-full ">
              <Image
                src={ProdutoImg}
                alt="imagem do produto"
                className=" rounded-lg "
                layout="fill"
                objectFit="cover"
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
