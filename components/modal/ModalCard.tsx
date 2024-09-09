"use client";

import React, { ReactNode } from "react";

export const InboxModalCard = ({ onClose }: { onClose: () => void }) => {
  // const setInboxModalActive = useInboxStore(
  //   (state) => state.setInboxModalActive
  // );
  // const setDeleteModalActive = useInboxStore(
  //   (state) => state.setDeleteModalActive
  // );
  return (
    <div className="p-[15px_20px] max-w-[500px]  bg-[#FEFEFE0D] rounded-lg w-[min(50vw,400px)]">
      <div className="font-medium text-[12px] my-2">
        You have successfully created INBOX 7
      </div>
      <div className="bg-[#FEFEFE0D] p-[6px_12px] rounded-md border border-[#FEFEFE0D]">
        Inbox Link
      </div>
      <div className="flex justify-between w-full mt-3">
        <div className="flex-grow"></div>
        <button
          className={`p-[5px]  
            bg-[#06D4400D] border-[#06D440] border
          rounded-md flex-grow`}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export const DeleteModalCard = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: ReactNode;
}) => {
  return (
    <div className="p-[15px_20px] max-w-[500px] bg-[#FEFEFE0D] rounded-lg w-[min(50vw,400px)]">
      <div className="font-medium text-[12px] my-2">
        You are about to delete
      </div>
      <div className="bg-[#FEFEFE0D] p-[6px_12px] rounded-md border border-[#FEFEFE0D]">
        Inbox Link
      </div>
      <div className="flex justify-between w-full mt-3">
        {/* submit button to perform delete action */}
        <div className="flex-grow">{children}</div>
        <button className={`p-[5px]  rounded-md flex-grow`} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};
