"use client";

import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import Modal from "../Modal";
import { DeleteModalCard } from "../modal/ModalCard";
import { convertTimeFormat, getTimeAgo } from "@/lib/utils";

type Message = {
  body: string;
  created_at: string;
  id: string;
};

type InboxMessageProp = {
  inboxMessages: Message[];
  inboxName: string;
};

// const MessageData: Message[] = [
//   {
//     id: 1,
//     content:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis voluptate corporis, iusto, molestias at obcaecati cumque rem quaerat expedita voluptatem fuga nemo dignissimos dicta labore aut incidunt culp",
//     time: "12:00",
//   },
//   {
//     id: 2,
//     content:
//       "Lorem ipsum, dolor sit amet consecteo, molestias at obcaecati cumque rem quaerat expedita voluptatem fuga nemo dignissimos dicta labore aut incidunt culp",
//     time: "12:00",
//   },
//   {
//     id: 3,
//     content:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis voluptate corporivoluptatem fuga nemo dignissimos dicta labore aut incidunt culp",
//     time: "12:00",
//   },
//   {
//     id: 4,
//     content:
//       "e corporis, iusto, molestias at obcaecati cumque rem quaerat expedita voluptatem fuga nemo dignissimos dicta labore aut incidunt culp",
//     time: "12:00",
//   },
//   {
//     id: 5,
//     content:
//       "Lorem ipsum, dolor sit ambis voluptate corporis, iusto, molestias at obcaecati cumque rem quaerat expedita voluptatem fuga nemo dignissimos dicta labore aut incidunt culp",
//     time: "12:00",
//   },
//   {
//     id: 6,
//     content:
//       "Lorem ipsum, dolor elit. Nobis voluptate corporis, iusto, molestias at obcaecati cumque rem quaerat expedita voluptatem fuga nemo dignissimos dicta labore aut incidunt culp",
//     time: "12:00",
//   },
// ];

const InboxMessages = ({ inboxMessages, inboxName }: InboxMessageProp) => {
  console.log(inboxMessages, "inboxMessages");
  return (
    <div>
      <TopNav name={inboxName} />
      <div className="space-y-3 px-5 py-5 pt-[80px]">
        {inboxMessages.map(({ body, id, created_at }) => (
          <div
            key={id}
            className="flex justify-between gap-[50px] px-5  py-3 border-l border-[#06D440] text-sm text-[#FEFEFEB2]"
          >
            <div>
              <span>{body}</span>
            </div>
            <div>
              <span>{getTimeAgo(created_at) || 0}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function TopNav({ name }: { name: string }) {
  const [isDelete, setIsDelete] = useState(false);
  const [pending, startTransition] = useTransition();
  function handleDelete() {}
  return (
    <>
      <Modal isOpen={isDelete} onClose={() => setIsDelete(false)}>
        <DeleteModalCard onClose={() => setIsDelete(false)}>
          <button
            className="p-[5px] bg-[#06D440] w-full rounded-md flex-grow"
            onClick={handleDelete}
          >
            {pending ? "Deleting" : "Confirm"}
          </button>
        </DeleteModalCard>
      </Modal>
      <div className="flex fixed w-full justify-between px-5 py-3 pr-[70px] bg-[#080808]">
        <div className="flex items-center gap-3">
          <BackButton />
          <span>{name}</span>
        </div>
        <div className="space-x-3">
          <button className="bg-[#FEFEFE0D] border border-[#06D440] inbox-button">
            Share Link
          </button>
          <button
            className="bg-[#06D440] inbox-button"
            onClick={() => setIsDelete(true)}
          >
            Delete Inbox
          </button>
        </div>
      </div>
    </>
  );
}

function BackButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.825 7L16 7V9L3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7Z"
          fill="white"
        />
      </svg>
    </button>
  );
}

export default InboxMessages;
