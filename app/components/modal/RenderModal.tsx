"use client";

import React from "react";
import useInboxStore from "@/app/store/InboxStore";
import ModalCard from "./ModalCard";

enum ModalCardType {
  Delete = "delete",
  Inbox = "inbox",
}

function RenderModal() {
  const inboxModalActive = useInboxStore((state) => state.inboxModalActive);

  const deleteModalActive = useInboxStore((state) => state.deleteModalActive);
  return (
    <div>
      {inboxModalActive ||
        (deleteModalActive && (
          <div className="mx-auto h-full -mt-[15px] w-full absolute flex justify-center items-center bg-[#151515F2] backdrop-blur-sm">
            {inboxModalActive && <ModalCard type={ModalCardType.Inbox} />}
            {deleteModalActive && <ModalCard type={ModalCardType.Delete} />}
          </div>
        ))}
    </div>
  );
}
export default RenderModal;
