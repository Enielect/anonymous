"use client";

import {
  editProfileAction,
  editUserPasswordAction,
} from "@/app/actions/profile";
import { useFormState } from "react-dom";
import { ProfileInput } from "./ProfileInput";
import RegisterForm, { ActionButton, Input } from "../RegisterForm";

type UpdateChoiceProp = {
  setEditProfileState: (arg: "password" | "username/email") => void;
};

export function UpdateChoice({ setEditProfileState }: UpdateChoiceProp) {
  return (
    <div className="p-[15px_20px] max-w-[500px] bg-[#FEFEFE0D] rounded-lg w-[min(50vw,400px)]">
      <div className="font-medium text-[12px] my-2">
        What do you want to Edit?
      </div>
      <div className="flex justify-between w-full mt-3">
        {/* submit button to perform delete action */}
        <div className="flex-grow">
          <button
            className="p-[5px] bg-[#06D440] w-full rounded-md flex-grow"
            onClick={() => setEditProfileState("username/email")}
          >
            Email/Username
          </button>
        </div>
        <button
          className={`p-[5px]  rounded-md flex-grow`}
          onClick={() => setEditProfileState("password")}
        >
          Password
        </button>
      </div>
    </div>
  );
}

export function EditUserEmailForm() {
  const [state, action] = useFormState(editProfileAction, undefined);

  return (
    <form action={action}>
      <div className="absolute top-1/2  left-1/2 -translate-y-1/2 px-6 -translate-x-1/2">
        <div className="max-w-[800px] gap-10 bg-[#FEFEFE08] items-center py-10 min-h-[280px] rounded-xl  flex justify-between px-7">
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
            <ActionButton buttonText="Save Profile" />
            {state?.message && <p>{state.message}</p>}
          </div>
        </div>
      </div>
    </form>
  );
}

export function PasswordResetForm() {
  const [passwordState, passwordAction] = useFormState(
    editUserPasswordAction,
    undefined
  );
  return (
    <form action={passwordAction}>
      <RegisterForm
        title="Edit"
        firstField={
          <>
            <Input label="Enter New Password" formName="newPassword" />
            {passwordState?.errors.newPassword && (
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
