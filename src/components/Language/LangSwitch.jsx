import React from "react";
import esp from "../../assets/logos/españa.png";
import eng from "../../assets/logos/inglaterra.png";

export default function LangSwitch() {
  return (
    <div>
      {" "}
      <section className="flex">
        <img src={esp} alt="" className="object-contain w-6 h-6 rounded-sm" />

        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <img src={eng} alt="" className="object-contain w-6 h-6 rounded-sm" />
      </section>
    </div>
  );
}
