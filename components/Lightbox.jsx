import Image from "next/image";
import { ThumbImage } from "./ThumbImage";

import Image01 from "../public/assets/galeria/img-1.jpg";
import Image02 from "../public/assets/galeria/img-2.jpg";
import Image03 from "../public/assets/galeria/img-3.jpg";
import Image04 from "../public/assets/galeria/img-4.jpg";
import Image05 from "../public/assets/galeria/img-5.jpg";
import Image06 from "../public/assets/galeria/img-6.jpg";
import Arrow from "../public/assets/arrow.svg";
import Close from "../public/assets/close.svg";
import { useEffect, useState } from "react";

export default function Lightbox() {
  const [indexCurrent, setIndexCurrent] = useState(0);

  const [dataimgCurrent, setDataimgCurrent] = useState(null);

  const isOpen = dataimgCurrent !== null;

  const ListImages = [Image01, Image02, Image03, Image04, Image05, Image06];

  function handleClickOpenImage(index, number) {
    setIndexCurrent(index);

    setDataimgCurrent(ListImages[index]);
  }

  function handleCloseLightBox() {
    setDataimgCurrent(null);
  }

  function handleNavigate(direction = "next" || "previous") {
    let index = direction === "next" ? indexCurrent + 1 : indexCurrent - 1;

    if (index < 0) {
      index = ListImages.length - 1;
    }

    if (index >= ListImages.length) {
      index = 0;
    }

    setIndexCurrent(index);

    setDataimgCurrent(ListImages[index]);
  }

  return (
    <main>
      {" "}
      <section className="w-full min-h-screen flex items-start justify-center py-10 px-10 bg-slate-900">
        <div className="md:grid grid-cols-3 gap-3">
          {ListImages.map((img, index) => (
            <ThumbImage
              key={index}
              srcImage={img}
              onClick={() => handleClickOpenImage(index)}
            />
          ))}
        </div>
      </section>
      {isOpen && (
        <div
          className="fixed inset-0 w-full  h-full z-30 flex items-center
       justify-center bg-black bg-opacity-50 gap-4"
        >
          <div
            className="absolute top-5 right-5 w-10 hover:opacity-50 transition-opacity ease-linear cursor-pointer"
            onClick={handleCloseLightBox}
          >
            <Image src={Close} alt="Button Close" />
          </div>

          <div
            className="w-12 rotate-180 hover:opacity-50 transition-opacity ease-linear"
            onClick={() => handleNavigate("previous")}
          >
            <Image src={Arrow} alt="Arrow Previous" />
          </div>

          <div>
          {<Image src={dataimgCurrent} width={500} alt="image" />}
          </div>

          <div
            className="w-12 hover:opacity-50 transition-opacity ease-linear"
            onClick={() => handleNavigate("next")}
          >
            <Image src={Arrow} alt="Arrow Next" />
          </div>
        </div>
      )}
    </main>
  );
}
