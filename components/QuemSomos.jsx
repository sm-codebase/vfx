import React from 'react';
import { FaTeeth, FaGlobe , FaCog, FaSquare, FaSquareFull, FaSquarespace, FaStethoscope, FaHeartbeat, FaStar, FaMedal, FaPager, FaBook } from 'react-icons/fa';
import Image from "next/image";
import ProdutoImg from '../public/assets/pr-img-1.png'


const quemSomos = () => {
  return (
    <div id='quemsomos' className='max-w-[1240px] mx-auto'>
      <div className='flex flex-col justify-between text-left text-base sm:text-xl font-extrabold text-gray-700 p-6'>
      <div>
      <h3 className='text-red-400'>QUEM SOMOS</h3>
        <p className='pt-6'>Garantir que nossos clientes obtenham exatamente aquilo que desejam em termos de características, custo e atendimento.</p>
      </div>
      
      <div className='pt-6'>
        <p>Nossa meta é atender às normas e projetos de cada equipamento ou estrutura para garantir assim que nossos clientes obtenham 
          exatamente aquilo que desejam em termos de características, custo e atendimento. Nada é tão importante e essencial que não possa ser realizado 
          com segurança preservando a vida, a integridade e o bem estar do ser humano.</p>
      </div>
      </div>

            
          </div>
         
  );
};

export default quemSomos;
