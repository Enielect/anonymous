"use client";

import React, { useState } from "react";
import Modal from "../Modal";
import RenderRegForm from "../RenderRegForm";

const InboxHeader = () => {
  const [createInbox, setIsCreateInbox] = useState(false);
  function handleCloseModal() {
    setIsCreateInbox(false);
  }

  return (
    <>
      <Modal isOpen={createInbox} onClose={handleCloseModal}>
        <RenderRegForm onSuccess={handleCloseModal} />
      </Modal>
      <div className="flex min-[709px]:w-full relative justify-between items-center">
        <div className="font-bold md:text-2xl text-white">Inbox</div>
        <button
          onClick={() => setIsCreateInbox(true)}
          className="bg-[#06D440] text-sm md:text-base text-white p-[6px_13px] sm:p-[8px_16px] rounded-[4px]"
        >
          Create new Inbox
        </button>
      </div>
    </>
  );
};

export default InboxHeader;
