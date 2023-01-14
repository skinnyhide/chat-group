import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const InputTextSend = ({ name, id, placeholder }) => {
  return (
    <div className="w-full flex items-center fixed bottom-4 px-4 z-20">
      {/* Input Message */}
      <input
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        required
        className="form-input rounded-none bg-gray2 placeholder:text-font-gray text-font-white border-none  focus:ring-0 w-[90%] h-12 rounded-l-md"
      />

      {/* Send Button */}
      <div className="w-auto h-12 pr-3 bg-gray2 flex justify-end items-center rounded-r-md ">
        <PaperAirplaneIcon className="w-9 h-9 bg-blue1 hover:bg-blue-600 transition text-font-white p-2 rounded-md cursor-pointer " />
      </div>
    </div>
  );
};

export default InputTextSend;
