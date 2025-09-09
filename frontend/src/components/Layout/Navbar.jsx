import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";
import logo from "../../assets/budget-buddy-logo-.png";
const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 z-40 w-full flex gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7">
      <button
        className=" block lg:hidden text-black"
        onClick={() => setOpenSideMenu(!openSideMenu)}
      >
        {openSideMenu ? (
          <HiOutlineX className=" text-2xl cursor-pointer" />
        ) : (
          <HiOutlineMenu className=" text-2xl cursor-pointer" />
        )}
      </button>

      <h2 className="text-2xl font-semibold flex flex-row justify-center items-center gap-3">
        <img src={logo} alt="logo" className="w-8 h-8"></img>Budget Buddy
      </h2>
      {openSideMenu && (
        <div className="fixed top-[64px] left-0 bg-white">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
