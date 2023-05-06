import React from "react";
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import NavLogo from '../public/logo.png'



function Footer() {
	return <>
        <div className="bg-gradient-to-b from-[#D9D9D9] to-[#7A7375] h-1/2 w-full flex md:flex-row flex-col justify-around items-center pt-5">
            <div className="p-5 ">
                <ul>
                    <a>
                        <Image
                            src={NavLogo}
                            alt='/'
                            width='170'
                            height='auto'
                            className='cursor-pointer'
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </a>
                    <div className='flex items-center justify-between space-x-4 my-5 w-full sm:w-[80%]'>
                        <a
                        href='https://web.facebook.com/vfxmontagensindustritais'
                        target='_blank'
                        rel='noreferrer'
                        >
                        <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300  bg-white text-[#7A7375]'>
                            <FaFacebook />
                        </div>
                        </a>
                        <a
                        href='https://www.instagram.com/vfxmontagensindustriais/'
                        target='_blank'
                        rel='noreferrer'
                        >
                        <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300  bg-white text-[#7A7375]'>
                            <FaInstagram />
                        </div>
                        </a>
                        <a  
                        href='https://wa.link/'
                        target='_blank'
                        rel='noreferrer'
                        >
                        <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300  bg-white text-[#7A7375]'
                        >
                            <FaWhatsapp />
                        </div>
                        </a>
                    </div>
                </ul>
            </div>
            <div className="text-left">
                <div className="p-5">
                    <ul>
                        <li className="text-white text-md pb-2 font-semibold hover:text-red-400 cursor-pointer">
                            <p className="text-white font-bold">Endereço:</p>
                            <p className="text-sm font-light">Estamos na 📍 Rua Leopoldo Campos Pedrini, 39 <br /> Parque Industrial Jão Batista Caruso - Mogi Guaçu SP</p>
                        </li>
                        <li className="text-white text-md pb-2 font-semibold hover:text-red-400 cursor-pointer">
                            <p>Contato:</p>
                            <p href='https://wa.link/lmeph0' className="text-sm font-light pt-2"><FaWhatsapp /></p>
                            <p className="font-light pt-2"><FaPhone />19 3841-7556</p>
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        
                    </ul>
                </div>
            </div>
            
        </div>
        <div className="flex flex-col justify-center items-center text-center p-5 bg-gray-50">
            <h3 className=" text-gray-800 font-semibold">
                © 2023 VFX Montagens Industriais | Todos os direitos reservados | Desenvolvido ❤ pela{" "}
                <span className="hover:text-blue-400 font-semibold cursor-pointer">
                    Sousas Midia{" "}
                </span>
            </h3>
        </div>
    </>;
}

export default Footer;