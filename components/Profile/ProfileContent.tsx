"use client";

import React, { useState, useTransition } from "react";
import Modal from "../Modal";

import {
  EditUserEmailForm,
  PasswordResetForm,
  UpdateChoice,
} from "./ModalOptions";
import { useRouter } from "next/navigation";
import { deleteUser, logOutUser } from "@/app/actions/profile";

type ProfileContentProps = {
  username: string;
  email: string;
};

const ProfileContent = ({ username, email }: ProfileContentProps) => {
  const [editModal, setEditModal] = useState(false);

  const handleClose = () => {
    setEditModal(false);
  };

  const [editProfileState, setEditProfileState] = useState<
    "choose" | "password" | "username/email"
  >("choose");
  return (
    <>
      <Modal
        isOpen={editModal}
        onClose={() => {
          setEditModal(false);
          setEditProfileState("choose");
        }}
      >
        <>
          {editProfileState === "choose" && (
            <UpdateChoice setEditProfileState={setEditProfileState} />
          )}
          {editProfileState === "username/email" && (
            <EditUserEmailForm close={handleClose} />
          )}
          {editProfileState === "password" && (
            <PasswordResetForm close={handleClose} />
          )}
        </>
      </Modal>
      <div className="h-full">
        <section className="w-full pt-7 px-8 bg-[#151515] h-full">
          <ProfileHeader setEditModal={setEditModal} />
          <ProfileBody username={username} email={email} />
        </section>
      </div>
    </>
  );
};

type ProfileHeaderProp = {
  setEditModal: (arg: boolean) => void;
};

function ProfileHeader({ setEditModal }: ProfileHeaderProp) {
  const [isDeleteUser, setDeleteUser] = useState(false);
  const [isLogOut, setLogOut] = useState(false);
  return (
    <>
      <Modal isOpen={isDeleteUser} onClose={() => setDeleteUser(false)}>
        <DeleteUserModal onClose={() => setDeleteUser(false)} />
      </Modal>
      <Modal isOpen={isLogOut} onClose={() => setLogOut(false)}>
        <LogOutModal onClose={() => setLogOut(false)} />
      </Modal>
      <div className="flex justify-between items-center">
        <div className="font-bold text-lg sm:text-2xl">
          Profile{" "}
          <span className="text-xs md:text-base block font-light mt-2  text-[#FEFEFEB2]">
            Keep tabs on your messages and inboxes
          </span>
        </div>
        <div className="flex gap-[90px]">
          <div className="space-x-5">
            <button
              onClick={() => setDeleteUser(true)}
              className="bg-red-600 p-[8px_16px] hidden min-[845px]:inline-block text-white rounded-[4px]"
            >
              Delete Accout
            </button>
            <button
              onClick={() => setEditModal(true)}
              className="bg-[#06D440] p-[8px_16px] text-xs sm:text-base text-white rounded-[4px]"
            >
              Edit Profile
            </button>
          </div>
          <button
            onClick={() => setLogOut(true)}
            className="bg-[#151515] border hidden min-[845px]:inline-block border-[#06D440] p-[8px_16px] text-white rounded-[4px]"
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}

type ProfileBodyProp = {
  username: string;
  email: string;
};

function ProfileBody({ username, email }: ProfileBodyProp) {
  const [isDeleteUser, setDeleteUser] = useState(false);
  const [isLogOut, setLogOut] = useState(false);
  return (
    <>
      <Modal isOpen={isDeleteUser} onClose={() => setDeleteUser(false)}>
        <DeleteUserModal onClose={() => setDeleteUser(false)} />
      </Modal>
      <Modal isOpen={isLogOut} onClose={() => setLogOut(false)}>
        <LogOutModal onClose={() => setLogOut(false)} />
      </Modal>
      <div className="flex flex-col justify-between pb-[30px] h-[calc(100%-3.8rem)]">
        <div className="flex mt-10 items-center bg-[#FEFEFE08] p-[18px_16px] rounded-xl gap-6">
          <div className="flex justify-center bg-[#06D440] w-[50px] h-[50px] rounded-full items-center">
            <ProfileIcon />
          </div>
          <div>
            <h1 className="sm:text-2xl text-base font-bold">{username}</h1>
            <span className="sm:text-sm text-xs text-[#FEFEFEB2]">{email}</span>
          </div>
        </div>
        <div className="space-x-6">
          <button
            onClick={() => setDeleteUser(true)}
            className="bg-red-600 p-[6px_14px] text-sm inline-block min-[845px]:hidden text-white rounded-[4px]"
          >
            Delete Account
          </button>

          <button
            onClick={() => setLogOut(true)}
            className="bg-[#151515] border text-sm inline-block min-[845px]:hidden border-[#06D440] p-[6px_14px] text-white rounded-[4px]"
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}

function ProfileIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2663 11.2667C9.79961 11.2667 8.54405 10.7444 7.49961 9.70001C6.45516 8.65556 5.93294 7.40001 5.93294 5.93334C5.93294 4.46667 6.45516 3.21112 7.49961 2.16667C8.54405 1.12223 9.79961 0.600006 11.2663 0.600006C12.7329 0.600006 13.9885 1.12223 15.0329 2.16667C16.0774 3.21112 16.5996 4.46667 16.5996 5.93334C16.5996 7.40001 16.0774 8.65556 15.0329 9.70001C13.9885 10.7444 12.7329 11.2667 11.2663 11.2667ZM0.599609 21.9333V18.2C0.599609 17.4445 0.794054 16.75 1.18294 16.1167C1.57183 15.4833 2.0885 15 2.73294 14.6667C4.11072 13.9778 5.51072 13.4611 6.93294 13.1167C8.35516 12.7722 9.79961 12.6 11.2663 12.6C12.7329 12.6 14.1774 12.7722 15.5996 13.1167C17.0218 13.4611 18.4218 13.9778 19.7996 14.6667C20.4441 15 20.9607 15.4833 21.3496 16.1167C21.7385 16.75 21.9329 17.4445 21.9329 18.2V21.9333H0.599609ZM3.26628 19.2667H19.2663V18.2C19.2663 17.9556 19.2052 17.7333 19.0829 17.5333C18.9607 17.3333 18.7996 17.1778 18.5996 17.0667C17.3996 16.4667 16.1885 16.0167 14.9663 15.7167C13.7441 15.4167 12.5107 15.2667 11.2663 15.2667C10.0218 15.2667 8.7885 15.4167 7.56628 15.7167C6.34405 16.0167 5.13294 16.4667 3.93294 17.0667C3.73294 17.1778 3.57183 17.3333 3.44961 17.5333C3.32739 17.7333 3.26628 17.9556 3.26628 18.2V19.2667ZM11.2663 8.60001C11.9996 8.60001 12.6274 8.33889 13.1496 7.81667C13.6718 7.29445 13.9329 6.66667 13.9329 5.93334C13.9329 5.20001 13.6718 4.57223 13.1496 4.05001C12.6274 3.52778 11.9996 3.26667 11.2663 3.26667C10.5329 3.26667 9.90516 3.52778 9.38294 4.05001C8.86072 4.57223 8.59961 5.20001 8.59961 5.93334C8.59961 6.66667 8.86072 7.29445 9.38294 7.81667C9.90516 8.33889 10.5329 8.60001 11.2663 8.60001Z"
        fill="#FEFEFE"
      />
    </svg>
  );
}

