import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/project/Projects";
import HeaderNav from "./components/header/HeaderNav";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Scroll from "./components/Ui/Scroll";
import { motion } from "framer-motion";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMoveHandler = function (e) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      // console.log(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", mouseMoveHandler);
  }, []);
  // console.log(mousePosition);

  const variants = {
    default: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      transition: {
        // duration: 0.2,
        // type: "linear",
      },
    },
  };

  return (
    <>
      <div className="relative">
        <HeaderNav />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Footer />
        <motion.div
          variants={variants}
          animate="default"
          className={`w-[50px] h-[50px] bg-[#ccae62]/90 top-0 left-0 rounded-full shadow-2xl backdrop-blur-sm z-[1000] fixed pointer-events-none`}
        />
      </div>
      {/* <Scroll /> */}
    </>
  );
}

export default App;
//
