"use client";

import React, { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { sendMessage } from "../../action/message";
import { AlertCircle, Lock, Send } from "lucide-react";

type WrapperProp = {
  id: string;
  inboxName: string;
};

const MessageWrapper = ({ id, inboxName }: WrapperProp) => {
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxChars = 5000;

  const [state, action] = useFormState(sendMessage.bind(null, id), undefined);

  useEffect(() => {
    if (state?.message) {
      setMessage("");
      setCharCount(0);
    }
  }, [setMessage, state]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target.value;
    if (input.length <= maxChars) {
      setMessage(input);
      setCharCount(input.length);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-6 bg-[#151515] rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">
          Share an Anonymous Message {`inbox: ${inboxName ?? ""}`}
        </h2>
        <div className="bg-[#3a3a3a] p-4 rounded-lg mb-4 flex items-center text-yellow-400">
          <AlertCircle className="w-5 h-5 mr-2" />
          <p className="text-sm">
            Your message will be anonymous. Feel free to express yourself as
            much as you desire
          </p>
        </div>
        <form action={action} className="space-y-4">
          <div className="relative">
            <textarea
              value={message}
              name="body"
              onChange={handleInputChange}
              placeholder="Type your message here..."
              className="w-full h-40 p-4 bg-[#3a3a3a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06D440] resize-none"
            />
            <div className="absolute bottom-3 right-3 text-gray-400 text-sm">
              {charCount}/{maxChars}
            </div>
          </div>
          {state?.error && (
            <p className="text-red-500 text-sm py-2">{state.error}</p>
          )}
          {state?.message && charCount === 0 && (
            <p className="text-green-500 text-sm py-2">{state.message}</p>
          )}
          <div className="flex justify-between items-center">
            <div className="flex items-center text-green-400">
              <Lock className="w-4 h-4 mr-2" />
              <span className="text-sm">End-to-end encrypted</span>
            </div>
            <SubmitButton message={message} />
          </div>
        </form>
      </div>
    </div>
  );
};

type SubmitButtonProps = {
  message: string;
};

function SubmitButton({ message }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={message.trim() === "" || pending}
      className="bg-[#06D440] text-white sm:px-6 sm:py-2 py-1 px-3 sm:text-base text-sm rounded-full font-semibold hover:bg-opacity-50 transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending && "Sending..."}
      {!pending && (
        <>
          <Send className="w-4 h-4 mr-2" /> Send Anonymously
        </>
      )}
    </button>
  );
}

export default MessageWrapper;
