"use client";

import React, { useState } from "react";
import RegisterForm from "../RegisterForm";
import useInboxStore from "@/store/InboxStore";
import Modal from "../Modal";

const ProfileContent = () => {
  const [editModal, setEditModal] = useState(false);
  // const { setInboxModalActive, inboxModalActive } = useInboxStore();
  return (
    <>
      <Modal isOpen={editModal} onClose={() => setEditModal(false)}>
        <RegisterForm
          type="modal"
          title="Edit"
          remark="your profile information"
          path="/"
          firstLabel="change Email"
          secondLabel="Edit ID"
          buttonText="Save Profile"
        />
      </Modal>
      <div className="h-full">
        {/* {inboxModalActive && (
        <div className="absolute flex justify-center items-center w-full h-full bg-[#151515F2] backdrop-blur-sm">
          </div>
      )} */}
        <section className="w-full pt-7 px-8 bg-[#151515] h-full">
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl">
              Profile{" "}
              <span className="text-xs block font-light mt-2  text-[#FEFEFEB2]">
                Keep tabs on your messages and inboxes
              </span>
            </div>
            <button
              onClick={() => setEditModal(true)}
              className="bg-[#06D440] p-[8px_16px] text-white rounded-[4px]"
            >
              Edit Profile
            </button>
          </div>

          <div className="flex mt-10 items-center bg-[#FEFEFE08] p-[18px_16px] rounded-xl gap-6">
            <div className="flex justify-center bg-[#06D440] w-[50px] h-[50px] rounded-full items-center">
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
            </div>
            <div>
              <h1 className="text-2xl font-bold">User ID</h1>
              <span className="text-sm text-[#FEFEFEB2]">
                userxyz@hello.com
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProfileContent;
