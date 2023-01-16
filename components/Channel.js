import Image from "next/image";
import React from "react";

const Channel = ({ onClick, channel }) => {
  return (
    <div onClick={onClick} className="flex items-center mb-7 cursor-pointer">
      {/* Image Wrapper */}
      <h3 className="rounded-lg text-white font-bold text-xl bg-gray1 w-16 h-12 mr-4 px-2 flex justify-center items-center ">
        {`FE ${channel}`}
      </h3>
      <p className="text-lg w-[80%] truncate text-font-white2 font-medium">
        {`FRONT-END ${channel}`}
      </p>
    </div>
  );
};

export default Channel;
