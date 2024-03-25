import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import primg1 from "../public/assets/carousel/pr-img-1.png";
import primg2 from "../public/assets/carousel/pr-img-2.png";
import primg3 from "../public/assets/carousel/pr-img-3.png";
import primg4 from "../public/assets/carousel/pr-img-4.png";
import Logo from "../public/logo-3.svg";

const slides = [
  {
    id: 1,
    src: primg1,
    alt: "Image 1",
    summary: "Montagens Industriais: Excelência em Construção",
    description:
      "Somos especialistas em montagens industriais que superam expectativas. Nossa dedicação à excelência e precisão em cada etapa do processo resulta em estruturas robustas e funcionais. Confie em nossa experiência para elevar sua indústria ao próximo nível. ",
  },
  {
    id: 2,
    src: primg2,
    alt: "Image 2",
    summary: "Construindo o Amanhã: Montagens Industriais de Qualidade",
    description:
      "Construímos o futuro com cada montagem industrial. Nosso comprometimento com a qualidade se reflete em cada detalhe, oferecendo soluções confiáveis e inovadoras para os desafios de sua indústria. Descubra como nossa experiência transforma visões em realidade..",
  },
  {
    id: 3,
    src: primg3,
    alt: "Image 3",
    summary: "Precisão em Movimento: Montagens Industriais de Alto Desempenho",
    description:
      "Cada projeto é uma prova de nossa dedicação à precisão e eficiência. Nossas montagens industriais são um exemplo de excelência, impulsionando o progresso e garantindo resultados excepcionais para nossos clientes. Conheça a diferença que fazemos em cada estrutura que construímos.",
  },
  {
    id: 4,
    src: primg4,
    alt: "Image 4",
    summary:
      "Montagens Industriais: Inovação que Impulsiona Negócios",
    description:
      "Inovação é a essência de nossas montagens industriais. Criamos soluções adaptadas às necessidades específicas de sua indústria, garantindo eficiência, durabilidade e um avanço significativo em seu empreendimento. Venha explorar o que podemos construir juntos.",
  },
];
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    let intervalId;

    if (!isHovered) {
      // Auto-scroll every 5 seconds (adjust the interval as needed)
      intervalId = setInterval(() => {
        nextSlide();
      }, 10000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isHovered, currentIndex]);

  return (
    <div
      className="max-w-[1200px] h-[560px] w-full m-auto mt-[95px]  relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full  bg-center bg-cover duration-500 relative transition-opacity bg-gradient-to-r from-[black] to-gray-800">
        <Image
          className="rounded-2xl opacity-30 transition-opacity duration-500 group-hover:opacity-30"
          src={slides[currentIndex].src}
          alt={`Slide ${slides[currentIndex].id}`}
          layout="fill"
          objectFit="cover"
          priority // Add the priority property
        />

        <div className="absolute px-4 flex items-center justify-center font-bold text-center animate-fade-in drop-shadow-lg h-full w-full">
          <div>
            <h1 className="text-3xl uppercase bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#C5C5C5]   to-[#c5c5c593] drop-shadow-2xl">
              {slides[currentIndex].summary}
            </h1>
            <p className="text-white py-4">
              {slides[currentIndex].description}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 grid justify-items-center w-full opacity-50">
          <Image src={Logo} alt="logo-branco" height={0} width={116.6} />
        </div>
      </div>

      {/* Left Arrow*/}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5
       text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow*/}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5
       text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide) => (
          <div
            key={slide.id}
            onClick={() => goToSlide(slide.id - 1)}
            className="text-lg cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
