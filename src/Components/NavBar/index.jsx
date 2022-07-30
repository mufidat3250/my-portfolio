import React, { useState } from "react";
import "./NavBar.css";
import { FaBars, FaTimes, FaFacebook, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  let socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
    },
    {
      name: "FaceBook",
      icon: FaFacebook,
    },
    {
      name: "Gmail",
      icon: HiOutlineMail,
    },
    {
      name: "Contact",
      icon: BsFillPersonLinesFill,
    },
  ];

  const tabs = [
    {
      name: "Home",
      to: "home",
    },
    {
      name: "About",
      to: "about",
    },
    {
      name: "Skills",
      to: "skills",
    },
    {
      name: "Contact",
      to: "contact",
    },
  ];
  return (
    <div className="Nav">
      <h1 className="logo">MN</h1>
      {/* menu */}
      <div>
        <ul className="hidden md:flex">
          {tabs.map(({ name, to }, index) => (
            <li key={index}>
              <Link to={to} smooth={true} duration={500}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* handburger */}
      <div className=" md:hidden z-10" onClick={() => setNav(!nav)}>
        {!nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* mobile menu */}
      <ul className={`${!nav ? "hidden" : "mobile__menu"}`}>
        {tabs.map(({ name, to }, index) => (
          <li key={index} className="py-6 text-4xl">
            <Link
              onClick={() => setNav(!nav)}
              to={to}
              smooth={true}
              duration={500}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      {/* social icon */}
      <div className="hidden lg:fixed top-[35%] left-[0] lg:block">
        <ul>
          {socialLinks.map(({ name, icon: Icon }, index) => (
            <li
              className="flex w-[160px] h-[50px] ml-[-100px] hover:ml-[-10px] duration-300"
              key={index}
            >
              <a
                href=""
                className={` ${
                  (index === 0 && "bg-blue-600") ||
                  (index === 1 && "bg-gray-600") ||
                  (index === 2 && "bg-red-300") ||
                  (index === 3 && "bg-gray-700")
                } flex items-center justify-between   w-full text-base font-[600] px-2 text-gray-300 `}
              >
                <p>{name}</p> <Icon size={30} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
