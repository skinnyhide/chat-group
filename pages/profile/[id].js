import Image from "next/image";
import React, { useState } from "react";
import HeadComp from "../../components/HeadComp";
import InputPassword from "../../components/InputPassword";
import InputText from "../../components/InputText";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProfileDetail = () => {
  const [displayName, setDisplayName] = useState("Shaunna Firth");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Save Profile Button
  const handleSaveProfile = e => {
    e.preventDefault();

    alert(`
    Display Name = ${displayName}
    Username = ${username}
    Password = ${password}
    Confirm Password = ${confirmPassword}
    `);
  };

  return (
    <>
      <HeadComp title={`Profile Detail`} />

      {/* Main Web */}
      <main className="bg-gray1 w-screen min-h-screen pt-16 box-border flex flex-col justify-center items-center relative">
        {/* Header */}
        <div className="fixed top-0 left-0 w-screen h-[60px] px-4 bg-black2 text-font-white flex items-center">
          <Link href="/">
            <ChevronLeftIcon className="w-8 h-8 ml-4 mr-6 cursor-pointer" />
          </Link>

          <h2 className="text-2xl text-font-white font-bold">All Channels</h2>
        </div>

        {/* Form */}
        <form className="w-full p-4 flex flex-col my-8 max-w-xs">
          {/* Image Wrapper */}
          <div className="rounded-md overflow-hidden w-20 h-fit mb-8 self-center cursor-pointer">
            <Image
              src="/assets/image/sticker.webp"
              alt="thumb-img"
              width={500}
              height={500}
              className="profile-bottom"
            />
          </div>

          {/* Display Name */}
          <div className="flex flex-col mb-8">
            <label
              htmlFor="displayName"
              className="text-xl font-medium text-font-white mb-3 ml-1"
            >
              Display Name
            </label>
            <InputText
              name="displayName"
              id="displayName"
              placeholder="Display Name"
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
            />
          </div>

          {/* Username */}
          <div className="flex flex-col mb-8">
            <label
              htmlFor="username"
              className="text-xl font-medium text-font-white mb-3 ml-1"
            >
              Username
            </label>
            <InputText
              name="username"
              id="username"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col mb-8">
            <label
              htmlFor="password"
              className="text-xl font-medium text-font-white mb-3 ml-1"
            >
              Password
            </label>
            <InputPassword
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col mb-14">
            <label
              htmlFor="confirmPassword"
              className="text-xl font-medium text-font-white mb-3 ml-1"
            >
              Confirm Password
            </label>
            <InputPassword
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            onClick={e => handleSaveProfile(e)}
            className="w-1/2 h-12 mx-auto bg-blue-600 text-font-white text-xl rounded-md flex justify-center items-center cursor-pointer hover:bg-blue-700 transition"
          >
            Save Profile
          </button>
        </form>
      </main>
    </>
  );
};

export default ProfileDetail;
