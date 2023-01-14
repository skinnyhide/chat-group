import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const InputPassword = ({ name, id, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleEyes = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-gray2 rounded-md w-full flex items-center">
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        id={id}
        placeholder={placeholder}
        required
        className="form-input rounded-md bg-gray2 placeholder:text-font-gray text-font-white border-none w-[85%] focus:ring-0"
      />

      <div className=" cursor-pointer ml-2">
        {showPassword ? (
          <EyeSlashIcon
            onClick={handleEyes}
            className="text-font-white hover:text-font-gray w-6 h-6"
          />
        ) : (
          <EyeIcon
            onClick={handleEyes}
            className="text-font-white hover:text-font-gray w-6 h-6"
          />
        )}
      </div>
    </div>
  );
};

export default InputPassword;
