import React, { useEffect } from "react";
import { useRouter } from "next/router";
import HeadComp from "../components/HeadComp";
import Navbar from "../components/Navbar";
import InputTextSend from "../components/InputTextSend";
import Post from "../components/Post";
// import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const router = useRouter();
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
        "Siapa gerangan yang bilang gue KORUPSI duit anak yatim, SIAPA yang bilang sini gue BOGEM !!!",
    },
    {
      thumbImg: "/assets/image/dilan-cepmek.jpg",
      name: "Uchiha Dilan",
      timestamp: "today at 1:29 PM",
      message:
        "Kamu nanya, Kamu bertanya - tanya, Kamu nanya model potongan rambut aku apa, sini biar aku kasih tau ya, Ini tuh potongan model CEPMEK",
    },
  ];

  // useEffect(() => {
  //   router.push("/auth/login");
  // }, []);

  return (
    <>
      <HeadComp title="Home" />

      {/* Main WEb */}
      <main className="bg-gray1 w-screen min-h-screen box-border relative">
        {/* Navbar */}
        <Navbar />

        {/* All Posts */}
        <div className="w-full pt-16 pb-28 px-4">
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
