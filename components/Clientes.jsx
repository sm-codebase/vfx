import React from "react";
import Image from "next/image";
import Logo1 from "../public/assets/clientes/penha.jpeg";
import Logo2 from "../public/assets/clientes/pirelli.png";
import Logo3 from "../public/assets/clientes/mahle.png";
import Logo4 from "../public/assets/clientes/ahlstrom.png";
import Logo5 from "../public/assets/clientes/clydeBergemann.jpeg";
import Logo6 from "../public/assets/clientes/contourglobal.jpeg";
import Logo7 from "../public/assets/clientes/delta.jpeg";
import Logo8 from "../public/assets/clientes/enaplic.png";
import Logo9 from "../public/assets/clientes/erb.jpeg";
import Logo10 from "../public/assets/clientes/fernandez.png";
import Logo11 from "../public/assets/clientes/glv.png";
import Logo12 from "../public/assets/clientes/ingredion.png";
import Logo13 from "../public/assets/clientes/klabin.jpg";
import Logo14 from "../public/assets/clientes/omya.png";
import Logo15 from "../public/assets/clientes/paulispell.jpeg";
import Logo16 from "../public/assets/clientes/saaeMogimirim.png";
import Logo17 from "../public/assets/clientes/sandvik.png";
import Logo18 from "../public/assets/clientes/suzano.jpg";
import Logo19 from "../public/assets/clientes/sylvamo.jpg";
import Logo20 from "../public/assets/clientes/valmett.jpg";
import Logo21 from "../public/assets/clientes/yaraaa.png";

const Clientes = () => {
  return (
    <div className="mx-[150px] ">
      <h2 className="grid justify-center text-center">Principais Clientes</h2>

      <div className="grid md:grid-cols-4 grid-cols-1 justify-items-center  my-10 gap-2">
        <div className="h-[300px] w-[300px] relative group grid justify-center items-center">
          <Image src={Logo1} alt="imagem do grafico" />
        </div>
        <div className="h-[300px]  w-[250px] relative group grid justify-center items-center">
          <Image src={Logo2} alt="imagem do grafico" objectFit="cover" />
        </div>
        <div className="h-[300px]  w-[300px] relative group grid justify-center items-center">
          <Image src={Logo3} alt="imagem do grafico" objectFit="cover" />
        </div>
        <div className="h-[300px]  w-[250px] relative group grid justify-center items-center">
          <Image src={Logo4} alt="imagem do grafico" objectFit="cover" />
        </div>
        <div className="h-[300px]  w-[300px] relative group grid justify-center items-center">
          <Image src={Logo5} alt="imagem do grafico" objectFit="cover" />
        </div>{" "}
        <div className="h-[300px]  w-[300px] relative group grid justify-center items-center">
          <Image src={Logo6} alt="imagem do grafico" objectFit="cover" />
        </div>{" "}
        <div className="h-[300px]  w-[300px] relative group grid justify-center items-center">
          <Image src={Logo7} alt="imagem do grafico" objectFit="cover" />
        </div>{" "}
        <div className="h-[300px]  w-[250px] relative group grid justify-center items-center">
          <Image src={Logo8} alt="imagem do grafico" objectFit="cover" />
        </div>{" "}
        <div className="h-[300px]  w-[300px] relative group grid justify-center items-center">
          <Image src={Logo9} alt="imagem do grafico" objectFit="cover" />
        </div>{" "}
        <div className="h-[300px]  w-[250px] relative group grid justify-center items-center">
          <Image src={Logo10} alt="imagem do grafico" objectFit="cover" />
        </div>{" "}
        <div className="h-[300px]  w-[250px] relative group grid justify-center items-center">
          <Image src={Logo11} alt="imagem do grafico" objectFit="cover" />
        </div>{" "}
        <div className="h-[300px]  w-[300px] relative group grid justify-center items-center">
          <Image src={Logo12} alt="imagem do grafico" objectFit="cover" />
        </div>{" "}
        <div className="h-[300px]  w-[300px] relative group grid justify-center items-center">
          <Image src={Logo13} alt="imagem do grafico" objectFit="cover" />
        </div>{" "}
        <div className="h-[300px]  w-[300px] relative group grid justify-center items-center">
          <Image src={Logo14} alt="imagem do grafico" objectFit="cover" />
        </div>{" "}
        <div className="h-[300px]  w-[300px] relative group grid justify-center items-center">
          <Image src={Logo15} alt="imagem do grafico" objectFit="cover" />
        </div>{" "}
        <div className="h-[300px]  w-[300px] relative group grid justify-center items-center">
          <Image src={Logo16} alt="imagem do grafico" objectFit="cover" />
        </div>{" "}
        <div className="h-[300px]  w-[250px] relative group grid justify-center items-center">
          <Image src={Logo17} alt="imagem do grafico" objectFit="cover" />
        </div>{" "}
        <div className="h-[300px]  w-[250px] relative group grid justify-center items-center">
          <Image src={Logo18} alt="imagem do grafico" objectFit="cover" />
        </div>{" "}
        <div className="h-[300px]  w-[250px] relative group grid justify-center items-center">
          <Image src={Logo19} alt="imagem do grafico" objectFit="cover" />
        </div>{" "}
        <div className="h-[300px]  w-[300px] relative group grid justify-center items-center">
        <Image src={Logo20} alt="imagem do grafico" objectFit="cover" />
      </div>{" "}
      </div>

      <div className="grid justify-center ">
        <div className="md:h-[300px]  md:w-[300px] h-[200px]  w-[200px] relative group grid justify-center items-center">
          <Image src={Logo21} alt="imagem do grafico" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default Clientes;
