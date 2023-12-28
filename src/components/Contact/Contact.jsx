import React from "react";

import logoNombre from "../../assets/images/textoNombre.png";
import golpe from "../../assets/player/contacto-golpe.png";
import mza from "../../assets/logos/mza.svg";
import youtube from "../../assets/logos/youtube.png";
import insta from "../../assets/logos/insta.png";
import face from "../../assets/logos/face.png";
import gmail from "../../assets/logos/gmail.png";

import "./contactStyles.css";
export default function Contact() {
  return (
    <scroll-page id="contact">
      <div className=" flex flex-col items-center  gap-20 lg:gap-10  w-full">
        <div className="flex flex-col w-full gap-2 ">
          <div className="bg-fixx-contacto flex justify-center rounded-md  px-4 w-full h-20 md:h-36 gap-2 mb-2">
            {/* BACGROUND CONTAINER */}
          </div>
        </div>

        <div className="flex justify-center w-full relative">
          <img
            src={golpe}
            alt=""
            className="drop-shadow-2xl object-contain w-96 lg:w-[60%]"
          />{" "}
          {/* <img
            src={mza}
            alt=""
            className="drop-shadow-2xl object-contain top-0 absolute w-96 h-96"
          /> */}
        </div>
        <div className="flex justify-around md:justify-center md:gap-14 w-full items-center text-white">
          <a href="https://www.instagram.com/luchogonzalez.07/" target="_blank">
            <section className="flex flex-col gap-2 items-center">
              <img
                src={insta}
                alt=""
                className="w-10 h-10 lg:w-20 lg:h-20 rounded-lg object-cover"
              />
              <span className="text-[10px] lg:text-lg">@luchogonzalez.07</span>
            </section>
          </a>

          <a href="mailto:lucianonigonzalez@gmail.com" target="_blank">
            <section className="flex flex-col gap-2 items-center">
              <img
                src={gmail}
                alt=""
                className="w-10 h-10 lg:w-20 lg:h-20 rounded-lg object-cover "
              />
              <span className="text-[10px] lg:text-lg">
                lucianonigonzalez@gmail.com
              </span>
            </section>
          </a>
          <a href="https://www.facebook.com/luchooo.7" target="_blank">
            <section className="flex flex-col gap-2 items-center">
              <img
                src={face}
                alt=""
                className="w-10 h-10 lg:w-20 lg:h-20 rounded-lg object-cover "
              />
              <span className="text-[10px] lg:text-lg">@luchooo.7</span>
            </section>
          </a>
        </div>
      </div>
    </scroll-page>
  );
}
