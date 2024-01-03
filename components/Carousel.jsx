import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import primg1 from "../public/assets/carousel/pr-img-1.jpg";
import primg2 from "../public/assets/carousel/pr-img-2.jpg";
import primg3 from "../public/assets/carousel/pr-img-3.jpg";
import primg4 from "../public/assets/carousel/pr-img-4.jpg";
import { TbCircleArrowRightFilled, TbCircleArrowLeftFilled } from "react-icons/tb";

const slides = [
  {
    id: 1,
    src: primg1,
    alt: "Image 1",
    summary: "Casamento",
    description:
      " ",
  },
  {
    id: 2,
    src: primg2,
    alt: "Image 2",
    summary: "Eventos",
    description:
      "",
  },
  {
    id: 3,
    src: primg3,
    alt: "Image 3",
    summary: "Festas",
    description:
      "",
  },
  {
    id: 4,
    src: primg4,
    alt: "Image 4",
    summary:
      "shows",
    description:
      "",
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
    <div className="bg-gray-900 min-h-[600px] p-10">
    <div
      className="max-w-[1000px] h-[500px] w-full m-auto py-  group absolute bottom-0 inset-0 mt-32 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full  bg-center bg-cover duration-500 relative transition-opacity  ">
        <Image
          className="rounded-lg opacity- transition-opacity duration-500 group-hover:opacity- "
          src={slides[currentIndex].src}
          alt={`Slide ${slides[currentIndex].id}`}
          layout="fill"
          objectFit="cover"
          priority // Add the priority property
        />

        <div className="absolute  p-8 flex items-end justify-start font-bold text-center animate-fade-in drop-shadow-lg h-full w-full">
          <div>
            <h1 className="text-2xl uppercase bg-clip-text font-medium text-white ">
              {slides[currentIndex].summary}
            </h1>
            <p className="text-white py-4">
              {slides[currentIndex].description}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 grid justify-items-center w-full">
        
          
        </div>
      </div>

      {/* Left Arrow*/}
      <div
   
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5
       text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <TbCircleArrowLeftFilled onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow*/}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5
       text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <TbCircleArrowRightFilled onClick={nextSlide} size={30} />
      </div>
      
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide) => (
          <div
            key={slide.id}
            onClick={() => goToSlide(slide.id - 1)}
            className="text-lg cursor-pointer text-white"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
      
    </div>
    </div>
    
  );
}

export default Carousel;
