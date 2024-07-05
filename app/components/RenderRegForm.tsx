'use client'

import React from "react";

import useInboxStore from "@/app/store/InboxStore";
import RegisterForm from "@/app/components/RegisterForm";

interface InboxState {
  inboxModalActive: boolean;
  setInboxModalActive: () => void;
}

const RenderRegForm = () => {
  const setInboxModalActive = useInboxStore(
    (state: InboxState) => state.setInboxModalActive
  );
  return (
    <div>
      <RegisterForm
        title="Create"
        firstLabel="Edit Inbox Name"
        path={`/${2323}/inbox`}
        remark="your new Inbox"
        action={setInboxModalActive}
        buttonText="Create Inbox"
      />
    </div>
  );
};

export default RenderRegForm;
