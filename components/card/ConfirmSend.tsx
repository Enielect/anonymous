import React from "react";

const ConfirmSend = () => {
  return (
    <div className="space-y-8 bg-[#FEFEFE0D] max-w-[500px] rounded-lg p-[15px]">
      <div className="text-center">
        <h5 className="font-medium leading-6 mb-1">
          You have sent an anonymous message to User 534.
        </h5>
        <h6 className="text-[#FEFEFECC] text-sm">
          Be rest assured that your identity will remain anonymous
        </h6>
      </div>
      <div className="flex">
        <button className="capitalize rounded-md flex-[1] p-[5px_8px] bg-[#06D440]">
          send another message
        </button>
        <button className="uppercase flex-[1]">close</button>
      </div>
    </div>
  );
};

export default ConfirmSend;
