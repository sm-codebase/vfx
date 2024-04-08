import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import NavLogo from "../public/logo-1.svg";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("white");
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
      } else {
        setColor("white");
      }
    };

    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      id="navbar"
      style={{ backgroundColor: `${color}` }}
      className="fixed h-[95px] left-0 top-0 w-full z-10 ease-in duration-300 shadow-lg"
    >
      <div className="max-w-[1240p] m-auto flex justify-between items-center p-3 text-white">
        <Link href="/">
          <Image
            src={NavLogo}
            alt="/"
            width="100"
            height="95"
            className="cursor-pointer"
            style={{
              maxWidth: "70%",
              height: "auto",
            }}
          />
        </Link>

        <p className="text-black hidden sm:block">
         Pode colocar alguma frase de efeito ou slogan da empresa
        </p>
        {/* Mobile button */}
        <div onClick={handleNav} className="block z-10">
          <Hamburger color="gray" toggled={nav} toggle={setNav} />
        </div>
        {/* Mobile menu */}
        <div
          className={
            nav
              ? "absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#4e4d4b] text-center ease-in duration-300"
              : "absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#4e4d4b] text-center ease-in duration-300"
          }
        >
          <div className="flex flex-col sm:flex-row justify-around justify-items-center w-full p-4 sm:p-20 text-white text-start">
            <div className="prod" style={{ margin: "0 20px" }}>
              <ul>
                <h1
                  className="p-2 text-5xl"
                  style={{
                    borderBottom: "2px solid white",
                    paddingBottom: "10px",
                  }}
                >
                  VFX
                </h1>
                <li
                  onClick={handleNav}
                  className="p-2 text-2xl hover:text-[#c20001]"
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  onClick={handleNav}
                  className="p-2 text-2xl hover:text-gray-500"
                >
                  <Link href="/#empresa">Empresa</Link>
                </li>
                <li
                  onClick={handleNav}
                  className="p-2 text-2xl hover:text-gray-500"
                >
                  <Link href="/galeria">Galeria de imagens</Link>
                </li>
                <li
                  onClick={handleNav}
                  className="p-2 text-2xl hover:text-gray-500"
                >
                  <Link href="/trabalheConosco">Trabalhe conosco</Link>
                </li>
                {/* Outros itens da lista */}
              </ul>
            </div>
            <div className="prod " style={{ margin: "0 20px" }}>
              <ul>
                <h1
                  className="p-2  text-5xl"
                  style={{
                    borderBottom: "2px solid white",
                    paddingBottom: "10px",
                  }}
                >
                  Serviços
                </h1>
                <li
                  onClick={handleNav}
                  className="p-2 text-2xl hover:text-gray-500"
                >
                  <Link href="/engradados">serviço 1</Link>
                </li>
                <li
                  onClick={handleNav}
                  className="p-2 text-2xl hover:text-gray-500"
                >
                  <Link href="/pallets">serviço 2</Link>
                </li>
                {/* Outros itens da lista */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
