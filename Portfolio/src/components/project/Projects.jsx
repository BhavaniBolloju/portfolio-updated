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
import shopcart_1 from "../../Images/shop-cart-1.png";
import shopcart_2 from "../../Images/shop-cart-mobile-1.png";

import {
  OuterBox,
  ImagesCard,
  BackDrop,
  Header,
  Images,
  BackDropContent,
} from "../Ui/OuterBox";
import Project from "./Project";
import { motion } from "framer-motion";

const variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.8,
    },
  },
};
// #A78D64

function Projects() {
  return (
    <section className=" pb-24 ">
      <motion.h2
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="text-center"
      >
        <span>Some of my works</span>
      </motion.h2>

      <Project
        number="01."
        heading="Weather App"
        link1="https://github.com/saMruBa/Weather-App"
        link2="https://user-authentication-e7794.web.app/"
        img1={weather_1}
        img2={weather_2}
        about=" Full responsive Weather app, that forecasts current, Daily,
        Hourly Weather details"
        challenge="A bit of difficulty was encountered when displaying daily weather data on a graph, however learning how to represent data on a graph with Recharts was a great experience."
      />
      <Project
        number="02."
        heading="Recipe"
        link1="https://github.com/saMruBa/Recipe-App"
        link2="https://recipe-8cf96.web.app/"
        img1={recipe_2}
        img2={recipe_3}
        about="Recipe is a single page application developed using React Js. Recipe is a single page application developed using React Js. Featured in this application is a collection of popular vegetarian recipes along with step-by-step instructions and the ingredients required to prepare them."
        challenge="Layout part was a bit challenging but With its helpful visual tools, Framer Motion made the otherwise challenging task of layout design much easier."
      />

      <Project
        number="03."
        heading="Memory Game"
        link1="https://github.com/saMruBa/Memory-game"
        link2="https://memory---game.web.app"
        img1={memory_1}
        img2={memory_2}
        about="The game starts with all the cards facing down. To win the game, players must remember where certain pairs were located, and use that knowledge to find other pairs of cards quickly."
        challenge="coming up with the logic was the difficult part."
      />

      <Project
        number="04."
        heading="Quotes"
        link1="https://github.com/saMruBa/Quotes"
        link2="https://quotes-bb6b0.web.app/allQuotes"
        img1={quote_1}
        img2={quote_2}
        about="Quotes is a single page application created using ReactJS. A user can add a new quote and comment on existing quotes, store data on Firebase, and retrieve data as needed."
        challenge="As part of my learning process, I have learnt react routers from a tutorial, and this project is part of that learning. I found understanding the routes to be a little difficult, but I enjoyed learning them."
      />

      <Project
        number="05."
        heading="Twitter Clone"
        link1="https://github.com/saMruBa/twitter-clone"
        link2="https://twitter-clone-6f949.web.app/signin"
        img1={twitter_1}
        img2={twitter_2}
        about=" You can use these credentials to log in and explore the project further - email: itachi@gmail.com and password: itachi@123."
        challenge="It was a challenging project, from its layout to the use of Firebase as the backend. Despite the difficulty, I was able to make the page look the way I wanted by reading the react router documentation and exploring Firebase tutorials."
      />
      <Project
        number="06."
        heading="Shop Cart"
        link1="https://github.com/BhavaniBolloju/E-commerce"
        link2="https://e-commerce-ac3a5.web.app/"
        img1={shopcart_1}
        img2={shopcart_2}
        about="E-commerce website allow users to add items to the cart, save items and place an order by signing in. You can use these credentials to log in and explore the project further - email: newuser@gmail.com and password: newuser@123"
        challenge="It was challenging to use firebase to store and retrieve data along with redux, even though I got to learn redux thunks in the process. It was also challenging to arrange the items on the basis of categories."
      />
    </section>
  );
}

export default Projects;
