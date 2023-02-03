import React from "react";

function About() {
  return (
    <div className="bg-[#234d3a] relative h-[100vh] ">
      <div className="pl-20 flex ">
        <div className="text-[5px] flex self-start gap-3">
          <span>&#x2715; </span>
          <span>&#x2715; </span>
          <span>&#x2715; </span>
          <span>&#x2715; </span>
          <span>&#x2715; </span>
          <span>&#x2715; </span>
        </div>
        <h2 className="text-[48px] "> About Me</h2>

        <div className="text-[5px] self-end items-center flex gap-3">
          <span>&#x2715; </span>
          <span>&#x2715; </span>
          <span>&#x2715; </span>
          <span>&#x2715; </span>
          <span>&#x2715; </span>
          <span>&#x2715; </span>
        </div>
      </div>
      <p className="absolute px-48 pt-20">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quis
        exercitationem reprehenderit corrupti, eos laudantium, dolor voluptatum
        excepturi nemo corporis consequuntur? Quod ullam deserunt reprehenderit
        adipisci? Fugiat, ipsa quam! Inventore!
      </p>
    </div>
  );
}

export default About;
