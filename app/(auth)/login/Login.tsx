"use client";

import { loginAction, signUpAction } from "@/app/actions/auth";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { useFormState, useFormStatus } from "react-dom";

const Login = () => {
  const router = useRouter();

  const [state, action] = useFormState(loginAction, undefined);
  const { pending } = useFormStatus();

  if (state?.errors?.password) console.log(state.errors.password);
  return (
    <form
      action={action}
      className="absolute top-1/2  left-1/2 -translate-y-1/2 px-6 -translate-x-1/2"
    >
      <div className="max-w-[800px] gap-10 bg-[#FEFEFE08] items-center py-10 min-h-[280px] rounded-xl  flex justify-between px-7">
        <div className="w-[200px]">
          {/* {type == "modal" && (
            <button
              className="absolute top-[30px] left-[40px]"
              onClick={
                buttonText === "Edit" ? setEditModalActive : setInboxModalActive
              }
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"name
              >
                <path
                  d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                  fill="#E8EAED"
                />
              </svg>
            </button>
          )} */}
          <span className="capitalize text-3xl font-bold block mb-2 text-[#FEFEFE]">
            Log In
          </span>
          <span className="block text-sm  text-[#FEFEFEB2]">
            Log in to your account
          </span>
        </div>
        <div className="space-y-5 w-[300px]">
          <div>
            <label htmlFor="dmail" className="block mb-2 text-[#FEFEFEB2]">
              Enter Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-[#FEFEFE0D] border px-3 rounded-md w-full border-[#FEFEFE33] h-10 focus:outline-none"
              required
            />
            {state?.errors?.email && (
              <p className="text-sm text-red-500"> {state.errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-[#FEFEFEB2]">
              Enter Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="bg-[#FEFEFE0D] px-3 rounded-md border w-full border-[#FEFEFE33] h-10 focus:outline-none"
              required
            />
            {state?.errors?.password && (
              <div className="text-red-500 text-sm pt-2">
                <p>Password must:</p>
                <ul>
                  {state?.errors?.password?.map((error) => (
                    <li key={error}>- {error}</li>
                  ))}
                </ul>
              </div>
            )}
            {state?.message && (
              <p className="text-red-500 text-sm pt-2">{state?.message}</p>
            )}
          </div>
          <button
            // onClick={() => {
            //   action && action();
            //   router.push(path);
            // }}
            disabled={pending}
            type="submit"
            className="bg-[#06D440] block w-full py-2 rounded-md"
          >
            Log In
          </button>
          <span className="block">
            Already have an account?{" "}
            <span className="text-[#06D440] cursor-pointer ml-1">Sign up</span>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Login;
