import React from "react";

function About() {
  return (
    <div className=" relative h-[100vh] m-auto">
      <h2 className="text-[64px] mb-10 text-center self-center"> About Me</h2>

      <div className="">
        <div className="relative w-[75%] h-[100px] m-auto">
          <div className="absolute top-10 left-5 h-[150px] w-[1px] bg-[#c6ac77]"></div>
          <div className="absolute top-10 left-5 h-[.3px] w-[150px] bg-[#c6ac77]"></div>

          <p className="absolute px-16  pt-16 leading-10 text">
            I'm a self taught front end web developer, and
          </p>
          <div className="absolute bottom-0 right-0">
            <div className="absolute top-2 -left-8 h-[150px] w-[1px] bg-[#c6ac77]"></div>
            <div className="absolute -bottom-[160px] -left-[185px] h-[.3px] w-[150px] bg-[#c6ac77]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
