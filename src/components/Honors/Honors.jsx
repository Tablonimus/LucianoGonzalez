import React from "react";
import palmaV from "../../assets/logos/palmaV.png";
import mzaColor from "../../assets/logos/mza-color.svg";
import usaColor from "../../assets/logos/usa-color.svg";
import cafColor from "../../assets/logos/cafs-color.svg";

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
    </div>
  );
}
