import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import HeadComp from "../components/HeadComp";
import Navbar from "../components/Navbar";
import InputTextSend from "../components/InputTextSend";
import Post from "../components/Post";
import Image from "next/image";
import Member from "../components/Member";
import {
  ChevronLeftIcon,
  PlusSmallIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { activeChannelState, isModalAddChannelState } from "../utils/recoil";
import { useRecoilState } from "recoil";
import Channel from "../components/Channel";
import InputTextSearch from "../components/InputTextSearch";
import ModalAddChannel from "../components/ModalAddChannel";
import NavChannel from "../components/NavChannel";
import NavAllChannel from "../components/NavAllChannel";
// import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const router = useRouter();
  const navDesktopChannelRef = useRef(null);
  const navDesktopAllChannelsRef = useRef(null);
  const [activeChannel, setActiveChannel] = useRecoilState(activeChannelState);
  const [isModalAddChannel, setIsModalAddChannel] = useRecoilState(
    isModalAddChannelState
  );
  const [inputSearchChannel, setInputSearchChannel] = useState("");

  // Data Dummy
  let dataPosts = [
    {
      thumbImg: "/assets/image/sticker.webp",
      name: "Shaunna Firth",
      timestamp: "today at 1:29 PM",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. accusantium soluta maiores, ducimus expedita sequi non nesciunt voluptate, enim reiciendis officiis minus? Labore neque dignissimos earum possimus amet, officiis nulla.",
    },
    {
      thumbImg: "/assets/image/sarutobi.jpeg",
      name: "Sarutobi Bagas",
      timestamp: "today at 1:29 PM",
      message:
        "Siapa gerangan yang bilang gue KORUPSI  duit anak yatim, SIAPA yang bilang sini gue BOGEM !!!",
    },
    {
      thumbImg: "/assets/image/dilan-cepmek.png",
      name: "Uchiha Dilan",
      timestamp: "today at 1:29 PM",
      message:
        "Kamu nanya, Kamu bertanya - tanya, Kamu nanya model potongan rambut aku apa, sini biar aku kasih tau ya, Ini tuh potongan model CEPMEK",
    },
  ];

  // useEffect(() => {
  //   router.push("/auth/login");
  // }, []);

  // See All Channels List
  const handleOpenAllChannels = () => {
    navDesktopChannelRef.current.classList.toggle("-translate-x-[100%]");
    navDesktopAllChannelsRef.current.classList.toggle("-translate-x-[100%]");
  };

  // Go To The Channel Function
  const handleGoToChannel = channel => {
    navDesktopAllChannelsRef.current.classList.toggle("-translate-x-[100%]");
    navDesktopChannelRef.current.classList.toggle("-translate-x-[100%]");
    setActiveChannel(channel);
  };

  // Open Modal Add Channel
  const handleOpenModalAddChannel = () => {
    setIsModalAddChannel(true);
  };

  return (
    <>
      <HeadComp title="Home" />

      {/* Main Web */}
      <main className="bg-gray1 w-screen min-h-screen box-border md:relative">
        {/* Navbar */}
        <Navbar />

        {/* Modal Add New Channel */}
        <ModalAddChannel />

        {/* Nav Channel */}
        <NavChannel />

        {/* Nav Mobile All Channels */}
        <NavAllChannel />

        {/* All Posts */}
        <div className="pt-16 pb-28 md:pl-[320px] px-4">
          {dataPosts.map((post, index) => (
            <Post
              key={index}
              thumbImg={post.thumbImg}
              name={post.name}
              timestamp={post.timestamp}
              message={post.message}
            />
          ))}
          {dataPosts.map((post, index) => (
            <Post
              key={index}
              thumbImg={post.thumbImg}
              name={post.name}
              timestamp={post.timestamp}
              message={post.message}
            />
          ))}
          {dataPosts.map((post, index) => (
            <Post
              key={index}
              thumbImg={post.thumbImg}
              name={post.name}
              timestamp={post.timestamp}
              message={post.message}
            />
          ))}
          {dataPosts.map((post, index) => (
            <Post
              key={index}
              thumbImg={post.thumbImg}
              name={post.name}
              timestamp={post.timestamp}
              message={post.message}
            />
          ))}
        </div>

        {/* Input Chat */}
        <InputTextSend
          name="inputMessage"
          id="inputMessage"
          placeholder="Type a message here"
        />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  // return {
  //   redirect: {
  //     destination: "/auth/login",
  //     permanent: false,
  //   },
  // };

  return {
    props: {},
  };
}
