import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  activeChannelState,
  isModalProfileMenuState,
  isNavAllChannelOpenState,
  isNavChannelOpenState,
} from "../utils/recoil";
import Member from "./Member";
import ModalProfileMenu from "./ModalProfileMenu";

const NavChannel = () => {
  const navChannelRef = useRef(null);
  const [activeChannel, setActiveChannel] = useRecoilState(activeChannelState);
  const [isNavChannelOpen, setIsNavChannelOpen] = useRecoilState(
    isNavChannelOpenState
  );
  const [isNavAllChannelOpen, setIsNavAllChannelOpen] = useRecoilState(
    isNavAllChannelOpenState
  );
  const setIsModalProfileMenu = useSetRecoilState(isModalProfileMenuState);

  useEffect(() => {
    if (isNavChannelOpen === false) {
      navChannelRef.current.classList.add("-translate-x-[100%]");
    }
    if (isNavChannelOpen === true) {
      navChannelRef.current.classList.remove("-translate-x-[100%]");
    }
  }, [isNavChannelOpen]);

  // Open Nav All Channels
  const handleOpenAllChannels = () => {
    setIsNavChannelOpen(false);
    setIsNavAllChannelOpen(true);
  };

  // Close Nav Channel
  const handleCloseNavChannel = () => {
    setIsNavChannelOpen(false);
  };

  // Open Modal Profile Menu Click Event
  const handleOpenModalProfileMenu = () => {
    setIsModalProfileMenu(true);
  };

  return (
    <div>
      {/* Header Desktop */}
      <div className="w-5/6 md:w-[300px] h-[60px] bg-black2 hidden md:flex items-center fixed left-0 top-0 shadow-nav z-40">
        <ChevronLeftIcon
          onClick={handleOpenAllChannels}
          className="w-8 h-8 text-font-white ml-4 mr-6 cursor-pointer"
        />

        <h2 className="text-2xl text-font-white font-bold">All Channels</h2>
      </div>

      {/* Nav Channel Content */}
      <div
        ref={navChannelRef}
        className="fixed left-0 top-0 bottom-0 w-5/6 md:w-[300px] h-screen overflow-y-auto py-20 bg-black2 z-30 transition -translate-x-[100%] md:translate-x-0"
      >
        {/* Header Mobile */}
        <div className="w-5/6 md:w-[300px] h-[60px] bg-black2 md:hidden flex items-center fixed left-0 top-0 shadow-nav">
          <ChevronLeftIcon
            onClick={handleOpenAllChannels}
            className="w-8 h-8 text-font-white ml-4 mr-6 cursor-pointer"
          />

          <h2 className="text-2xl text-font-white font-bold">All Channels</h2>
        </div>

        {/* Close Nav Channel */}
        <div className="fixed md:hidden top-3 right-4 w-9 h-9 flex justify-center items-center bg-black2 rounded-md cursor-pointer">
          <XMarkIcon
            onClick={handleCloseNavChannel}
            className="w-7 h-7 text-font-white"
          />
        </div>

        {/* Channel Description */}
        <div className="w-full pl-10 pr-8">
          <h3 className="text-font-white font-bold text-xl mb-4">
            {`FRONT-END ${activeChannel}`}
          </h3>

          <p className="text-font-white text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            incidunt quam! Dolorum laboriosam sequi atque.
          </p>
        </div>

        {/* Members Channel */}
        <div className="w-full pl-10 pr-8 mt-10 text-white">
          <h3 className="text-font-white font-bold text-xl mb-5">Members</h3>

          {/* Members */}
          {[...Array(10).keys()].map((member, index) => (
            <Member key={index} />
          ))}
        </div>

        {/* Profile Mobile */}
        <div
          onClick={handleOpenModalProfileMenu}
          className="w-5/6 md:w-[300px] h-[75px] bg-black1 flex items-center md:hidden fixed bottom-0 pl-10 pr-8 cursor-pointer profile-bottom"
        >
          {/* Image Wrapper */}
          <div className="rounded-md overflow-hidden w-12 h-fit mr-4">
            <Image
              src="/assets/image/sticker.webp"
              alt="thumb-img"
              width={500}
              height={500}
              className="profile-bottom"
            />
          </div>

          <p className="text-lg text-font-gray font-medium profile-bottom">
            Shaunna Firth
          </p>

          <ModalProfileMenu />
        </div>
      </div>

      {/* Profile Desktop */}
      <div
        onClick={handleOpenModalProfileMenu}
        className="w-5/6 md:w-[300px] h-[75px] bg-black1 hidden md:flex items-center fixed bottom-0 pl-10 pr-8 cursor-pointer profile-bottom z-40"
      >
        {/* Image Wrapper */}
        <div className="rounded-md overflow-hidden w-12 h-fit mr-4">
          <Image
            src="/assets/image/sticker.webp"
            alt="thumb-img"
            width={500}
            height={500}
            className="profile-bottom"
          />
        </div>

        <p className="text-lg text-font-gray font-medium profile-bottom">
          Shaunna Firth
        </p>

        <ModalProfileMenu />
      </div>
    </div>
  );
};

export default NavChannel;
