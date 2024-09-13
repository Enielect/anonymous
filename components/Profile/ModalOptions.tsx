"use client";

import {
  editProfileAction,
  editUserPasswordAction,
} from "@/app/actions/profile";
import { useFormState, useFormStatus } from "react-dom";
import { ProfileInput } from "./ProfileInput";
import RegisterForm, { ActionButton, Input } from "../RegisterForm";
import { useEffect } from "react";

type UpdateChoiceProp = {
  setEditProfileState: (arg: "password" | "username/email") => void;
};

export function UpdateChoice({ setEditProfileState }: UpdateChoiceProp) {
  return (
    <div className="md:p-[15px_20px] p-[10px_15px] max-w-[500px] bg-[#FEFEFE0D] rounded-lg w-[max(50%, 300px)] md:w-[min(50vw,500px)]">
      <div className="font-medium text-[12px] md:text-base my-2">
        What do you want to Edit?
      </div>
      <div className="flex justify-between w-full mt-3">
        <div className="flex-grow">
          <button
            className="p-[5px] px-[8px] bg-[#06D440] text-sm sm:text-base w-full rounded-md flex-grow"
            onClick={() => setEditProfileState("username/email")}
          >
            Email/Username
          </button>
        </div>
        <button
          className={`p-[5px] px-[7px] text-sm sm:text-base rounded-md flex-grow`}
          onClick={() => setEditProfileState("password")}
        >
          Password
        </button>
      </div>
    </div>
  );
}

type EditProp = {
  close: () => void;
};

export function EditUserEmailForm({ close }: EditProp) {
  const [state, action] = useFormState(editProfileAction, undefined);
  useEffect(() => {
    if (state?.message === "Profile updated successfully") {
      close();
    }
  }, [state?.message, close]);

  return (
    <form action={action}>
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 px-6 -translate-x-1/2">
        <div className="md:max-w-[50rem] max-w-[350px] gap-10 bg-[#151515] items-center py-3 md:py-10 min-h-[280px] rounded-xl  flex justify-between px-7">
          <div className="w-[200px]">
            <span className="capitalize text-3xl font-bold block mb-2 text-[#FEFEFE]">
              Edit
            </span>
            <span className="block text-sm  text-[#FEFEFEB2]">
              your profile information
            </span>
          </div>
          <div className="space-y-5 w-[300px]">
            <ProfileInput
              label="Change Username(optional)"
              formName="username"
            />
            <ProfileInput label="Change Email(optional)" formName="email" />
            <EditUserButton />

            {state?.message && <p>{state.message}</p>}
          </div>
        </div>
      </div>
    </form>
  );
}

function EditUserButton() {
  const { pending } = useFormStatus();
  return <ActionButton buttonText={pending ? "Saving..." : "Save Profile"} />;
}

export function PasswordResetForm({ close }: EditProp) {
  const [passwordState, passwordAction] = useFormState(
    editUserPasswordAction,
    undefined
  );

  useEffect(() => {
    if (passwordState?.message === "Profile updated successfully") {
      close();
    }
  }, [passwordState?.message, close]);
  return (
    <form action={passwordAction}>
      <RegisterForm
        title="Edit"
        firstField={
          <>
            <Input label="Enter New Password" formName="newPassword" />
            {passwordState?.errors?.newPassword && (
              <p>{passwordState.errors.newPassword}</p>
            )}
          </>
        }
        remark="your password information"
        actionButton={<ActionButton buttonText="Change Password" />}
      />
    </form>
  );
}
