"use client";

import React, { ReactNode } from "react";

type DeleteCardProps = {
  onClose: () => void;
  children: ReactNode;
  inboxName: string;
};

export const DeleteModalCard = ({
  onClose,
  children,
  inboxName,
}: DeleteCardProps) => {
  return (
    <div className="p-[15px_20px] max-w-[600px] bg-[#151515] rounded-lg w-[min(50vw,500px)]">
      <div className="font-medium text-sm sm:text-[12px] my-2">
        You are about to delete
      </div>
      <div className="bg-[#FEFEFE0D] text-sm sm:text-base p-[6px_12px] rounded-md border border-[#FEFEFE0D]">
        {inboxName}
      </div>
      <div className="flex justify-between w-full mt-3">
        {/* submit button to perform delete action */}
        <div className="flex-grow text-sm sm:text-base">{children}</div>
        <button className={`p-[5px] text-sm sm:text-base rounded-md flex-grow`} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};
