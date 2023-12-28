import React from "react";
import { Carousel } from "flowbite-react";
import copa from "../../assets/player/bio-copa.png";
import palmaV from "../../assets/logos/palmaV.png";
import mzaColor from "../../assets/logos/mza-color.svg";
import usaColor from "../../assets/logos/usa-color.svg";
import cafColor from "../../assets/logos/cafs-color.svg";

import trays from "./trays.json";
import honors from "./hono.json";
import "./honorsStyles.css";

export default function Honors() {
  return (
    <div className="relative flex flex-col gap-2">
      <div className="flex h-full w-full gap-3 items-center justify-around">
        <img
          src={mzaColor}
          alt=""
          className="w-24 h-24 md:h-56 md:w-56 object-contain "
        />
        <img
          src={usaColor}
          alt=""
          className="w-24 h-24  md:h-56 md:w-56 object-contain"
        />
        <img
          src={cafColor}
          alt=""
          className="w-24 h-24  md:h-56 md:w-56 object-contain"
        />
      </div>
      <div className="flex flex-col w-full gap-2 ">
        <div className="bg-fixx-tray flex justify-center rounded-md  px-4 w-full h-20 md:h-36 gap-2">
          {/* BACGROUND CONTAINER */}
        </div>
      </div>

      <img src={palmaV} alt="" className="object-cover rounded-lg" />
      {/* <div className="w-11/12 h-96 p-2 rounded-lg">
        <Carousel indicators={true}>
          <div className="bg-gray-500 w-full rounded-md drop-shadow-2xl h-96 p-2">
            <span className="font-bold ">TRAYECTORIA</span>

            <ul>
              {trays.map((tray, index) => (
                <li key={index} className="pr-">
                  <span className="text-[10px]">▪ {tray}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white w-full rounded-md drop-shadow-2xl h-96  p-2">
            <span className="font-bold ">PALMARÉS</span>

            <ul>
              {honors.map((tray, index) => (
                <li key={index} className="pr-32">
                  <span className="text-[10px]">▪ {tray}</span>
                </li>
              ))}
            </ul>
          </div>
        </Carousel>
      </div> */}

      {/* <div className=" bg-white rounded-md drop-shadow-2xl w-2/3 p-2">
        <span className="font-bold ">TRAYECTORIA</span>

        <ul>
          {trays.map((tray, index) => (
            <li key={index} className="pr-0">
              <span className="text-[10px]">▪ {tray}</span>
            </li>
          ))}
        </ul>
      </div> */}
      {/* <img
        src={copa}
        alt=""
        className="absolute object-contain w-[11rem] right-[1rem] top-56 z-30"
      /> */}
      {/* <div className="relative bg-white rounded-md drop-shadow-2xl w-2/3 p-2">
        <span className="font-bold ">PALMARÉS</span>

        <ul>
          {honors.map((tray, index) => (
            <li key={index} className="pr-5">
              <span className="text-[10px]">▪ {tray}</span>
            </li>
          ))}
        </ul>
      </div> */}

      {/* LISTA */}
    </div>
  );
}
