import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/project/Projects";

function App() {
  return (
    <div className="relative">
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
