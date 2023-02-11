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

import { motion } from "framer-motion";

const variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

function Skills() {
  return (
    <section className="w-[70%] m-auto pb-32">
      <motion.h3
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="text-center pb-14"
      >
        Languages & Tools i use to build websites
      </motion.h3>
      <motion.ul
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="px-20 flex flex-wrap  items-center justify-between  gap-5 text-sm"
      >
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
      </motion.ul>
    </section>
  );
}

export default Skills;
