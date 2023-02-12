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
    y: -60,
    x: 0,

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
const scroll = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 3,
      duration: 1.5,
    },
  },
};

function Header() {
  return (
    <section className="relative py-36 h-[90vh] max-sm:h-[60vh]  max-md:h-[80vh]">
      <div className="absolute left-5 top-[20%] flex flex-col items-center gap-2">
        <div className="font-thin text-xs">&#x2715; </div>
        <div className="font-thin text-xs">&#x2715; </div>
        <div className="font-thin text-xs">&#x2715; </div>
        <div className="font-thin text-xs">&#x2715; </div>
        <div className="font-thin text-xs max-md:hidden">&#x2715; </div>
        <div className="font-thin text-xs max-md:hidden ">&#x2715; </div>

        <div className="w-[0.3px] h-40 max-md:h-32 bg-[#c6ac77]"></div>
      </div>
      <div className="w-[60%] max-xl:w-[70%] m-auto flex items-center justify-center">
        <div className="flex flex-col justify-center">
          <motion.div
            className="text-[80px] max-xl:text-[70px] max-lg:text-[50px]  max-sm:text-[35px] max-lg:leading-[58px] font-[400] leading-[90px]"
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
                  className="inline-block "
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
            className="mt-5 text-lg tracking-wider max-md:text-sm"
          >
            I'm a
            <span className="font-[600] text-[#dac9a7]">
              {" "}
              front-end web developer
            </span>
            , I love building beautiful and interactive web sites, exploring and
            learning new things.
          </motion.div>
        </div>
      </div>

      <div className="absolute right-5 top-[20%] flex flex-col items-center gap-2">
        <div className="w-[0.3px] h-40 max-md:h-32 bg-[#c6ac77]"></div>
        <div className="font-thin text-xs">&#x2715; </div>
        <div className="font-thin text-xs">&#x2715; </div>
        <div className="font-thin text-xs">&#x2715; </div>
        <div className="font-thin text-xs">&#x2715; </div>
        <div className="font-thin text-xs max-md:hidden">&#x2715; </div>
        <div className="font-thin text-xs max-md:hidden">&#x2715; </div>
      </div>

      <motion.div
        variants={scroll}
        initial="hidden"
        animate="visible"
        className="text-center absolute bottom-10  left-1/2 flex flex-col items-center gap-3 position"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 animate-bounce text-[#0f3329] p-2 bg-[#c6ac77]/10 backdrop-blur-md rounded-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
          />
        </svg>

        <span className="text-[#c6ac77]/70">scroll down</span>
      </motion.div>
    </section>
  );
}

export default Header;
