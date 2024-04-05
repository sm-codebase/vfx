import React from "react";
import { FaFolderClosed, FaCartFlatbed, FaTools } from "react-icons/fa6";
import { MdVerified, MdInsertChart } from "react-icons/md";
import { RiMoneyDollarCircleLine, RiToolsFill } from "react-icons/ri";
import { GiCrane } from "react-icons/gi";
import { LuCalendarClock } from "react-icons/lu";

const Projects = () => {
  return (
    <div className="p-5 md:my-[50px] md:mx-auto md:container">
      <div className="grid justify-items-center">
        <div className="md:w-1/2">
          <h2>Gestão de Projetos</h2>

          <p className="py-3">
            A VFX adota um planejamento e controle de obra eficientes, com o
            objetivo de garantir a plena execução das atividades e cumprimento
            dos prazos, através de sistemas próprios de gerenciamento de obras e
            ferramentas que auxiliam nas tomadas de decisões em todos os
            projetos.
          </p>
          <p>
            {" "}
            Disponibiliza informações diariamente, como o acompanhamento do
            cronograma, análise da eficiência e eficácia do andamento das
            atividades, gestão de serviços, efetivos e análise preliminar de
            riscos.
          </p>
        </div>
      </div>

      <div className="md:flex grid grid-cols-2 justify-center gap-4 mt-10">
        <div className="grid justify-items-center">
          <FaFolderClosed size={60} />
          <p>Administrativo</p>
        </div>
        <div className="grid justify-items-center">
          <FaCartFlatbed size={60} />
          <p>Almoxarifado</p>
        </div>
        <div className="grid justify-items-center">
          <MdVerified size={60} />
          <p>Aprovação</p>
        </div>
        <div className="grid justify-items-center">
          <MdInsertChart size={60} />
          <p>Controle</p>
        </div>
        <div className="grid justify-items-center">
          <RiMoneyDollarCircleLine size={60} />
          <p>Custo</p>
        </div>
        <div className="grid justify-items-center">
          <GiCrane size={60} />
          <p>Equipamento</p>
        </div>
        <div className="grid justify-items-center">
          <RiToolsFill size={60} />
          <p>Materiais</p>
        </div>
        <div className="grid justify-items-center">
          <LuCalendarClock size={60} />
          <p>Programação</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
