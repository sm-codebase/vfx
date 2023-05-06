import Image from "next/image";
import React from 'react';
import Card from "./Card";
import { FaInstagram, FaShoePrints } from 'react-icons/fa';

const howCanWeHelpSlider = ({ sliderImg }) => {
  return (
    <div>
      <div>
        <Image
          src={sliderImg}
          alt='/'
          className='w-full h-full'
          sizes="100vw"
          style={{
            width: '100vw',
            height: "80vh"
          }} />
        {/* Overlay */}
        <div className='grid grid-rows-3 absolute top-0 left-0 right-0 bottom-0 bg-black/50 group justify-center items-center'>
          <div className="row-span-1">
            <h3 className="mt-5 text-center text-white">O QUE PODEMOS FAZER PELA SUA EMPRESA?</h3>
          </div>
          <div className="mb-2 row-span-1">
            <h1 className="text-center text-white text-4xl font-bold tracking-wider">
              VFX Montagens Industriais
            </h1>
          </div>
          <div className="row-span-1">
            <p className="mb-20 text-center text-white max-w-xl p-2 text-sm">
              Fundada em 2008 em Mogi Guaçu, a VFX Montagens Industriais vem atuando na área de serviços e projetos, com grande êxito.
              Coordena seus projetos em conjunto com o cliente, gerenciando e respeitando cronogramas, prazos e todas as definições exigidas pelos clientes.
              Conta com uma equipe própria multidisciplinar capacitada a desenvolver os projetos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default howCanWeHelpSlider;
