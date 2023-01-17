import { Bars3Icon } from "@heroicons/react/24/solid";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeChannelState, isNavChannelOpenState } from "../utils/recoil";

const Navbar = () => {
  const activeChannel = useRecoilValue(activeChannelState);
  const [isNavChannelOpen, setIsNavChannelOpen] = useRecoilState(
    isNavChannelOpenState
  );

  // Open Nav Channel
  const handleOpenNavChannel = () => {
    setIsNavChannelOpen(true);
  };

  return (
    <nav className="relative">
      {/* Navbar Header */}
      <div className="w-screen h-[60px] bg-gray1 flex items-center fixed top-0 md:left-[300px] z-20 shadow-nav">
        <Bars3Icon
          onClick={() => handleOpenNavChannel()}
          className="w-8 h-8 text-font-white ml-4 mr-6 cursor-pointer md:hidden"
        />

        <h2 className="text-2xl text-font-white font-bold md:pl-4">
          {`FRONT-END ${activeChannel}`}
        </h2>
      </div>
    </nav>
  );
};

export default Navbar;
