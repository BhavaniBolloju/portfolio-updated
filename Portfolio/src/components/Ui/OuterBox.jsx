import React from "react";

export function OuterBox(props) {
  return (
    <section className="w-[60%] m-auto mt-20 text-[#0f3329]">
      <div className="flex h-[350px] w-[100%] rounded-lg p-3 gap-1 bg-[#A79864] ">
        {props.children}
      </div>
    </section>
  );
}

export function ImagesCard(props) {
  return (
    <div className="bg-[#1e6853]/70 p-3 h-[100%] rounded-lg flex-grow flex  items-start justify-center self-center basis-[65%] shadow-md relative group/item overflow-hidden">
      {props.children}
    </div>
  );
}

export function BackDrop(props) {
  return (
    <div className="absolute top-0 left-0 translate-y-[-100%]  group-hover/item:translate-y-0 bg-[#1e6853]/80 duration-300  ease-in delay-75  backdrop-opacity-100 backdrop-blur-xl h-full p-4 group-hover/item:transition-all w-full grayscale-1 leading-6">
      {props.children}
    </div>
  );
}

export function BackDropContent({ about, challenge }) {
  return (
    <div className="text-[#e6ca9c] overflow-y-scroll scrollbar-hide">
      <h4 className="font-semibold mb-2">About: </h4>
      <p className="mb-3">{about}</p>
      <h4 className="font-semibold mb-2">Challenging Part:</h4>
      <p>{challenge}</p>
    </div>
  );
}

export const Button = function (props) {
  return (
    <a
      href={props.link}
      target="_blank"
      className="bg-[#D2C5B0]/80 px-2 py-1 hover:cursor-pointer text-sm rounded-sm "
    >
      {props.children}
    </a>
  );
};

export function Header({ number, heading, link1, link2 }) {
  return (
    <div className=" flex flex-col gap-5  flex-grow items-center justify-center  basis-[40%]">
      <h3 className=" flex gap-2  items-end justify-center font-semibold">
        <span className="text-[35px]">{number}</span>
        <span>{heading}</span>
      </h3>
      <div className="flex gap-5">
        <Button link={link1}>Github</Button>
        <Button link={link2}>Open Live</Button>
      </div>
    </div>
  );
}

export const Images = function ({ img1, img2 }) {
  return (
    <div className="self-center flex m-auto">
      <div className="self-center m-auto overflow-hidden">
        <img
          src={img1}
          alt="Weather-app"
          className="shadow-md w-[95%] m-auto rounded-lg  object-cover"
        />
      </div>
      <div className="self-center m-auto overflow-hidden -translate-x-3 rotate-6">
        <img
          src={img2}
          alt="Weather-app"
          className="rounded-lg object-cover shadow-lg"
        />
      </div>
    </div>
  );
};
