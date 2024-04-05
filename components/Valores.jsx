import React from "react";
import { FaGears } from "react-icons/fa6";
import { FaTools, FaChartLine  } from "react-icons/fa";

const Valores = () => {
  return (
    <div
      id="valores"
      className="md:mx-auto md:container bg-gray-200 text-white  w-full h-full md:h-[700px]"
    >
      <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-5 p-10">
        <div
          style={{ borderRadius: "50px", transition: "all 0.4s" }}
          className="bg-white w-[300px] md:w-[400px] h-[375px] hover:scale-110 hover:bg-gray-300"
        >
          <div className="grid justify-center mt-10">
            <FaGears size={70} color="#c20001" />
          </div>
          <p className="grid text-center text-3xl font-bold text-gray-700 p-12">
            Experiência em Caldeiraria Industrial
          </p>
        </div>

        <div
          style={{ borderRadius: "50px", transition: "all 0.4s" }}
          className="bg-white w-[300px] md:w-[400px] h-[375px] hover:scale-110 hover:bg-gray-300"
        >
          <div className="grid justify-center mt-10">
            <FaTools size={80} color="#c20001" />
          </div>
          <p className="grid text-center text-3xl font-bold text-gray-700 p-12">
            Manutenção Industrial de Excelência
          </p>
        </div>

        <div
          style={{ borderRadius: "50px", transition: "all 0.4s" }}
          className="bg-white w-[300px] md:w-[400px] h-[375px] hover:scale-110 hover:bg-gray-300"
        >
          <div className="grid justify-center mt-10">
          <FaChartLine  size={70} color="#c20001"/>
          </div>
          <p className="grid text-center text-3xl font-bold text-gray-700 p-12">
            Soluções Integradas para Indústria
          </p>
        </div>
      </div>
    </div>
  );
};

export default Valores;
