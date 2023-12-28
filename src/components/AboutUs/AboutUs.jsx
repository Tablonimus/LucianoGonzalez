import React from "react";
import dv2 from "../../assets/player/mockupL.png";
import dv3 from "../../assets/player/mockupR.png";
import logoSuela from "../../assets/logos/LogoSuelaNav.svg";
import "./aboutStyles.css";

export default function AboutUs() {
  return (
    <scroll-page id="suela">
      <section className=" px-4 pb-4 rounded-lg">
        <div className="flex flex-col w-full gap-2 ">
          <div className="bg-fixx-sp flex justify-center rounded-md  px-4 w-full h-20 md:h-36 gap-2 mb-2">
            {/* BACGROUND CONTAINER */}
          </div>
        </div>
        <div className="flex justify-center  bg-[white] rounded-lg">
          <div className=" relative flex flex-col items-center h-56 md:h-96 w-10/12  md:w-8/12  p-2 rounded-lg ">
            <section className="flex flex-col gap-2 justify-between items-center h-full text-black py-2">
              <span className=" text-center italic text-sm md:text-3xl font-smibold ">
                CONVERTITE EN PROFESIONAL
              </span>
              <a
                href="https://www.instagram.com/suelaproducciones"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={logoSuela}
                  alt=""
                  className="w-20 md:w-36 drop-shadow-2xl"
                />
              </a>
              <span className="text-center w-2/3 text-sm md:text-xl">
                Producciones digitales personalizadas
              </span>
              <a
                href="https://www.instagram.com/suelaproducciones"
                target="_blank"
              >
                <button className="py-2 px-6 rounded-lg md:w-96 border hover:bg-cyan-400 bg-cyan-500 text-white drop-shadow-2xl">
                  <span className="Te">Información</span>
                </button>
              </a>
            </section>

            <img
              src={dv3}
              alt=""
              className="absolute left-[-2em] md:left-[-5em] bottom-[0em] md:bottom-[-0.2em] md:h-[26em]  h-56  object-contain rounded-lg drop-shadow-2xl"
            />
            <img
              src={dv2}
              alt=""
              className="absolute right-[-3em] md:right-[-6em] bottom-[-0.4em] md:bottom-[0em] md:h-[24em]  h-56 object-contain rounded-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </section>
    </scroll-page>
  );
}
