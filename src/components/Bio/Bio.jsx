import React, { useState } from "react";
import canchaTermica from "../../assets/images/canchaTermica.svg";
import espalda from "../../assets/player/bio-espalda.png";
import logoNombre from "../../assets/images/textoNombre.png";

import copa from "../../assets/player/bio-copa.png";
import ale from "../../assets/logos/aleman.svg";
import player from "../../assets/logos/player.png";
import bot from "../../assets/logos/botin.png";
import bal from "../../assets/logos/balanza.png";

import usa from "../../assets/logos/usa.jpeg";
import ita from "../../assets/logos/italia.png";
import "./bioStyles.css";
export default function Bio() {
  const [lang, setLang] = useState("es");

  function handleLanguage(e) {
    setLang(e.target.value);
  }

  return (
    <scroll-page id="bio">
      <div className=" relative flex flex-col items-center gap-2 w-full h- ">
        <div className="flex flex-col w-full gap-2 ">
          <div className="bg-fixx-bio flex justify-center rounded-md  px-4 w-full h-20 md:h-36 gap-2 mb-2">
            {/* BACGROUND CONTAINER */}
          </div>
        </div>
        <section className="bg-point w-full flex flex-col gap-2 px-4 pt-4 bg-[#031020] md:rounded-lg p-4 text-white">
          <div className="flex flex-col drop-shadow-2xl  w-full px-4 py-2 rounded-md">
            <span className="text-[0.9em] md:text-lg font-extrabold ">
              DATOS BIOMÉTRICOS
            </span>

            <div className="flex flex-col items-start gap-2 justifty-center">
              <section className="flex flex-col  items-start border-y w-7/12 py-1 px-1">
                <span className="text-[0.7em] md:text-lg font-extrabold">
                  NACIMIENTO
                </span>
                <div className="flex gap-2 items-center">
                  📅
                  <span className="text-[0.7em] md:text-lg text-white font-extrabold">
                    07/11/1994
                  </span>
                </div>
              </section>

              <section className="flex flex-col  items-start border-y w-7/12 py-1 px-1">
                <span className="text-[0.7em] md:text-lg font-extrabold">
                  NACIONALIDAD
                </span>
                <div className="flex gap-2 items-center">
                  <img
                    src={usa}
                    alt=""
                    className="object-contain w-6 h-6 rounded-sm"
                  />
                  <img
                    src={ita}
                    alt=""
                    className="object-contain w-6 h-6 rounded-sm"
                  />
                </div>
              </section>

              <section className="flex flex-col  items-start border-y w-7/12 py-1 px-1">
                <span className="text-[0.7em] md:text-lg font-extrabold">
                  ALTURA
                </span>
                <div className="flex gap-2 items-center">
                  📏
                  <span className="text-[0.7em] md:text-lg text-white font-extrabold">
                    1.72 mts
                  </span>
                </div>
              </section>
              <section className="flex flex-col  items-start border-y w-7/12 py-1 px-1">
                <span className="text-[0.7em] md:text-lg font-extrabold">
                  PESO
                </span>
                <div className="flex gap-2 items-center">
                  <img
                    src={bal}
                    alt=""
                    className="object-contain w-6 h-6 rounded-sm"
                  />

                  <span className="text-[0.7em] md:text-lg text-white font-extrabold">
                    70 kg
                  </span>
                </div>
              </section>
            </div>
          </div>
          <div className="flex flex-col drop-shadow-2xl  w-full px-4 py-2 rounded-md">
            <span className="text-[0.9em] md:text-lg font-extrabold ">
              DATOS DE JUEGO
            </span>
            <div className="flex flex-col items-start gap-2 justifty-center">
              <section className="flex flex-col  items-start border-y w-7/12 py-1 px-1">
                <span className="text-[0.7em] md:text-lg font-extrabold">
                  PIERNA HÁBIL
                </span>
                <div className="flex gap-2 items-center">
                  <img
                    src={bot}
                    alt=""
                    className="object-contain w-6 h-6 rounded-sm"
                  />
                  <span className="text-[0.7em] md:text-lg  font-extrabold">
                    Derecha
                  </span>
                </div>
              </section>
              <section className="flex flex-col  items-start border-y w-7/12 py-1 px-1">
                <span className="text-[0.7em] md:text-lg font-extrabold">
                  POSICIÓN
                </span>
                <div className="flex gap-2 items-center">
                  <img
                    src={player}
                    alt=""
                    className="object-contain w-6 h-6 rounded-sm"
                  />
                  <span className="text-[0.7em] md:text-lg text-white font-extrabold">
                    Ala / Universal
                  </span>
                </div>
              </section>
              <section className="flex flex-col  items-start border-y w-7/12 py-1 px-1">
                <span className="text-[0.7em] md:text-lg font-extrabold">
                  AÑO DE DEBUT
                </span>
                <div className="flex gap-2 items-center">
                  📅
                  <span className="text-[0.7em] md:text-lg text-white font-extrabold">
                    2010
                  </span>
                </div>
              </section>
              <section className="flex flex-col  items-start border-y w-7/12 py-1 px-1">
                <span className="text-[0.7em] md:text-lg font-extrabold">
                  CLUB DE DEBUT
                </span>
                <div className="flex gap-2 items-center">
                  <img
                    src={ale}
                    alt=""
                    className="object-contain w-6 h-6 rounded-sm"
                  />
                  <span className="text-[0.7em] md:text-lg text-white font-extrabold">
                    Club Alemán{" "}
                  </span>
                </div>
              </section>
            </div>
          </div>
        </section>
        <img
          src={copa}
          alt=""
          className="absolute object-contain w-[14rem] right-[0rem] top-16 z-30  md:top-[5rem] md:right-[6rem] md:w-[25%] md:h-[100%]"
        />
        {/* <section className="relative px-4 image-espalda flex justify-end h-full w-full">
          <img
            src={espalda}
            alt=""
            className="object-contain w-[35rem] h-[35rem] absolute bottom-[-6rem] left-[-7rem] "
          />

          <img
            src={canchaTermica}
            alt=""
            className="object-contain absolute top-[-1rem] right-2 w-[17rem] h-[17rem]"
          />
        </section> */}
      </div>
    </scroll-page>
  );
}
