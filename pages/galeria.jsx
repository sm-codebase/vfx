import React from "react";
import Lightbox from "../components/Lightbox";

const galeria = () => {
  return (
    <section className="mt-[95px]">
      <div className="grid text-center justify-center">
        <h1 className="my-10">Exemplos de Trabalhos</h1>
      </div>
      <div>
        <Lightbox />
      </div>
    </section>
  );
};

export default galeria;
