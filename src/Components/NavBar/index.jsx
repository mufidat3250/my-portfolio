import React, { useState } from "react";
import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  console.log(nav);
  return (
    <div className="Nav">
      <h1>Logo</h1>
      {/* menu */}
      <div>
        <ul className="hidden md:flex">
          {["Home", "About", "Skills", "Contact"].map((nav, index) => (
            <li key={index}>{nav}</li>
          ))}
        </ul>
      </div>
      {/* handburger */}
      <div className=" md:hidden z-10" onClick={() => setNav(!nav)}>
        {!nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* mobile menu */}
      <ul className={`${!nav ? "hidden" : "mobile__menu"}`}>
        {["Home", "About", "Skills", "Contact"].map((nav, index) => (
          <li key={index} className="py-6 text-4xl">
            {nav}
          </li>
        ))}
      </ul>

      {/* social icon */}
      <div className="">

      </div>
    </div>
  );
};

export default NavBar;
