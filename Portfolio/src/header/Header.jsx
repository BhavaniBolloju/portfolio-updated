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
      delayChildren: 0.04 * 1,
    },
  }),
};

const letter = {
  hidden: {
    opacity: 0,
    y: -40,
    x: -5,
    transition: {
      // type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      // type: "spring",
      damping: 10,
      stiffness: 100,
    },
    x: 0,
  },
};

function Header() {
  return (
    <div className="bg-[#234d3a]  relative h-[100vh]">
      <div className="absolute left-5 top-[25%] flex flex-col items-center text-[#c6ac77] gap-2">
        <div className="font-thin text-xs">&#x2715; </div>
        <div className="font-thin text-xs">&#x2715; </div>
        <div className="font-thin text-xs">&#x2715; </div>
        <div className="font-thin text-xs">&#x2715; </div>
        <div className="font-thin text-xs">&#x2715; </div>
        <div className="font-thin text-xs">&#x2715; </div>

        <div className="w-[0.3px] h-40 bg-[#c6ac77]"></div>
      </div>
      <div className="flex flex-col  text-[#c6ac77] items-center pt-44">
        <motion.div
          className="text-[80px] font-[400] leading-[85px]"
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

          <div className="text-xl mt-5 ml-2 font-[400] text-[#eee6d7]">
            {line3.split("").map((char, i) => {
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
          </div>
        </motion.div>
        <div className="absolute right-5 top-[25%] flex flex-col items-center text-[#c6ac77] gap-2">
          <div className="w-[0.3px] h-40 bg-[#c6ac77]"></div>
          <div className="font-thin text-xs">&#x2715; </div>
          <div className="font-thin text-xs">&#x2715; </div>
          <div className="font-thin text-xs">&#x2715; </div>
          <div className="font-thin text-xs">&#x2715; </div>
          <div className="font-thin text-xs">&#x2715; </div>
          <div className="font-thin text-xs">&#x2715; </div>
        </div>
      </div>
      <div className="text-center absolute bottom-16 translate-x-[-50%] left-1/2">
        scroll down
      </div>
    </div>
  );
}

export default Header;
