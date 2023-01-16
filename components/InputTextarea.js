import React from "react";

const InputTextarea = ({ name, id, placeholder, value, onChange }) => {
  return (
    <div className="w-full">
      <textarea
        type="text"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="form-input rounded-md bg-gray2 placeholder:text-font-gray text-font-white border-none w-full h-28 focus:ring-0"
      />
    </div>
  );
};

export default InputTextarea;
