import React from "react";

function About() {
  return (
    <div className="bg-[#234d3a] relative h-[100vh] m-auto">
      <div className="flex  justify-center items-start m-auto">
        <span className="w-[20%]  h-[0.2px] bg-[#c6ac77]"></span>
        <h2 className="text-[60px] px-16  self-center"> About Me</h2>
        <span className="w-[20%] h-[.2px] bg-[#c6ac77]"></span>
      </div>
      <div className="relative w-[75%] m-auto">
        {/* <div className="absolute top-10 left-5 h-[150px] w-[1px] bg-[#c6ac77]"></div>
        <div className="absolute top-10 left-5 h-[.3px] w-[150px] bg-[#c6ac77]"></div> */}

        <p className="absolute px-16  pt-16 leading-8 text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quis
          exercitationem reprehenderit corrupti, eos laudantium, dolor
          voluptatum excepturi nemo corporis consequuntur? Quod ullam deserunt
          reprehenderit excepturi nemo corporis consequuntur? Quod ullam
          deserunt reprehenderit excepturi nemo corporis consequuntur? Quod
          ullam deserunt reprehenderit excepturi nemo corporis consequuntur?
          Quod ullam deserunt reprehenderit adipisci? Fugiat,
        </p>
        {/* <div className="absolute top-10 left-5 h-[150px] w-[1px] bg-[#c6ac77]"></div> */}
        {/* <div className="absolute -bottom-[100px] left-5 h-[.3px] w-[150px] bg-[#c6ac77]" /> */}
      </div>
    </div>
  );
}

export default About;
