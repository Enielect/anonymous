"use client";

import React, { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { sendMessage } from "../../action/message";

type Props = {
  params: { id: string };
};

//creating a new message in an inbox

const WriteMessagePage = ({ params }: Props) => {
  const id = params.id;
  console.log(id, 'thi is the iDDDDD id')
  const [state, action] = useFormState(sendMessage.bind(null, id), undefined);
  const [messageContent, setMessageContent] = useState("");
  const { pending, data, method } = useFormStatus();

  useEffect(() => {
    if (state?.message && !pending) setMessageContent("");
  }, [setMessageContent, pending, state]);

  return (
    <form action={action}>
      <div className="min-h-screen flex items-center justify-center">
        <div>
          <h1 className="text-4xl gradient-text text-center font-bold pb-[80px]">
            Write an Anonymous message
          </h1>
          <textarea
            name="body"
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
            className="resize-none rounded-md  w-[500px] bg-[#FEFEFE0D] border-white border-[#FEFEFE33] py-4 px-3 h-[200px] bg-"
          ></textarea>
          <div className="text-right py-3">
            <button type="submit" className="px-4 py-2 rounded-full bg-red-400">
              {pending && "Sending"}
              {!pending && state?.message && "Sent"}
              {!pending && !state?.message && 'Send'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default WriteMessagePage;
