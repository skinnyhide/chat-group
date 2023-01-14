import React from "react";

const InputText = ({ name, id, placeholder }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        required
        className="form-input rounded-md bg-gray2 placeholder:text-font-gray text-font-white border-none w-full focus:ring-0"
      />
    </div>
  );
};

export default InputText;
