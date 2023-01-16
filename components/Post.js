// import Image from "next/legacy/image";
import Image from "next/image";
import React from "react";

const Post = ({ thumbImg, name, timestamp, message }) => {
  return (
    <div className="w-full flex justify-between mt-6">
      {/* Thumb Image OR Left */}
      <div className="flex justify-center flex-[0.1]">
        {/* Image Wrapper */}
        <div className="rounded-md overflow-hidden w-12 h-fit mr-4">
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
      <div className="flex-[0.9]">
        {/* Name & Timestamp */}
        <div className="flex items-center text-font-gray mb-4">
          <p className="text-lg font-medium">{name}</p>
          <span className="text-sm ml-6">{timestamp}</span>
        </div>

        {/* Message */}
        <p className="text-font-white text-base w-full">{message}</p>
      </div>
    </div>
  );
};

export default Post;
