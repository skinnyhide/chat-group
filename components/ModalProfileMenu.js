import {
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  isModalAddChannelState,
  isModalProfileMenuState,
  isNavAllChannelOpenState,
  isNavChannelOpenState,
} from "../utils/recoil";

const ModalProfileMenu = () => {
  const [isModalProfileMenu, setIsModalProfileMenu] = useRecoilState(
    isModalProfileMenuState
  );
  const setIsNavChannelOpen = useSetRecoilState(isNavChannelOpenState);
  const setIsNavAllChannelOpen = useSetRecoilState(isNavAllChannelOpenState);
  const setIsModalAddChannel = useSetRecoilState(isModalAddChannelState);

  useEffect(() => {
    document.addEventListener("click", e => {
      if (
        !e.target.classList.contains("profile-menu") &&
        !e.target.classList.contains("profile-bottom")
      ) {
        setIsModalProfileMenu(false);
      }
      // console.log(e.target.classList.contains("profile-menu"));
    });
  }, []);

  // Close All Modal / Section In Home Page
  const handleCloseAllModalAndNav = () => {
    setIsModalProfileMenu(false);
    setIsNavChannelOpen(false);
    setIsNavAllChannelOpen(false);
    setIsModalAddChannel(false);
  };

  return (
    <div
      className={`w-48 px-4 absolute -top-28 right-6 bg-gray1 text-font-white rounded-xl ${
        isModalProfileMenu ? "flex" : "hidden"
      } flex-col justify-around profile-menu`}
    >
      {/* Profile Link Menu */}
      <Link href={`/profile/Shaunna Firth`}>
        <div
          onClick={handleCloseAllModalAndNav}
          className="rounded-md flex items-center pl-2 py-[6px] my-3 hover:bg-gray2 transition cursor-pointer profile-menu"
        >
          <UserCircleIcon className="w-7 h-7 mr-4 profile-menu" />
          <span className="text-base profile-menu">My Profile</span>
        </div>
      </Link>

      {/* Line */}
      <div className="w-full h-[1px] bg-gray-600 profile-menu" />

      {/* Logout Link Menu */}
      <div
        onClick={() => alert("Logout")}
        className="rounded-md flex items-center pl-2 py-[6px] my-3 text-red1 hover:bg-gray2 transition cursor-pointer profile-menu"
      >
        <ArrowRightOnRectangleIcon className="w-7 h-7 mr-4 profile-menu" />
        <span className="text-base profile-menu">Logout</span>
      </div>
    </div>
  );
};

export default ModalProfileMenu;
