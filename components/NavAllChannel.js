import { PlusSmallIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  activeChannelState,
  isModalAddChannelState,
  isModalProfileMenuState,
  isNavAllChannelOpenState,
  isNavChannelOpenState,
} from "../utils/recoil";
import Channel from "./Channel";
import InputTextSearch from "./InputTextSearch";
import ModalProfileMenu from "./ModalProfileMenu";

const NavAllChannel = () => {
  const [inputSearchChannel, setInputSearchChannel] = useState("");
  const navAllChannelRef = useRef(null);
  const [isNavChannelOpen, setIsNavChannelOpen] = useRecoilState(
    isNavChannelOpenState
  );
  const [isNavAllChannelOpen, setIsNavAllChannelOpen] = useRecoilState(
    isNavAllChannelOpenState
  );
  const setIsModalAddChannel = useSetRecoilState(isModalAddChannelState);
  const setActiveChannel = useSetRecoilState(activeChannelState);
  const setIsModalProfileMenu = useSetRecoilState(isModalProfileMenuState);

  useEffect(() => {
    if (isNavAllChannelOpen === false) {
      navAllChannelRef.current.classList.add("-translate-x-[100%]");
    }
    if (isNavAllChannelOpen === true) {
      navAllChannelRef.current.classList.remove("-translate-x-[100%]");
    }
  }, [isNavAllChannelOpen]);

  // Go To The Channel Function
  const handleGoToChannel = channel => {
    setIsNavAllChannelOpen(false);
    setIsNavChannelOpen(true);
    setActiveChannel(channel);
  };

  // Open Modal Add Channel
  const handleOpenModalAddChannel = () => {
    setIsModalAddChannel(true);
  };

  // Open Modal Profile Menu Click Event
  const handleOpenModalProfileMenu = () => {
    setIsModalProfileMenu(true);
  };

  return (
    <div
      ref={navAllChannelRef}
      className={`fixed left-0 top-0 bottom-0 w-5/6 md:w-[300px] h-screen overflow-y-auto  py-20 bg-black2 z-30  transition -translate-x-[100%] `}
    >
      {/* Header */}
      <div className="w-5/6 md:w-[300px] h-[60px] pl-10 pr-8 bg-black2 flex justify-between items-center fixed top-0 shadow-nav">
        <h2 className="text-2xl text-font-white font-bold">Channel</h2>

        <div
          onClick={handleOpenModalAddChannel}
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
      <div
        onClick={handleOpenModalProfileMenu}
        className="w-5/6 md:w-[300px] h-[75px] bg-black1 flex items-center fixed bottom-0 pl-10 pr-8 cursor-pointer profile-bottom"
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

export default NavAllChannel;
