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
            <p>Hi, I'm Mufidah nice to meet you Please take a look around</p>
          </div>
          <div className="">
            {" "}
            I am swift <strong>front end</strong> developer who is passionate
            about solving problems in due time and also exploring new
            technologies. what would you do if you have a software expert
            available at your fingertips{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
