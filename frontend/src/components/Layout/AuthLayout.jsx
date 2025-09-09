import React from "react";
import CARD_3 from "../../assets/images/card3.png";
import Logo from "../../components/Layout/Logo";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-3 pb-50">
        <Logo />
        {children}
      </div>

      <div className="hidden md:block w-[40vw] h-screen overflow-hidden relative">
        <img
          src={CARD_3}
          className="w-full h-full lg:object-cover[100%] cursor-not-allowed"
          alt="Budget Buddy Dashboard"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
