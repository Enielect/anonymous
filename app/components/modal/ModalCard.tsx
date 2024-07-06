"use client";

import React from "react";

import useInboxStore from "@/app/store/InboxStore";

enum ModalCardType {
  Delete = "delete",
  Inbox = "inbox",
}

interface ModalCardProps {
  type: ModalCardType;
}

const ModalCard: React.FC<ModalCardProps> = ({ type }) => {
  const setInboxModalActive = useInboxStore(
    (state) => state.setInboxModalActive
  );
  const setDeleteModalActive = useInboxStore(
    (state) => state.setDeleteModalActive
  );
  return (
    <div className="p-[15px_20px] max-w-[500px] bg-[#FEFEFE0D] rounded-lg w-3/6">
      <div className="font-medium text-[12px] my-2">
        {type == "inbox"
          ? "You have successfully created INBOX 7"
          : "You are about to delete"}
      </div>
      <div className="bg-[#FEFEFE0D] p-[6px_12px] rounded-md border border-[#FEFEFE0D]">
        Inbox Link
      </div>
      <div className="flex justify-between w-full mt-3">
        <div className="flex-grow">
          {type == "delete" && (
            <button
              className="p-[5px] bg-[#06D440] w-full rounded-md flex-grow"
              onClick={setDeleteModalActive}
            >
              Confirm
            </button>
          )}
        </div>
        <button
          className={`p-[5px]  ${
            type == "inbox" && "bg-[#06D4400D] border-[#06D440] border"
          } rounded-md flex-grow`}
          onClick={type == "inbox" ? setInboxModalActive : setDeleteModalActive}
        >
          {type == "inbox" ? "Close" : "Cancel"}
        </button>
      </div>
    </div>
  );
};

export default ModalCard;
