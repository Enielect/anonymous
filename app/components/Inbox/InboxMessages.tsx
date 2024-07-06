"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Message = {
  id: number;
  content: string;
  time: string;
};

const MessageData: Message[] = [
  {
    id: 1,
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis voluptate corporis, iusto, molestias at obcaecati cumque rem quaerat expedita voluptatem fuga nemo dignissimos dicta labore aut incidunt culp",
    time: "12:00",
  },
  {
    id: 2,
    content:
      "Lorem ipsum, dolor sit amet consecteo, molestias at obcaecati cumque rem quaerat expedita voluptatem fuga nemo dignissimos dicta labore aut incidunt culp",
    time: "12:00",
  },
  {
    id: 3,
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis voluptate corporivoluptatem fuga nemo dignissimos dicta labore aut incidunt culp",
    time: "12:00",
  },
  {
    id: 4,
    content:
      "e corporis, iusto, molestias at obcaecati cumque rem quaerat expedita voluptatem fuga nemo dignissimos dicta labore aut incidunt culp",
    time: "12:00",
  },
  {
    id: 5,
    content:
      "Lorem ipsum, dolor sit ambis voluptate corporis, iusto, molestias at obcaecati cumque rem quaerat expedita voluptatem fuga nemo dignissimos dicta labore aut incidunt culp",
    time: "12:00",
  },
  {
    id: 6,
    content:
      "Lorem ipsum, dolor elit. Nobis voluptate corporis, iusto, molestias at obcaecati cumque rem quaerat expedita voluptatem fuga nemo dignissimos dicta labore aut incidunt culp",
    time: "12:00",
  },
];

const InboxMessages = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between px-5 py-3 bg-[#FEFEFE08]">
        <div className="flex items-center gap-3">
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
          <span>Tech Bros and Sis</span>
        </div>
        <div className="space-x-3">
          <button className="bg-[#FEFEFE0D] border border-[#06D440] inbox-button">
            Share Link
          </button>
          <button className="bg-[#06D440] inbox-button">Delete Inbox</button>
        </div>
      </div>
      <div className="space-y-3 px-5 py-5">
        {MessageData.map(({ id, content, time }) => (
          <div
            key={id}
            className="flex justify-between gap-[50px] px-5  py-3 border-l border-[#06D440] text-sm text-[#FEFEFEB2]"
          >
            <div>
              <span>{content}</span>
            </div>
            <div>
              <span>{time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InboxMessages;
