import React from "react";
import "./Home.css";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="Home" name="home">
      {/* constainer */}
      <div className="home__container">
        <p className="text-pink-700 font-bold leading-6">Hi, my name is</p>
        <h1 className="name">Wahab Mufidat</h1>
        {/* <h2 className="description"></h2> */}
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a Web Developer i develop and build a responsive web design
        </p>

        <button className="button group text-white">
          View Work
          <span>
            <HiArrowNarrowRight className="group-hover:rotate-90 duration-300" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
