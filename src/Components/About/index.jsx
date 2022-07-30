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
            I am passionate about building excellent software that improves the
            lives of those around me. I specilalise in createing software for
            clients ranging from individuals and small-bussinesses all the way
            to large enterpise corporations. what would you do if you have a
            software expaert available at your fingertips{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
