import React from "react";
import festejo from "../../assets/player/portada-festejo.png";
import gambeta from "../../assets/player/portada-gambetaR.png";
import señala from "../../assets/player/portada-señalaR.png";
import usa from "../../assets/images/usa.svg";
import Bio from "../../components/Bio/Bio";
import Video from "../../components/Video/Video";
import Images from "../../components/Images/Images";
import textoNombre from "../../assets/images/textoNombre.png";
import Honors from "../../components/Honors/Honors";
import AboutUs from "../../components/AboutUs/AboutUs";
import Contact from "../../components/Contact/Contact";
import "./homeStyles.css";

export default function Home() {
  return (
    <div className="background-fix w-screen">
      {/*PORTADA PRINCIPAL */}
      <div className="path pt-12  lg:px-24 h-screen relative main-container">
        <div className=" flex flex-col">
          <div className="relative flex justify-center">
            <img
              src={textoNombre}
              alt=""
              className="sticky self-center w-9/12 md:w-1/2 h-full object-contain"
            />
          </div>
          <div className=" flex justify-center px-5 ">
            <img
              src={usa}
              alt=""
              className="fade-in-espalda absolute w-8/12 md:w-[23%] "
            />
            <img
              src={festejo}
              alt=""
              className="fade-in-espalda object-contain absolute h-80 top-[15.2rem]  md:top-[25rem] md:right-[40rem] md:h-[60%]"
            />
            <></>
            <img
              src={gambeta}
              alt=""
              className="fade-in-espalda object-contain absolute  h-[16rem] bottom-16 left-0  md:top-[25rem] md:left-[20rem] md:h-[60%]"
            />
            <img
              src={señala}
              alt=""
              className="fade-in-espalda object-contain absolute  h-[22rem] bottom-0 right-0  md:bottom -[15rem] md:right-[15rem] md:h-[70%]"
            />
          </div>
        </div>
      </div>
      {/* ---SECCIONES-------- */}
      <scroll-container>
        <div className="flex flex-col w-full lg:px-96 gap-3 z-40">
          <Video />
          <Bio />
          <Honors />
          <Images />
          <Contact />

          <AboutUs />
        </div>
      </scroll-container>
    </div>
  );
}
