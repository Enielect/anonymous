"use client";

import useInboxStore from "@/app/store/InboxStore";
import React from "react";

const InboxHeader = () => {
  const setInboxModalActive = useInboxStore(
    (state) => state.setInboxModalActive
  );
  return (
    <div className="flex justify-between items-center">
      <div className="font-bold text-2xl">Inbox</div>
      <button
        onClick={setInboxModalActive}
        className="bg-[#06D440] p-[8px_16px] rounded-[4px]"
      >
        Create new Inbox
      </button>
    </div>
  );
};

export default InboxHeader;
