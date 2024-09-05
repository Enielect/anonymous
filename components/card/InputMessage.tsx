import React from "react";
import Contact from "@/components/icons/Contact";

const InputMessage = () => {
  return (
    <div className="p-[25px]  bg-[#FEFEFE1A] max-w-[500px] rounded-[10px] flex gap-4">
      <div className="space-y-4">
        <h4 className="font-semibold items-center flex gap-3">
          <span>
            <Contact className="w-3" />
          </span>
          <span>Inbox A</span>
        </h4>
        <h6 className="text-[#FEFEFEB2] text-xs">
          Send User 534 an anonymous message
        </h6>
      </div>
      <div className="space-y-2">
        <div className="w-[330px] h-[150px]">
          <textarea
            className="bg-[#FEFEFE0D] text-[#FEFEFECC] border p-3 border-[#FEFEFE33] placeholder:text-sm w-full h-full  outline-none rounded-md resize-none"
            placeholder="Type your message"
          />
        </div>
        <div className="flex justify-end">
          <button className="bg-[#06D440] text-white p-[5px_10px] text-right rounded-md">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputMessage;
