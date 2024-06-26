import React from "react";

const RegisterForm = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 px-6 -translate-x-1/2">
      <div className="max-w-[800px]  gap-24 bg-[#FEFEFE08] items-center py-8 h-[240px] rounded-xl  flex justify-between px-7">
        <div>
          <span className="capitalize text-3xl font-bold block mb-2 text-[#FEFEFE]">
            Create account
          </span>
          <span className="block text-sm text-[#FEFEFEB2]">
            join our platform today
          </span>
        </div>
        <div className="space-y-5">
          <div>
            <label htmlFor="dmail" className="block mb-2 text-[#FEFEFEB2]">
              Enter Email
            </label>
            <input
              type="email"
              id="dmail"
              className="bg-[#FEFEFE0D] border px-3 rounded-md border-[#FEFEFE33] h-10"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-[#FEFEFEB2]">
              Enter Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-[#FEFEFE0D] px-3 rounded-md border border-[#FEFEFE33] h-10"
            />
          </div>
          <button className="bg-[#06D440] block w-full py-2 rounded-md">
            Sign Up
          </button>
          <span className="block">
            Already have an account?{" "}
            <span className="text-[#06D440] cursor-pointer ml-1">Log in </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
