import React from "react";
import weather_1 from "../../Images/Weather-app-1.png";
import weather_2 from "../../Images/Weather-app-2.png";
import recipe_2 from "../../Images/recipe-2.png";
import recipe_3 from "../../Images/recipe-3.png";
import memory_1 from "../../Images/memory-1.png";
import memory_2 from "../../Images/memory-2.png";
import quote_1 from "../../Images/quote-1.png";
import quote_2 from "../../Images/quotes-2.png";
import twitter_1 from "../../Images/twitter-1.png";
import twitter_2 from "../../Images/twitter-2.png";

import {
  OuterBox,
  ImagesCard,
  BackDrop,
  Header,
  Images,
  BackDropContent,
} from "../Ui/OuterBox";
import Project from "./Project";

// #A78D64

function Projects() {
  return (
    <div className=" pb-24 ">
      <h2 className="text-center">
        <span>Some of my works</span>
      </h2>

      <Project
        number="01."
        heading="Weather App"
        link1=""
        link2="https://user-authentication-e7794.web.app/"
        img1={weather_1}
        img2={weather_2}
        about=" Full responsive Weather app, that forecasts current, Daily,
        Hourly Weather details"
        challenge="Representing Daily weather data on graph was bit challenging,
        however figuring out and learning rechars was fun."
      />
      {/* project-2 */}
      <OuterBox>
        <ImagesCard>
          <Images img1={recipe_2} img2={recipe_3} />
          <BackDrop>
            <BackDropContent
              about="Recipe is a single page application created using React Js. Renders different kinds of popular and vegetarian recipes with detailed instructions and all ingredients needed to prepare each item"
              challenge="Layout part was bit challenging but framer motion made it less difficult"
            />
          </BackDrop>
        </ImagesCard>
        <Header
          number="02."
          heading="Recipe"
          link2="https://recipe-8cf96.web.app/"
        />
      </OuterBox>
      <Project
        number="03."
        heading="Memory Game"
        link1=""
        link2="https://memory---game.web.app"
        img1={memory_1}
        img2={memory_2}
        about="The game starts with all the cards facing down. Player need to find the matching pair of cards until all the similar pair of cards are found"
        challenge="coming up with the logic was the difficult part."
      />

      <OuterBox>
        <ImagesCard>
          <Images img1={quote_1} img2={quote_2} />
          <BackDrop>
            <BackDropContent
              about="Quotes is a Single page application created using React js. It has features of adding new quote and comment on a respective quote, allows to add new quote, stores the data on firebase and fetch data whenever needed."
              challenge="I have learnt react routers following a tutorial, this porject is a part of learning process. Understaing the routes was bit confusing but it was fun learning"
            />
          </BackDrop>
        </ImagesCard>
        <Header
          number="04."
          heading="Quotes"
          link2="https://quotes-bb6b0.web.app/allQuotes"
        />
      </OuterBox>
      <Project
        number="05."
        heading="Twitter Clone"
        link1=""
        link2="https://twitter-clone-6f949.web.app/signin"
        img1={twitter_1}
        img2={twitter_2}
        about=" In case you want to check insides of the project, i have created dummy login credentails, email = itachi@gmail.com //password = itachi@123, to login to twitter-clone "
        challenge="From layout to using firebase as backend everything about this project was challenging. I followed few tutorial on how to use firebase database. Nested routes particulary the profile page was difficult, i followed react routers documentation, which helped me to stucture the page as i wanted."
      />
    </div>
  );
}

export default Projects;
