import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { useRouter } from 'next/router';
import NavLogo from "../public/logo.png";
import { Button } from "react-bootstrap";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("black");
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("");
  const [linkColor, setLinkColor] = useState("#2a94d7");

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
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={"fixed h-[95px] top-0 w-full z-10 p-4"}
    >
      <div className="flex items-center justify-between w-full h-full">
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
          <li className="p-4 hover:text-blue-500">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:text-blue-500">
            <Link href="/#quemsomos">Quem somos</Link>
          </li>
          <li className="p-4 hover:text-blue-500">
            <Link href="/#services">Serviços</Link>
          </li>
          <li className="p-4 hover:text-blue-500">
            <Link href="/#valores">Nossos Valores</Link>
          </li>
          <li className="p-4 hover:text-blue-500">
            <Link href="/#localizacao">Localização</Link>
          </li>
          <li className="p-4 hover:text-blue-500">
            <Link href="/contact">Contato</Link>
          </li>
        </ul>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b text-white"></li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="sm:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {/*Mobile button */}
      <div onClick={handleNav} className="block sm:hidden z-10"></div>
      {/*Mobile menu */}
      <div
        className={
          nav
            ? "sm:hidden absolute top-0 left-0 right-0 botton-0 flex justify-center items-center w-full h-screen bg-gradient-to-r from-[#2A94D7] to-[#3678a1] text-center ease-in duration-300"
            : "sm:hidden absolute top-0 left-[-100%] right-0 botton-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
        }
      >
        <ul>
          <li onClick={handleNav} className="p-4 text-4xl hover:text-white">
            <Link href="/">Home</Link>
          </li>
          <li onClick={handleNav} className="p-4 text-4xl hover:text-white">
            <Link href="/#quemsomos">Quem somos</Link>
          </li>
          <li onClick={handleNav} className="p-4 text-4xl hover:text-white">
            <Link href="/contact">Contato</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
