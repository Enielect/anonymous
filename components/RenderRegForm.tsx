"use client";

import React from "react";

import RegisterForm from "@/components/RegisterForm";

interface InboxState {
  inboxModalActive: boolean;
  setInboxModalActive: () => void;
}

const RenderRegForm = () => {
  return (
    <div>
      <RegisterForm
        title="Create"
        firstLabel="Edit Inbox Name"
        path={`/${2323}/inbox`}
        remark="your new Inbox"
        buttonText="Create Inbox"
      />
    </div>
  );
};

export default RenderRegForm;
