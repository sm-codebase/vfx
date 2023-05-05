import Image from "next/image";
import React from 'react'
import Card from "./Card";
import { FaInstagram, FaShoePrints } from 'react-icons/fa'

const howCanWeHelp= ({ sliderImg }) => {
  return (
    <div className='relative h-screen'>

      <div className='absolute inset-0'>
        <Image
          src={sliderImg}
          alt='/'
          className='w-full h-full'
          sizes="100vw"
          style={{
            width: '100vw',
            height: "80vh"
          }} />
      </div>

      {/* Overlay */}
      <div className='absolute inset-0 flex flex-col justify-center items-center bg-black/50'>
        <h3 className="mt-2 text-center text-white">O QUE PODEMOS FAZER PELA SUA EMPRESA?</h3>
        <h1 className="py-20 text-center text-white text-4xl font-bold tracking-wider">
          VFX Montagens Industriais
        </h1>
        <p className="mb-20 text-center text-white text-lg max-w-xl p-2">
          Fundada em 2008 em Mogi Guaçu, a VFX Montagens Industriais vem atuando na área de serviços e projetos, com grande êxito.
          Coordena seus projetos em conjunto com o cliente, gerenciando e respeitando cronogramas, prazos e todas as definições exigidas pelos clientes.
          Conta com uma equipe própria multidisciplinar capacitada a desenvolver os projetos.
        </p>
      </div>

    </div>
  );
}

export default howCanWeHelp;
