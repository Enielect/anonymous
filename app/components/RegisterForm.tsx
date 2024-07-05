"use client";

import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface FormType {
  title: string;
  remark: string;
  firstLabel: string;
  secondLabel?: string;
  buttonText: string;
  action?: () => void;
  path: string;
}

const RegisterForm: FC<FormType> = ({
  title,
  remark,
  firstLabel,
  secondLabel,
  buttonText,
  action,
  path,
}) => {
  const router = useRouter();
  return (
    <div className="absolute top-1/2  left-1/2 -translate-y-1/2 px-6 -translate-x-1/2">
      <div className="max-w-[800px] gap-10 bg-[#FEFEFE08] items-center py-10 h-[280px] rounded-xl  flex justify-between px-7">
        <div className="w-[200px]">
          <span className="capitalize text-3xl font-bold block mb-2 text-[#FEFEFE]">
            {/* Create account */}
            {title}
          </span>
          <span className="block text-sm  text-[#FEFEFEB2]">
            {/* join our platform today */}
            {remark}
          </span>
        </div>
        <div className="space-y-5 w-[300px]">
          <div>
            <label htmlFor="dmail" className="block mb-2 text-[#FEFEFEB2]">
              {/* Enter Email */}
              {firstLabel}
            </label>
            <input
              type="email"
              id="dmail"
              className="bg-[#FEFEFE0D] border px-3 rounded-md w-full border-[#FEFEFE33] h-10 focus:outline-none"
            />
          </div>
          {secondLabel && (
            <div>
              <label htmlFor="password" className="block mb-2 text-[#FEFEFEB2]">
                {/* Enter Password */}
                {secondLabel}
              </label>
              <input
                type="password"
                id="password"
                className="bg-[#FEFEFE0D] px-3 rounded-md border border-[#FEFEFE33] h-10 focus:outline-none"
              />
            </div>
          )}
          <button
            onClick={() => {
              action && action();
              router.push(path);
            }}
            className="bg-[#06D440] block w-full py-2 rounded-md"
          >
            {buttonText}
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
