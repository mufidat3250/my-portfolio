import React, { useState } from "react";
import "./Work.css";
import animies from "/images/animies2.png";
import huluclone from "/images/huluclone.png";
import risevest from "/images/risevest.png";
import lawparlance from "/images/lawparlance.png";
import finburse from "/public/images/finburse.jpeg";
const Work = () => {
  return (
    <div className="work" id="work">
      <div className="work__container">
        <div>
          <p className="title">Work</p>
          <p className="py-4 italic text-lg">
            Check out some of my recent work{" "}
          </p>
        </div>
        <div className="work__experience">
          <div
            style={{
              backgroundImage: `url(${risevest})`,
              height: "250px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={` bg-contain bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content_div cursor-pointer`}
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 flex  flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                {" "}
                Rise Vest Cloned
              </span>
              <p className="text-[12px] max-w-[70%] text-center mt-1">
                Cloned the home page of a RiseVest. Rise works like a personal
                investment manager and adviser that lives on your smartphone,
                helping you invest in dollar denominated assets carefully
                selected to deliver safe, consistent dollar returns over time.
              </p>
              <div className="pt-4 text-center">
                <a href="https://risevest-clone.vercel.app/" target={"_blank"}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/mufidat3250/risevest-clone"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${huluclone})`,
              height: "250px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={` bg-contain bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content_div cursor-pointer`}
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center flex-col items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                {" "}
                Hulu Web App
              </span>
              <p className="text-[12px] max-w-[70%] text-center mt-4">
                This App renders movies base on there categories and also allow
                users to view each movie trailer. react js, tailwind css was
                used for the front end, while the endPoint was gotten from
                TheMoviesDatabase(TMDB)
              </p>
              <div className="pt-4 text-center">
                <a
                  href="https://hulu-cloned-swart.vercel.app/"
                  target={"_blank"}
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/mufidat3250/hulu-cloned"
                  target={"_blank"}
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${animies})`,
              height: "250px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={` bg-contain bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content_div cursor-pointer`}
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                {" "}
                Anemies
              </span>
              <p className="text-[12px] max-w-[70%] text-center mt-4">
                A fake graphql Api with all animies data was consumed and we can
                search for different animies based on categores, sort by years,
                genries etc
              </p>
              <div className="pt-4 text-center">
                <a
                  href="https://react-grapgql-test-mufidat3250.vercel.app/"
                  target={"_blank"}
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/mufidat3250/Helicarrier-React-graphql-test"
                  target={"_blank"}
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${lawparlance})`,
              height: "250px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={` bg-contain bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content_div cursor-pointer`}
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                {" "}
                Law parlance
              </span>
              <p className="text-[12px] max-w-[70%] text-center mt-4">
                Law parlance provides you with over 150k law resources, Quran,
                the book of hadith, tafsir, books of inheritance and more to aid
                your legal research and references.
              </p>
              <div className="pt-4 text-center">
                <a href="https://www.lawparlance.com/" target={"_blank"}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a target={"_blank"}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
