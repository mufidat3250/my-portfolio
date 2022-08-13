import React from "react";

import "./About.css";
const About = () => {
  return (
    <div className="About" name="about">
      <div className="about__container">
        <div className="title__wrapper">
          <div className=" pb-8 flex w-full sm:justify-end pl-4">
            <p className="title">About</p>
          </div>
        </div>
        <div className="description_">
          <div className=" flex justify-center items-center  text-left sm:text-right text-2xl font-bold">
            <p>
              {" "}
              Hi, I'm Mufidah a Frontend software engineer experienced in
              developing, and managing apps and internal frameworks. It is nice
              to meet you.
            </p>
          </div>
          <div className="">
            {" "}
            I specialize in ReactJS, Typescript, Next Js and responsive design.
            I am an enthusiastic team player and deep creative thinker. In my
            free time, I read and enjoy time with friends too.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
