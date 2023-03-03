import React from "react";
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
      duration: 0.8,
    },
  },
};
function About() {
  return (
    <section className="py-20 m-auto">
      <motion.h2
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className=" text-center self-center"
      >
        <span className="opacity-80  px-5">About Me</span>
      </motion.h2>
      <motion.div
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="height relative"
      >
        <div className=" w-[70%] max-lg:w-[90%] h-[100%] m-auto">
          <div className=" top-0 left-0 p-4 leading-10 text height">
            <div className="border-t border-[#c6ac77] w-[150px]"></div>
            <div className="p-8 border-r border-[#c6ac77] border-l">
              I'm a self-taught front end web developer with a passion for
              creating visually appealing and responsive Web apps. I have
              completed MBA and a year ago i quit my job to pursue my passion
              for programming full time. Ever since, i am learning to develop
              the skills needed to become a front end developer. I like reading
              books and watching anime in my free time. I'm a life long learner.
            </div>
            <div className="border-t border-[#c6ac77] w-[150px] ml-auto"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
