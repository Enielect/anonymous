"use client";

import { loginAction } from "@/app/actions/auth";
import Link from "next/link";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";

const Login = () => {
  const [state, action] = useFormState(loginAction, undefined);

  if (state?.errors?.password) console.log(state.errors.password);
  return (
    <form
      action={action}
      className="absolute top-1/2  left-1/2 -translate-y-1/2 px-6 -translate-x-1/2"
    >
      <div className="md:max-w-[50rem] max-w-[350px] gap-10 bg-[#FEFEFE08] items-center py-4 sm:py-10 min-h-[280px] rounded-xl  flex justify-between px-7">
        <div className="w-[200px]">
          <span className="capitalize text-2xl sm:text-3xl font-bold block mb-2 text-[#FEFEFE]">
            Log In
          </span>
          <span className="block sm:text-sm text-xs  text-[#FEFEFEB2]">
            Log in to your account
          </span>
        </div>
        <div className="space-y-5 w-[300px]">
          <div>
            <label htmlFor="email" className="block mb-2 text-xs sm:text-base text-[#FEFEFEB2]">
              Enter Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-[#FEFEFE0D] text-white border text-sm sm:text-base px-3 rounded-md w-full border-[#FEFEFE33] h-8 sm:h-10 focus:outline-none"
              required
            />
            {state?.errors?.email && (
              <p className="text-sm text-red-500"> {state.errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-xs sm:text-base text-[#FEFEFEB2]">
              Enter Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="bg-[#FEFEFE0D] text-white px-3 rounded-md border text-sm sm:text-base w-full border-[#FEFEFE33] h-8 sm:h-10 focus:outline-none"
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
          <LoginButton />

          <span className="block text-xs text-white sm:text-base">
            Already have an account?{" "}
            <Link href="/create" className="text-[#06D440] cursor-pointer ml-1">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-[#06D440] text-white text-sm sm:text-base py-1 block w-full sm:py-2 rounded-md"
    >
      {pending ? "Processing..." : "Log In"}
    </button>
  );
}

export default Login;
