import React from "react";
import logoNombre from "../../assets/images/textoNombre.png";
export default function Video() {
  return (
    <scroll-page id="video">
      <section className="flex flex-col w-full">
        {/* BACGROUND CONTAINER */}
        <div className="bg-fixx-video flex justify-center rounded-md  px-4 w-full h-12 md:h-36 mb-4 gap-2"></div>
        <div className="flex flex-col w-full bg-[#031020] justify-center h-96 lg:h-[50em] lg:rounded-lg card-container   md:py-5 md:px-5">
          <iframe
            className="rounded-lg w-full h-full "
            src="https://www.youtube.com/embed/Z4Eax-r54dQ?si=M8xf48CUVVdk2MwI"
            title="Luciano Gonzalez"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </scroll-page>
  );
}
