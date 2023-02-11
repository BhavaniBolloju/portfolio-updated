import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiSass,
  DiReact,
  DiBootstrap,
} from "react-icons/di";
import { SiRedux, SiTailwindcss } from "react-icons/si";

function Skills() {
  return (
    <div className="w-[70%] m-auto pb-20">
      <h3 className="text-center pb-14">
        Languages & Tools i use to build websites
      </h3>
      <ul className="px-20 flex items-center justify-between  gap-5 text-sm">
        <li className="flex flex-col gap-2 items-center">
          <DiHtml5 className="text-3xl" />
          <span className="text-[#dac9a7]">HTML</span>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <DiCss3 className="text-3xl" />
          <span className="text-[#dac9a7]">CSS</span>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <DiSass className="text-3xl" />
          <span className="text-[#dac9a7]">SASS</span>
        </li>

        <li className="flex flex-col gap-2 items-center">
          <DiJavascript className="text-3xl" />
          <span className="text-[#dac9a7]">JavaScript</span>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <DiReact className="text-3xl" />
          <span className="text-[#dac9a7]">REACT</span>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <SiRedux className="text-2xl" />
          <span className="text-[#dac9a7]">REDUX</span>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <SiTailwindcss className="text-2xl" />
          <span className="text-[#dac9a7]">TAILWIND</span>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <DiBootstrap className="text-3xl" />
          <span className="text-[#dac9a7]">BOOTSTRAPE</span>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
