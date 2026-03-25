import React from "react";
import { FaAppStore, FaGithub, FaHome } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";
import { SiFarfetch } from "react-icons/si";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `font-semibold transition-all duration-300 ${
      isActive
        ? "text-[#632EE3] border-b-2 border-[#632EE3] pb-1"
        : "text-gray-500 hover:text-[#632EE3]"
    }`;
  const links = (
    <div className="flex flex-col lg:flex-row gap-4 text-gray-500 font-semibold">
      <li>
        <NavLink className={navLinkClass} to="/">
          <FaHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinkClass} to="/apps">
          <FaAppStore /> Apps
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinkClass} to="/installed">
          <MdInstallDesktop /> Installation
        </NavLink>
      </li>
    </div>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          <h1 className="text-xl text-[#632EE3] uppercase font-semibold">
            Fetch <SiFarfetch className="inline" /> Hub
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to={"https://github.com/rahidhaque"} target="_blank" className="btn bg-[#1A77F2] text-white border-[#005fd8]">
            <FaGithub />
           Contribute
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
