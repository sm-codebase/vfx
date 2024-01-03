import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
// import { useRouter } from 'next/router';
import NavLogo from "../public/assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("white");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("white");
        setTextColor("#000000");
      }
    };
    window.addEventListener("", changeColor);
  }, []);

  return (
    <div
      className={
        " h-[95px]  top-0  w-full z-10 p-4 bg-[#487d49] ease-in duration-300"
      }
    >
      <div className="flex items-center justify-between w-full h-full ">
        <Link legacyBehavior href="/">
          <a>
            <Image
              src={NavLogo}
              alt="/"
              width="170"
              height="70"
              className="cursor-pointer"
              style={{
                maxWidth: "70%",
                height: "auto",
              }}
            />
          </a>
        </Link>

        <div className="ms-auto "></div>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 hover:text-white">
            <Link href="/"> </Link>
          </li>
          <li className="p-4 hover:text-gray-900">
            <Link href="/#quemsomos">Quem somos</Link>
          </li>
          <li className="p-4 hover:text-gray-900">
            <Link href="/#services">Serviços</Link>
          </li>
          <li className="p-4 hover:text-gray-900">
            <Link href="/#valores">Nossos Valores</Link>
          </li>
          <li className="p-4 hover:text-gray-900">
            <Link href="/#localizacao">Localização</Link>
          </li>
          <li className="p-4 hover:text-gray-900">
            <Link href="/contact">Contato</Link>
          </li>
        </ul>

        {/*Mobile button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/*Mobile menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 botton-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 botton-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
          }
        >
          <ul>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-900">
              <Link href="/">Home</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-900">
              <Link href="/#quemsomos">Quem somos</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-900">
              <Link href="/#services">Serviços</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-900">
              <Link href="/#valores">Nossos valores</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-900">
              <Link href="/#localizacao">Localização</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-900">
              <Link href="/contact">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
