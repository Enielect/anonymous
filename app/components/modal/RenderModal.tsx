"use client";

import React from "react";
import useInboxStore from "@/app/store/InboxStore";
import ModalCard from "./ModalCard";
import RegisterForm from "../RegisterForm";

enum ModalCardType {
  Delete = "delete",
  Inbox = "inbox",
}

function RenderModal() {
  const { inboxModalActive, deleteModalActive, editModalActive } =
    useInboxStore();

  // const deleteModalActive = useInboxStore((state) => state.deleteModalActive);
  return (
    <div>
      {(inboxModalActive || deleteModalActive || editModalActive) && (
        <div className="mx-auto h-full -mt-[15px] w-full absolute flex justify-center items-center bg-[#151515F2] backdrop-blur-sm">
          {inboxModalActive && <ModalCard type={ModalCardType.Inbox} />}
          {deleteModalActive && <ModalCard type={ModalCardType.Delete} />}
          {editModalActive && (
            <RegisterForm
              type="modal"
              title="Edit"
              remark="Inbox information"
              path="/"
              firstLabel="Edit Inbox Name"
              secondLabel="copy Inbox LInk"
              buttonText="Edit"
            />
          )}
        </div>
      )}
    </div>
  );
}
export default RenderModal;
