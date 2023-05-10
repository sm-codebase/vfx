import React from 'react';
import { FaTeeth, FaGlobe, FaCog, FaSquare, FaSquareFull, FaSquarespace, FaStethoscope, FaHeartbeat, FaStar, FaMedal, FaPager, FaBook } from 'react-icons/fa';
import Image from "next/image";
import ServiceImg from '../public/assets/servicos-img.png'

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
            <div>
              <div>
                <h3 className='text-red-400 underline p-8'>SERVIÇOS</h3>
              </div>
              <div className='lg:flex display-flex'>
                <div>
                  <h2 className=' text-white py-6'>Área do Cliente</h2>
                  <p className='pt-2'>Nr 01 Ordem de Serviço, Nr 05 Cipa (Indicado pelo Empregador) Nr 06 Epis, Nr 33 (Espaço Confinado ),Nr-10 item 10.2.1 / Gerenciamento de Risco, Nr 35 (Trabalho em Altura).</p>
                </div>
                <div>
                  <Image
                    src={ServiceImg}
                    alt="imagem do produto"
                    width={400}
                    height={400}
                    className="mx-auto block lg:w-full lg:h-auto" 
                    
                  />
                </div>
              </div>
              <div className='lg:flex lg:flex-row-reverse p-5 lg:space-y-8'>
                <div>
                  <h2 className=' text-white py-6'>Calandras</h2>
                  <p className='pt-2'>Máquinas que tem o papel de curvar ou desempenar chapas de aço e metal.</p>
                </div>
                <div>
                  <Image
                    src={ServiceImg}
                    alt="imagem do produto"
                    width={400}
                    height={400}
                    className="mx-auto block lg:w-full lg:h-auto" 
                    
                  />
                </div>
              </div>
              <div className='lg:flex display-flex'>
                <div>
                  <h2 className=' text-white py-6'>Combate a Incendio</h2>
                  <p className='pt-2'>Projeto e montagem de tubulações, hidrantes, detectores de fumaça, luz de emergência, sprinkler, para-raios de combate a incêndio para lojas e industrias.</p>
                </div>
                <div>
                  <Image
                    src={ServiceImg}
                    alt="imagem do produto"
                    width={400}
                    height={400}
                    className="mx-auto block lg:w-full lg:h-auto" 
                  />
                </div>
              </div>
              <div className='lg:flex lg:flex-row-reverse'>
                <div>
                  <h2 className=' text-white py-6'>Eletricista de Manutenção e Montagem</h2>
                  <p className='pt-2'>A VFX Montagens Industriais possui profissionais na área de elétrica, manutenção e montagens com certificados e treinamentos NR10 - EPI's e ferramentas adequadas para função.</p>
                </div>
                <div>
                  <Image
                    src={ServiceImg}
                    alt="imagem do produto"
                    width={400}
                    height={400}
                    className="mx-auto block lg:w-full lg:h-auto" 
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default services;
