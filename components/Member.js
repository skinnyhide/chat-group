import Image from "next/image";
import React from "react";

const Member = ({ onClick }) => {
  return (
    <div onClick={onClick} className="flex items-center mb-7 cursor-pointer">
      {/* Image Wrapper */}
      <div className="rounded-md overflow-hidden w-12 h-fit mr-4">
        <Image
          src="/assets/image/dilan-cepmek.jpg"
          alt="thumb-img"
          width={500}
          height={500}
        />
      </div>
      <p className="text-lg text-font-gray font-medium">Uchiha Dilan</p>
    </div>
  );
};

export default Member;
