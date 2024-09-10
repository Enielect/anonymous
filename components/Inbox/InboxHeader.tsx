"use client";

import React, { useState } from "react";
import Modal from "../Modal";
import { InboxModalCard } from "../modal/ModalCard";
import RenderRegForm from "../RenderRegForm";

const InboxHeader = () => {
  // const setInboxModalActive = useInboxStore(
  //   (state) => state.setInboxModalActive
  // );
  const [createInbox, setIsCreateInbox] = useState(false);
  function handleCloseModal() {
    setIsCreateInbox(false);
  }

  return (
    <>
      <Modal isOpen={createInbox} onClose={handleCloseModal}>
        {/* <InboxModalCard onClose={() => setIsCreateInbox(false)} /> */}
        <RenderRegForm onSuccess={handleCloseModal} />
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
