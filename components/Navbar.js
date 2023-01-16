import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/solid";
import Member from "./Member";
import InputTextSearch from "./InputTextSearch";
import Channel from "./Channel";
import { useRecoilState } from "recoil";
import { activeChannelState } from "../utils/recoil";

const Navbar = () => {
  const navMobileRef = useRef(null);
  const navMobileAllChannelsRef = useRef(null);
  const [inputSearchChannel, setInputSearchChannel] = useState("");
  const [activeChannel, setActiveChannel] = useRecoilState(activeChannelState);

  // Open Nav Mobile
  const handleOpenNavMobile = () => {
    navMobileRef.current.classList.toggle("-translate-x-[100%]");
  };

  // See All Channels List
  const handleOpenAllChannels = () => {
    navMobileRef.current.classList.toggle("-translate-x-[100%]");
    navMobileAllChannelsRef.current.classList.toggle("-translate-x-[100%]");
  };

  // Go To The Channel Function
  const handleGoToChannel = channel => {
    navMobileAllChannelsRef.current.classList.toggle("-translate-x-[100%]");
    navMobileRef.current.classList.toggle("-translate-x-[100%]");
    setActiveChannel(channel);
  };

  return (
    <nav className="relative">
      {/* Navbar Header */}
      <div className="w-screen h-[60px] bg-gray1 flex items-center fixed top-0 md:left-[300px] z-20 shadow-nav">
        <Bars3Icon
          onClick={() => handleOpenNavMobile()}
          className="w-8 h-8 text-font-white ml-4 mr-6 cursor-pointer"
        />

        <h2 className="text-2xl text-font-white font-bold">
          {`FRONT-END ${activeChannel}`}
        </h2>
      </div>

      {/* Nav Mobile Channel */}
      <div
        ref={navMobileRef}
        className="absolute left-0 top-0 bottom-0 w-5/6 h-screen overflow-y-auto  py-20 bg-black2 z-30  transition -translate-x-[100%]"
      >
        {/* Header */}
        <div className="w-5/6 h-[60px] bg-black2 flex items-center fixed top-0 shadow-nav">
          <ChevronLeftIcon
            onClick={handleOpenAllChannels}
            className="w-8 h-8 text-font-white ml-4 mr-6 cursor-pointer"
          />

          <h2 className="text-2xl text-font-white font-bold">All Channels</h2>
        </div>

        {/* Close Nav Mobile */}
        <div className="fixed top-3 right-4 w-9 h-9 flex justify-center items-center bg-black2 rounded-md cursor-pointer">
          <XMarkIcon
            onClick={() => handleOpenNavMobile()}
            className="w-7 h-7 text-font-white"
          />
        </div>

        {/* Channerl Description */}
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

        {/* Profile */}
        <div className="w-5/6 h-[75px] bg-black1 flex items-center fixed bottom-0 pl-10 pr-8">
          {/* Image Wrapper */}
          <div className="rounded-md overflow-hidden w-12 h-fit mr-4">
            <Image
              src="/assets/image/sticker.webp"
              alt="thumb-img"
              width={500}
              height={500}
            />
          </div>

          <p className="text-lg text-font-gray font-medium">Shaunna Firth</p>
        </div>
      </div>

      {/* Nav Mobile All Channels */}
      <div
        ref={navMobileAllChannelsRef}
        className="absolute left-0 top-0 bottom-0 w-5/6 h-screen overflow-y-auto  py-20 bg-black2 z-30  transition -translate-x-[100%]"
      >
        {/* Header */}
        <div className="w-5/6 h-[60px] pl-10 pr-8 bg-black2 flex justify-between items-center fixed top-0 shadow-nav">
          <h2 className="text-2xl text-font-white font-bold">Channel</h2>

          <div
            onClick={() => alert("Fungsi Tambah Channel Nanti")}
            className="bg-gray1 w-9 h-9 rounded-md cursor-pointer flex justify-center items-center"
          >
            <PlusSmallIcon className="w-7 h-7 text-font-white" />
          </div>
        </div>

        {/* Input Search Channel */}
        <div className="w-full pl-10 pr-8">
          <InputTextSearch
            name="inputSearchChannel"
            placeholder="search"
            value={inputSearchChannel}
            onChange={e => {
              setInputSearchChannel(e.target.value);
              console.log(inputSearchChannel);
            }}
          />
        </div>

        {/* Members Channel */}
        <div className="w-full pl-10 pr-8 mt-10 text-white">
          {/* Members */}
          {[...Array(10).keys()].map((channel, index) => (
            <Channel
              key={index}
              onClick={() => handleGoToChannel(channel)}
              channel={channel}
            />
          ))}
        </div>

        {/* Profile */}
        <div className="w-5/6 h-[75px] bg-black1 flex items-center fixed bottom-0 pl-10 pr-8">
          {/* Image Wrapper */}
          <div className="rounded-md overflow-hidden w-12 h-fit mr-4">
            <Image
              src="/assets/image/sticker.webp"
              alt="thumb-img"
              width={500}
              height={500}
            />
          </div>

          <p className="text-lg text-font-gray font-medium">Shaunna Firth</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
