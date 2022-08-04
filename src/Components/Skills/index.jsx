import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      {/* container */}
      <div className="skills__container">
        <div>
          <p className=" sm:mt-0 text-4xl font-bold inline border-b-4 border-pink-700">
            Skills
          </p>
          <p className="text-lg italic py-4">
            This are the technologies I've worked with
          </p>
        </div>
        <div className="technologys">
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-300 py-4  flex items-center  flex-col justify-center">
            <img src="/images/css.png" alt="" className="w-20 mx-auto" />
            <p className="text-center mt-2">CSS</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-300 py-4 flex flex-col items-center  justify-center ">
            <img
              src="/images/javascript.png"
              alt=""
              className="w-20 mx-auto"
            />
            <p className="text-center mt-2">JAVASCRIPT</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-300 py-4  ">
            <img
              src="/images/tailwind.png"
              alt=""
              className="w-20 mx-auto"
            />
            <p className="text-center mt-2">TAILWIND CSS</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-300 py-4 flex items-center flex-col justify-center">
            <img
              src="/images/tslogo.png"
              alt=""
              className="w-20 mx-auto"
            />
            <p className="text-center mt-2">TYPESCRIPT</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-300 py-4  flex items-center flex-col justify-center">
            <img
              src="/public/images/react.png"
              alt=""
              className="w-20 mx-auto"
            />
            <p className="text-center mt-2">REACT</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-300 py-4  flex items-center flex-col justify-center">
            <img
              src="/images/nextjs.png"
              alt=""
              className="w-20 mx-auto"
            />
            <p className="text-center mt-2">NEXTJS</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-300 py-4 flex items-center justify-center flex-col">
            <img
              src="/images/react-redux.png"
              alt=""
              className="w-20 mx-auto"
            />
            <p className="text-center mt-2">REACT-REDUX</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-300 py-4 flex items-center flex-col  justify-center">
            <img
              src="/images/netlify_light.png"
              alt=""
              className="w-20 mx-auto"
            />
            <p className="text-center mt-2">NETLIFY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
