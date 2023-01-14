import React from "react";
import Link from "next/link";
import HeadComp from "../../components/HeadComp";
import InputText from "../../components/InputText";
import InputPassword from "../../components/InputPassword";

const Register = () => {
  // Handle Submit Register
  const handleSubmit = e => {
    e.preventDefault();

    alert("Register Belum Ada!");
  };

  return (
    <>
      <HeadComp title="Register" />

      {/* Main Web */}
      <main className="bg-black2 w-screen h-screen box-border flex flex-col justify-center items-center">
        {/* Title */}
        <h2 className="text-5xl text-font-white text-center">Register</h2>

        {/* Form */}
        <form className="w-full p-4 flex flex-col my-8 max-w-xs">
          {/* Username */}
          <div className="flex flex-col mb-8">
            <label
              htmlFor="username"
              className="text-xl font-medium text-font-white mb-3 ml-1"
            >
              Username
            </label>
            <InputText name="username" id="username" placeholder="Username" />
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
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            onClick={e => handleSubmit(e)}
            className="w-1/2 h-10 mx-auto bg-blue-600 text-font-white text-xl rounded-md flex justify-center items-center cursor-pointer hover:bg-blue-700 transition"
          >
            Sign up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-font-white">
          Already have an account ?{" "}
          <span className="text-blue1 ml-2">
            <Link href="/auth/login">Login</Link>
          </span>
        </p>
      </main>
    </>
  );
};

export default Register;
