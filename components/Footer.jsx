import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import Image from "next/image";
import NavLogo from "../public/logo.png";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#D9D9D9] to-[#7A7375] h-full w-full flex md:flex-row flex-col justify-around items-center  p-10">
        <div className="p-5 ">
          <ul>
            <a>
              <Image
                src={NavLogo}
                alt="/"
                width="170"
                height="70"
                className="cursor-pointer"
              />
            </a>
            <div className="flex justify-center gap-6 pb-4 -mt-12 ">
              <a
                href="https://web.facebook.com/vfxmontagensindustritais"
                target="_blank"
                rel="noreferrer"
              >
                <div className="text-2xl text-white cursor-pointer hover:text-gray-300 ">
                  <FaFacebook />
                </div>
              </a>
              <a
                href="https://www.instagram.com/vfxmontagensindustriais/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="text-2xl text-white cursor-pointer hover:text-gray-300">
                  <FaInstagram />
                </div>
              </a>
              <a href="https://wa.link/" target="_blank" rel="noreferrer">
                <div className="text-2xl text-white cursor-pointer hover:text-gray-300">
                  <FaWhatsapp />
                </div>
              </a>
            </div>
          </ul>
        </div>

        <div className="">
          <ul>
            <p className="text-white font-bold text-2xl pb-4 mt-10  ">
              Sobre nós
            </p>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              <Link href="/#quemsomos">Quem Somos </Link>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              <Link href="/#services">Serviços</Link>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              <Link href="/contact">Contato </Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul></ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-5 bg-gray-50">
        <h3 className=" text-gray-800 font-semibold">
          © 2023 VFX Montagens Industriais | Todos os direitos reservados |
          Desenvolvido ❤ pela{" "}
          <span className="hover:text-blue-400 font-semibold cursor-pointer">
            Sousas Midia{" "}
          </span>
        </h3>
      </div>
    </div>
  );
}

export default Footer;
