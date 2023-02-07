import React from "react";
import { motion } from "framer-motion";

const line1 = "Hi there";
const line2 = "I'm Bhavani Bolloju";
const line3 = "a front end web developer";

const sentence = {
  hidden: {
    opacity: 1,
    y: 0,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
      delayChildren: 0.03 * 1,
    },
  }),
};

const letter = {
  hidden: {
    opacity: 0,
    y: 10,
    x: 40,

    // transform: "scale(1.3)",

    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    // transform: "scale(1)",
    transition: {
      type: "spring",

      damping: 10,
      stiffness: 100,
    },
    x: 0,
  },
};

const longText = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.5,
      duration: 1.5,
    },
  },
};

function Header() {
  return (
    <div className="  relative h-[100vh] ">
      <div className="absolute left-5 top-[25%] flex flex-col items-center gap-2">
        <div className="font-thin text-xs">&#x2715; </div>
        <div className="font-thin text-xs">&#x2715; </div>
        <div className="font-thin text-xs">&#x2715; </div>
        <div className="font-thin text-xs">&#x2715; </div>
        <div className="font-thin text-xs">&#x2715; </div>
        <div className="font-thin text-xs">&#x2715; </div>

        <div className="w-[0.3px] h-40 bg-[#c6ac77]"></div>
      </div>
      <div className="flex flex-col  items-center pt-48">
        <motion.div
          className="text-[80px] font-[400] leading-[85px] "
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {line1.split("").map((char, i) => {
            return (
              <motion.span
                className="inline-block"
                key={char + "_" + i}
                variants={letter}
              >
                {char === " " ? <span>&nbsp;</span> : char}
              </motion.span>
            );
          })}

          <br />
          {line2.split("").map((char, i) => {
            return (
              <motion.span
                className="inline-block tracking-tight"
                key={char + "_" + i}
                variants={letter}
              >
                {char === " " ? <span>&nbsp;</span> : char}
              </motion.span>
            );
          })}
        </motion.div>
        <motion.div
          variants={longText}
          initial="hidden"
          animate="visible"
          className="w-[50%] p-5 leading-6 tracking-wider"
        >
          I'm a
          <span className="font-[600] text-[#dac9a7]">
            {" "}
            front-end web developer
          </span>
          , I love building beautiful and interactive web sites, exploring and
          learning new stuff.
        </motion.div>
        <div className="absolute right-5 top-[25%] flex flex-col items-center gap-2">
          <div className="w-[0.3px] h-40 bg-[#c6ac77]"></div>
          <div className="font-thin text-xs">&#x2715; </div>
          <div className="font-thin text-xs">&#x2715; </div>
          <div className="font-thin text-xs">&#x2715; </div>
          <div className="font-thin text-xs">&#x2715; </div>
          <div className="font-thin text-xs">&#x2715; </div>
          <div className="font-thin text-xs">&#x2715; </div>
        </div>
      </div>

      <div className="text-center absolute bottom-20 translate-x-[-50%] left-1/2">
        scroll down
      </div>
    </div>
  );
}

export default Header;
