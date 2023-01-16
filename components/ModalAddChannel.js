import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { isModalAddChannelState } from "../utils/recoil";
import InputText from "./InputText";
import InputTextarea from "./InputTextarea";

const ModalAddChannel = () => {
  const [channelName, setChannelName] = useState("");
  const [channelDesc, setChannelDesc] = useState("");
  const [isModalAddChannel, setisModalAddChannel] = useRecoilState(
    isModalAddChannelState
  );

  // Save Button Click Event
  const handleSave = e => {
    e.preventDefault();
    if (channelName === "" || channelDesc === "") {
      return alert("Tidak Boleh Kosong");
    }

    alert(`
    Nama = ${channelName}
    Deskripsi = ${channelDesc}
    `);
  };

  // Cancel Button Click Event
  const handleCancel = e => {
    e.preventDefault();

    setChannelName("");
    setChannelDesc("");

    setisModalAddChannel(false);
  };

  return (
    <form
      onSubmit={e => handleSubmit(e)}
      className={`${
        isModalAddChannel ? "block" : "hidden"
      } bg-black2 rounded-2xl w-11/12 max-w-[500px] fixed modal-add-channel p-4 z-40`}
    >
      <h4 className="font-bold text-font-white text-xl mb-6">NEW CHANNEL</h4>

      {/* Channel Name */}
      <InputText
        name="addChannelName"
        placeholder="Channel Name"
        value={channelName}
        onChange={e => setChannelName(e.target.value)}
      />

      {/* Kasih jarak aja */}
      <div className="my-6" />

      {/* Channel Description */}
      <InputTextarea
        name="addChannelDesc"
        placeholder="Channel Description"
        value={channelDesc}
        onChange={e => setChannelDesc(e.target.value)}
      />

      {/* Button Save & Cancel */}
      <div className="flex justify-end items-center mt-6">
        <button
          type="submit"
          onClick={e => handleCancel(e)}
          className="text-font-white rounded-md bg-red1 text-base w-16 h-8 hover:bg-red2 transition cursor-pointer mr-4"
        >
          Cancel
        </button>

        <button
          type="submit"
          onClick={e => handleSave(e)}
          className="text-font-white rounded-md bg-blue1 text-base w-16 h-8 hover:bg-blue-600 transition cursor-pointer"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ModalAddChannel;
