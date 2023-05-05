import Image from "next/image";
import React from 'react'
import Card from "./Card";
import { FaInstagram, FaShoePrints } from 'react-icons/fa'

const MainSlider = ({ sliderImg }) => {
    return (
        <div className=''>

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
                <div className='grid grid-rows-1 absolute top-0 left-0 right-0 bottom-0 bg-black/50 group justify-center'>
                    <h3 className="mt-2">Somos a VFX</h3>
                    <div className='grid grid-rows-1 absolute top-0 left-0 right-0 bottom-0 bg-black/50 group justify-center items-center'>

                        <h1 className="py-20 text-white-300 group-hover:block flex items-center justify-center">
                            VFX Montagens Industriais
                        </h1>
                    </div>

                    <h3 className="mb-20">Transformando suas ideias em realidade: conheça os serviços de montagens e caldeiraria industrial da VFX!</h3>
                </div>
            </div>

        </div>
    );
}

export default MainSlider