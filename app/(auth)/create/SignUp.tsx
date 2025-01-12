"use client";

import { signUpAction } from "@/app/actions/auth";
import Loader from "@/components/Loader";
import Link from "next/link";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";

const SignUp = () => {
  const [state, action] = useFormState(signUpAction, undefined);

  if (state?.errors?.password) console.log(state.errors.password);
  return (
    <form
      action={action}
      className="absolute top-1/2  left-1/2 -translate-y-1/2 px-6 -translate-x-1/2"
    >
      <div className="md:max-w-[50rem] max-w-[350px] gap-10 bg-[#FEFEFE08] items-center py-10 min-h-[280px] rounded-xl  flex flex-col md:flex-row mx-3 sm:mx-0 justify-between px-7">
        <div className="w-[200px]">
          <span className="capitalize text-lg sm:text-3xl text-center md:text-justify font-bold block mb-2 text-[#FEFEFE]">
            Create account
          </span>
          <span className="block text-xs sm:text-sm text-center md:text-justify  text-[#FEFEFEB2]">
            join our platform today
          </span>
        </div>
        <div className="space-y-5 w-[300px]">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm sm:text-base text-[#FEFEFEB2]"
            >
              username
            </label>
            <input
              type="username"
              name="username"
              id="username"
              className="bg-[#FEFEFE0D] text-sm sm:text-base text-white border px-3 rounded-md w-full border-[#FEFEFE33] h-8 sm:h-10 focus:outline-none"
              required
            />
            {state?.errors?.username && (
              <p className="text-sm text-red-500"> {state.errors.username}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm sm:text-base mb-2 text-[#FEFEFEB2]"
            >
              Enter Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-[#FEFEFE0D] text-white border px-3 rounded-md text-sm sm:text-base w-full border-[#FEFEFE33] h-8 sm:h-10 focus:outline-none"
              required
            />
            {state?.errors?.email && (
              <p className="text-sm text-red-500"> {state.errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm sm:text-base mb-2 text-[#FEFEFEB2]"
            >
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
          </div>
          <SignUpButton />
          <span className="block text-white text-sm md:text-base">
            Already Have An Acccount?{" "}
            <Link href="/login" className="text-[#06D440] cursor-pointer ml-1">
              Log in
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
};

function SignUpButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-[#06D440] text-white text-sm sm:text-base flex items-center justify-center gap-4 w-full py-2 rounded-md"
    >
      {pending && <Loader />}
      {pending ? "Registering..." : "Sign Up"}
    </button>
  );
}

export default SignUp;
