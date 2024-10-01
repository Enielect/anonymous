"use client";

import Link from "next/link";
import React, { useEffect, useState, useTransition } from "react";
import Modal from "../Modal";
import RegisterForm, { ActionButton, Input } from "../RegisterForm";
import { DeleteModalCard } from "../modal/ModalCard";
import { deleteInbox } from "@/app/actions/inbox";
import { useRouter } from "next/navigation";
import { getTimeAgo, web_url } from "@/lib/utils";
import { useFormState, useFormStatus } from "react-dom";
import { editInboxName } from "@/app/(user)/inbox/action/inbox";
import { revalidatePath } from "next/cache";
import Loader from "../Loader";

interface InboxItemProp {
  inbox_name: string;
  inbox_id: string;
  messages: number;
  date: string;
}

const InboxItem: React.FC<InboxItemProp> = ({
  inbox_name,
  messages,
  inbox_id,
  date,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  const [isClicked, setIsClicked] = useState(false);

  const [state, action] = useFormState(
    editInboxName.bind(null, inbox_id),
    undefined
  );

  useEffect(() => {
    if (state?.message === "success") {
      setIsEdit(false);
    }
  }, [state]);

  const handleCopyLink = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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

  const handleDelete = () => {
    startTransition(async () => {
      const data = await deleteInbox(inbox_id);
    });
  };

  useEffect(() => {
    if (!pending) {
      setIsDelete(false);
    }
  }, [pending]);

  return (
    <>
      <Modal isOpen={isEdit} onClose={() => setIsEdit(false)}>
        <form action={action}>
          <RegisterForm
            title="Edit"
            firstField={
              <>
                <Input label="Edit Inbox Name" formName="name" />
                <div className="bg-[#FEFEFE0D] border flex py-2  px-3 rounded-md w-full border-[#FEFEFE33]">
                  <span className="text-to-copy text-xs sm:text-base w-[80%] text-blue-400 break-all block flex-wrap">
                    {`${web_url}/writeMessage/${inbox_id}`}
                  </span>
                  <button
                    onClick={handleCopyLink} // Call the copy function directly
                    className="copy-button w-[20%] pl-1 sm:pl-0 flex justify-center items-center"
                  >
                    {isClicked ? <CheckIcon /> : <ClipIcon />}
                  </button>
                </div>
              </>
            }
            remark="inbox information"
            actionButton={<EditInbxNameButton />}
          />
        </form>
      </Modal>

      <Modal isOpen={isDelete} onClose={() => setIsDelete(false)}>
        <DeleteModalCard
          inboxName={inbox_name}
          onClose={() => setIsDelete(false)}
        >
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

      <div className="bg-[#FEFEFE08] flex py-[10px] rounded-[8px] px-[20px] w-full justify-between items-center">
        <Link
          href={`/inbox/${inbox_id}`}
          className="grid flex-[8] min-[500px]:grid-cols-2 grid-cols-1 min-[709px]:grid-cols-3"
        >
          <div className="pr-2 text-sm text-white md:text-base">
            {inbox_name}
          </div>
          <div className="text-[#06D440] hidden min-[500px]:block">
            {" "}
            {Number(messages)} Messages{" "}
          </div>
          <span className="min-[709px]:block text-white hidden">
            {getTimeAgo(date)}
          </span>
        </Link>
        <div className="flex-1">
          <div className="flex gap-2  justify-end items-center">
            {/* Edit button */}
            <button onClick={() => setIsEdit(true)}>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 sm:w-5"
              >
                <path
                  d="M3.33333 33.6875C2.41667 33.6875 1.63194 33.3611 0.979167 32.7083C0.326389 32.0556 0 31.2708 0 30.3542V7.02083C0 6.10417 0.326389 5.31944 0.979167 4.66667C1.63194 4.01389 2.41667 3.6875 3.33333 3.6875H18.2083L14.875 7.02083H3.33333V30.3542H26.6667V18.7708L30 15.4375V30.3542C30 31.2708 29.6736 32.0556 29.0208 32.7083C28.3681 33.3611 27.5833 33.6875 26.6667 33.6875H3.33333ZM10 23.6875V16.6042L25.2917 1.3125C25.625 0.979167 26 0.729167 26.4167 0.5625C26.8333 0.395833 27.25 0.3125 27.6667 0.3125C28.1111 0.3125 28.5347 0.395833 28.9375 0.5625C29.3403 0.729167 29.7083 0.979167 30.0417 1.3125L32.375 3.6875C32.6806 4.02083 32.9167 4.38889 33.0833 4.79167C33.25 5.19444 33.3333 5.60417 33.3333 6.02083C33.3333 6.4375 33.2569 6.84722 33.1042 7.25C32.9514 7.65278 32.7083 8.02083 32.375 8.35417L17.0833 23.6875H10ZM13.3333 20.3542H15.6667L25.3333 10.6875L24.1667 9.52083L22.9583 8.35417L13.3333 17.9792V20.3542Z"
                  fill="#E8EAED"
                />
              </svg>
            </button>

            {/* delete button */}
            <button onClick={() => setIsDelete(true)}>
              <svg
                width="27"
                height="30"
                viewBox="0 0 27 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 sm:w-5"
              >
                <path
                  d="M5.33301 30C4.41634 30 3.63162 29.6736 2.97884 29.0208C2.32606 28.3681 1.99967 27.5833 1.99967 26.6667V5H0.333008V1.66667H8.66634V0H18.6663V1.66667H26.9997V5H25.333V26.6667C25.333 27.5833 25.0066 28.3681 24.3538 29.0208C23.7011 29.6736 22.9163 30 21.9997 30H5.33301ZM21.9997 5H5.33301V26.6667H21.9997V5ZM8.66634 23.3333H11.9997V8.33333H8.66634V23.3333ZM15.333 23.3333H18.6663V8.33333H15.333V23.3333Z"
                  fill="#E8EAED"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

function ClipIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ fill: "white" }}
    >
      <path d="M19 3h-2.25a1 1 0 0 0-1-1h-7.5a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 17H5V5h2v2h10V5h2v15z"></path>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ fill: "white" }}
    >
      <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
    </svg>
  );
}

function EditInbxNameButton() {
  const { pending: editPending } = useFormStatus();

  return (
    <ActionButton
      pending={editPending}
      buttonText={editPending ? "Editing..." : "Edit"}
    />
  );
}

export default InboxItem;
