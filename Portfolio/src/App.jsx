import React from "react";
import Header from "./header/Header";
import About from "./about/About";
import Project from "./project/Project";

function App() {
  return (
    <div className="relative">
      <Header />
      <About />
      <Project />
    </div>
  );
}

export default App;
