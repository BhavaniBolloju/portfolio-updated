import React from "react";
import {
  OuterBox,
  Header,
  ImagesCard,
  Images,
  BackDrop,
  BackDropContent,
} from "../Ui/OuterBox";

function Project({
  number,
  heading,
  link1,
  link2,
  img1,
  img2,
  about,
  challenge,
}) {
  // console.log(heading, link1);

  return (
    <OuterBox>
      <Header number={number} heading={heading} link2={link2} link1={link1} />
      <ImagesCard>
        <Images img1={img1} img2={img2} />
        <BackDrop>
          <BackDropContent about={about} challenge={challenge} />
        </BackDrop>
      </ImagesCard>
    </OuterBox>
  );
}

export default Project;
