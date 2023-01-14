import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const InputTextSearch = ({ name, id, placeholder, value, onChange }) => {
  const handleSubmit = e => {
    e.preventDefault();

    alert("Cari channel " + value);
  };

  return (
    <form
      onSubmit={e => handleSubmit(e)}
      className="w-full flex items-center rounded-md bg-gray2"
    >
      <div onClick={e => handleSubmit(e)} className="ml-2">
        <MagnifyingGlassIcon className="text-font-white w-5 h-5 cursor-pointer" />
      </div>

      <input
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="form-input rounded-md bg-gray2 placeholder:text-font-gray text-font-white border-none w-auto focus:ring-0"
      />
    </form>
  );
};

export default InputTextSearch;
