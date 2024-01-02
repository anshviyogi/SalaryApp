import React from "react";
import { useState } from "react";
import { close, logo, menu } from "../assets";
import { dashLinks, navLinks } from "../constants";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isDashboardLogin }) => {
  const [toggle, setToggle] = useState(false);
  let history = useNavigate();

  return (
    // These are tailwind css classes
    <nav className="w-full flex py-6 justify-between item-center navbar">
      {!isDashboardLogin && (
        <img
          src={
            "https://oceanfriends.ai/static/media/OceanFriendsLogoBlue.f179584f768df3cdf8ba785077e6dffd.svg"
          }
          alt="banklogo"
          className="w-[124px] h-[50px]"
        />
      )}

      {/* Desktop menu view */}
      {!isDashboardLogin ? (
        <ul className="list-none sm:flex hidden justify-end item-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="list-none sm:flex hidden justify-end item-center flex-1">
          {dashLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      )}

      {/* Mobile menu view */}
      <div className="sm:hidden flex flex-one justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="Menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      {!isDashboardLogin ? (
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end item-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end item-center flex-1">
            {dashLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
