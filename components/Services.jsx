import React from 'react';
import { FaTeeth, FaGlobe, FaCog, FaSquare, FaSquareFull, FaSquarespace, FaStethoscope, FaHeartbeat, FaStar, FaMedal, FaPager, FaBook } from 'react-icons/fa';
import Image from "next/image";
import ProdutoImg from '../public/assets/pr-img-1.png'

const services = () => {
  return (
    <div id='quemsomos' className='max-w-[1240px] mx-auto'>

      <section>
        <div className='flex flex-col justify-between text-left text-base sm:text-xl font-extrabold text-gray-700 p-6'>
          <div>
            <h3 className='text-red-400 underline'>SERVIÇOS</h3>
            <p className='pt-6 text-[#2A94D7]'>Nossos Serviços</p>
          </div>

          <div className='pt-6'>
            <p>A VFX Montagens Industriais oferece diversos serviços para atender às necessidades dos seus clientes. Na área de segurança do trabalho,
              a empresa oferece serviços como Ordem de Serviço, Cipa (Indicado pelo Empregador), Epis, Espaço Confinado, Gerenciamento de Risco e Trabalho
              em Altura.</p>
            <p>Além disso, a VFX possui calandras, máquinas que têm a função de curvar ou desempenar chapas de aço e metal. Na área de combate a incêndio,
              a empresa realiza projetos e montagens de tubulações, hidrantes, detectores de fumaça, luz de emergência, sprinkler e para-raios de combate a
              incêndio para lojas e indústrias.</p>
            <p>E, por fim, a VFX Montagens Industriais conta com profissionais capacitados na área de elétrica, manutenção e montagens, com certificados e
              treinamentos NR10, além de EPIs e ferramentas adequadas para a função. Tudo para garantir a qualidade e segurança nos serviços prestados.</p>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-48 bg-gradient-to-r from-[#2A94D7] to-[#3678a1] rounded-xl p-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
            <h3 className="text-white text-4xl font-bold uppercase underline">Serviços</h3>
              <p className="text-white font-thin leading-relaxed m-4 text-blueGray-500">
                Ao longo desses 28 anos de história construimos um parceirias sólidas e um produto de qualidade que já faz parte do dia-a-dia de nossos clientes
              </p>
              <div className='justify-center w-full h-full'>


              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default services;
