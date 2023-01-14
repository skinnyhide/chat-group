import Image from "next/image";
import React from "react";

const Channel = () => {
  return (
    <div className="flex items-center mb-7 cursor-pointer">
      {/* Image Wrapper */}
      <h3 className="rounded-lg text-white font-bold text-xl bg-gray1 w-12 h-12 mr-4 flex justify-center items-center">
        FE
      </h3>
      <p className="text-lg text-font-white2 font-medium">
        FRONT-END DEVELOPERS
      </p>
    </div>
  );
};

export default Channel;
