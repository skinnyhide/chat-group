// import Image from "next/legacy/image";
import Image from "next/image";
import React from "react";

const Post = ({ thumbImg, name, timestamp, message }) => {
  return (
    <div className="w-full flex mt-6 bg-gray1">
      {/* Thumb Image OR Left */}
      <div className="w-[15%]">
        {/* Image Wrapper */}
        <div className="rounded-md overflow-hidden w-10 h-fit  bg-blue1">
          <Image
            // layout="intrinsic"
            src={thumbImg}
            alt="thumb-img"
            width={500}
            height={500}
          />
        </div>
      </div>

      {/* Post Content OR Right */}
      <div className="w-[85%]">
        {/* Name & Timestamp */}
        <div className="flex items-center text-font-gray mb-4">
          <p className="text-lg font-medium">{name}</p>
          <span className="text-sm ml-6">{timestamp}</span>
        </div>

        {/* Message */}
        <p className="text-font-white text-base w-11/12">{message}</p>
      </div>
    </div>
  );
};

export default Post;
