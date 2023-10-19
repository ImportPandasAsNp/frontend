import React from "react";

const Register = () => {
  return (
    <>
      <div className=" w-full flex flex-col gap-2 tracking-wider">
        <label className="text-md text-white">Username</label>
        <input
          className="w-full  h-10  bg-gray-700 rounded-md px-4 text-white text-base focus:outline-none"
          placeholder="Enter your username..."
          type="username"
        />
      </div>
      <div className=" w-full flex flex-col gap-2 tracking-wider">
        <label className="text-md text-white">Email</label>
        <input
          className="w-full  h-10  bg-gray-700 rounded-md px-4 text-white text-base focus:outline-none"
          placeholder="Enter your email..."
          type="email"
        />
      </div>
      <div className=" w-full flex flex-col gap-2 tracking-wider">
        <label className="text-md text-white">Password</label>
        <input
          className="w-full  h-10  bg-gray-700 rounded-md px-4 text-white text-base focus:outline-none"
          placeholder="Enter your password..."
          type="password"
        />
      </div>
      <button className="p-4 py-1 mt-4 text-white rounded-md font-base text-center w-full bg-blue-600 hover:bg-blue-800 cursor-pointer">
        Register
      </button>
    </>
  );
};

export default Register;
