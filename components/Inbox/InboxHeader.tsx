"use client";

import React, { useState } from "react";
import Modal from "../Modal";
import { InboxModalCard } from "../modal/ModalCard";

const InboxHeader = () => {
  // const setInboxModalActive = useInboxStore(
  //   (state) => state.setInboxModalActive
  // );
  const [createInbox, setIsCreateInbox] = useState(false);

  return (
    <>
      <Modal isOpen={createInbox} onClose={() => setIsCreateInbox(false)}>
        <InboxModalCard onClose={() => setIsCreateInbox(false)} />
      </Modal>
      <div className="flex w-full justify-between items-center">
        <div className="font-bold text-2xl">Inbox</div>
        <button
          onClick={() => setIsCreateInbox(true)}
          className="bg-[#06D440] p-[8px_16px] rounded-[4px]"
        >
          Create new Inbox
        </button>
      </div>
    </>
  );
};

export default InboxHeader;
