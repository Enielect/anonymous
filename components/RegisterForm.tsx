"use client";

import React, { FC, ReactNode } from "react";
import Loader from "./Loader";

interface FormType {
  title: string;
  remark: string;
  firstField: ReactNode;
  secondField?: ReactNode;
  actionButton: ReactNode;
}

const RegisterForm: FC<FormType> = ({
  title,
  remark,
  firstField,
  secondField,
  actionButton,
}) => {
  return (
    <div className="absolute top-1/2 left-1/2  -translate-y-1/2 px-6 -translate-x-1/2">
      <div className="md:max-w-[50rem] max-w-[350px] gap-10 bg-[#151515] items-center py-4 sm:py-10 sm:min-h-[280px] rounded-xl  flex justify-between px-7">
        <div className="w-[200px]">
          <span className="capitalize text-lg sm:text-3xl font-bold block mb-2 text-[#FEFEFE]">
            {title}
          </span>
          <span className="block text-xs sm:text-sm text-[#FEFEFEB2]">
            {remark}
          </span>
        </div>
        <div className="space-y-5 w-[300px]">
          {firstField}
          {secondField && secondField}
          {actionButton}
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

type InputProps = {
  label: string;
  formName: string;
};

export function Input({ label, formName }: InputProps) {
  return (
    <div>
      <label
        htmlFor="dmail"
        className="block mb-2 text-sm sm:text-base text-[#FEFEFEB2]"
      >
        {label}
      </label>
      <input
        type={"text"}
        name={formName}
        id={formName}
        className="bg-[#FEFEFE0D] text-white border px-3 rounded-md w-full border-[#FEFEFE33] h-10 focus:outline-none"
        required
      />
    </div>
  );
}

export function ActionButton({
  buttonText,
  pending,
}: {
  buttonText: string;
  pending: boolean;
}) {
  //creating a reusable submit button used all over the project with the same design
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-[#06D440] text-white text-sm sm:text-base flex items-center justify-center gap-4 w-full py-2 rounded-md"
    >
      {pending && <Loader />}
      {buttonText}
    </button>
  );
}
