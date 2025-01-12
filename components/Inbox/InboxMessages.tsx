"use client";

import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import Modal from "../Modal";
import { DeleteModalCard } from "../modal/ModalCard";
import { getTimeAgo, web_url } from "@/lib/utils";
import { deleteInbox } from "@/app/actions/inbox";
import Loader from "../Loader";

type Message = {
  body: string;
  created_at: string;
  id: string;
};

type InboxMessageProp = {
  inboxMessages: Message[];
  inboxName: string;
  inbox_id: string;
};

const InboxMessages = ({
  inboxMessages,
  inboxName,
  inbox_id,
}: InboxMessageProp) => {
  //sorting messages based on the most current createdTime property of the message, note the createdTime is an ISOstring

  return (
    <div>
      <TopNav inboxName={inboxName} inbox_id={inbox_id} name={inboxName} />
      <div className="space-y-3 px-5 py-5 pt-[80px]">
        {inboxMessages
          .sort(
            (a, b) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
          .map(({ body, id, created_at }) => (
            <div
              key={id}
              className="flex justify-between gap-[50px] px-5 pr-0 py-3 border-l border-[#06D440] text-sm text-[#FEFEFEB2]"
            >
              <div>
                <span>{body}</span>
              </div>
              <div className=" flex-nowrap text-xs sm:text-sm min-w-[70px] min:[580px]:min-w-[120px]">
                {getTimeAgo(created_at) || 0}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

type TopNavProp = {
  name: string;
  inboxName: string;
  inbox_id: string;
};

function TopNav({ name, inboxName, inbox_id }: TopNavProp) {
  const [isDelete, setIsDelete] = useState(false);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  function handleDelete() {
    startTransition(async () => {
      await deleteInbox(inbox_id);
      router.refresh();
    });
  }
  return (
    <>
      <Modal isOpen={isDelete} onClose={() => setIsDelete(false)}>
        <DeleteModalCard inboxName={name} onClose={() => setIsDelete(false)}>
          <button
            disabled={pending}
            className="bg-[#06D440] text-white text-sm sm:text-base flex items-center justify-center gap-4 w-full py-2 rounded-md"
            onClick={handleDelete}
          >
            {pending && <Loader />}
            {pending ? "Deleting..." : "Confirm"}
          </button>
        </DeleteModalCard>
      </Modal>
      <div className="flex fixed w-full justify-between px-5 py-3 min-[500px]:pr-[70px] bg-[#080808]">
        <div className="flex items-center gap-3">
          <BackButton />
          <span className="text-sm sm:text-base text-white">{name}</span>
        </div>
        <div className="space-x-3">
          <>
            <CopyButton inbox_id={inbox_id} />
            <ShareButton inbox_id={inbox_id} inboxName={inboxName} />
          </>
          <button
            className="bg-[#06D440] text-white hidden min-[450px]:inline-block inbox-button"
            onClick={() => setIsDelete(true)}
          >
            Delete Inbox
          </button>
        </div>
      </div>
    </>
  );
}

function CopyButton({ inbox_id }: { inbox_id: string }) {
  const [clicked, setIsClicked] = useState(false);

  const handleCopyLink = () => {
    const textToCopy = `${web_url}/writeMessage/${inbox_id}`;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIsClicked(true);
        console.log("Text copied to clipboard!");

        // Reset the `isClicked` state after 3 seconds
        setTimeout(() => {
          setIsClicked(false);
        }, 3000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <button
      onClick={handleCopyLink}
      className="bg-[#FEFEFE0D] hidden text-white md:inline-block border border-[#06D440] inbox-button"
    >
      {clicked ? "Copied" : "Copy Link"}
    </button>
  );
}

type ShareButtonProp = { inboxName: string; inbox_id: string };

function ShareButton({ inboxName, inbox_id }: ShareButtonProp) {
  const shareData = {
    title: `${inboxName} Inbox`,
    text: "Share a Link to this inbox",
    url: `${web_url}/writeMessage/${inbox_id}`,
  };

  async function handleShare() {
    try {
      await navigator.share(shareData);
      console.log("Shared successfully");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <button
      onClick={handleShare}
      className="bg-[#FEFEFE0D] text-white inline-block md:hidden border border-[#06D440] inbox-button"
    >
      Share
    </button>
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
        className="max-[500px]:w-4"
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
