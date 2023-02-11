import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/project/Projects";
import HeaderNav from "./components/header/HeaderNav";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Scroll from "./components/Ui/Scroll";

function App() {
  return (
    <>
      <div className="relative">
        <HeaderNav />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
      {/* <Scroll /> */}
    </>
  );
}

export default App;
//