type DeleteUserModalProp = {
  onClose: () => void;
};

function DeleteUserModal({ onClose }: DeleteUserModalProp) {
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  function handleDeleteUser() {
    startTransition(async () => {
      await deleteUser();
    });
    router.refresh();
  }
  return (
    <div className="p-[15px_20px] max-w-[500px] bg-[#FEFEFE0D] rounded-lg w-[min(50vw,400px)]">
      <div className="font-medium text-[12px] md:text-base my-2">
        Are you sure you want to delete your accout, this action is
        irreversable!!!
      </div>
      <div className="flex justify-between w-full mt-3">
        {/* submit button to perform delete action */}
        <div className="flex-grow">
          <button
            className="p-[5px] bg-[#06D440] w-full rounded-md flex-grow"
            onClick={handleDeleteUser}
          >
            {pending ? "Deleting..." : "Yes"}
          </button>
        </div>
        <button className={`p-[5px]  rounded-md flex-grow`} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

type LogOutProp = {
  onClose: () => void;
};

function LogOutModal({ onClose }: LogOutProp) {
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  function handleLogOut() {
    startTransition(async () => {
      await logOutUser();
    });
    router.refresh();
  }
  return (
    <div className="p-[15px_20px] max-w-[500px] bg-[#FEFEFE0D] rounded-lg w-[min(50vw,400px)]">
      <div className="font-medium text-[12px] md:text-base my-2">
        Are you sure you want to Log Out????
      </div>
      <div className="flex justify-between w-full mt-3">
        {/* submit button to perform delete action */}
        <div className="flex-grow">
          <button
            className="p-[5px] bg-[#06D440] w-full rounded-md flex-grow"
            onClick={handleLogOut}
          >
            {pending ? "logging out.." : "Yes"}
          </button>
        </div>
        <button className={`p-[5px]  rounded-md flex-grow`} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ProfileContent;
