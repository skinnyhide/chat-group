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
import { activeChannelState } from "../utils/recoil";
import { useRecoilState } from "recoil";
import Channel from "../components/Channel";
import InputTextSearch from "../components/InputTextSearch";
// import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const router = useRouter();
  const navDesktopChannelRef = useRef(null);
  const navDesktopAllChannelsRef = useRef(null);
  const [activeChannel, setActiveChannel] = useRecoilState(activeChannelState);
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

  return (
    <>
      <HeadComp title="Home" />

      {/* Main WEb */}
      <main className="bg-gray1 w-screen min-h-screen box-border md:flex relative">
        {/* Navbar */}
        <Navbar />

        {/* Nav Desktop Channel */}
        <div
          ref={navDesktopChannelRef}
          className="hidden md:block fixed w-[300px] h-screen overflow-y-auto  py-20 bg-black2 z-30  transition"
        >
          {/* Header */}
          <div className="w-[300px] h-[60px] bg-black2 flex items-center fixed top-0 shadow-nav">
            <ChevronLeftIcon
              onClick={handleOpenAllChannels}
              className="w-8 h-8 text-font-white ml-4 mr-6 cursor-pointer"
            />

            <h2 className="text-2xl text-font-white font-bold">All Channels</h2>
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

          {/* Profile */}
          <div className="w-[300px] h-[75px] bg-black1 flex items-center fixed bottom-0 pl-10 pr-8">
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
          ref={navDesktopAllChannelsRef}
          className="hidden md:block fixed left-0 top-0 bottom-0 w-[300px] h-screen overflow-y-auto  py-20 bg-black2 z-30  transition -translate-x-[100%]"
        >
          {/* Header */}
          <div className="w-[300px] h-[60px] pl-10 pr-8 bg-black2 flex justify-between items-center fixed top-0 shadow-nav">
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
          <div className="w-[300px] h-[75px] bg-black1 flex items-center fixed bottom-0 pl-10 pr-8">
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
