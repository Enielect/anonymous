"use client";
import React from "react";

import RegisterForm, { ActionButton, Input } from "@/components/RegisterForm";
import { useFormState } from "react-dom";
import { createInboxAction } from "@/app/actions/inbox";

const RenderRegForm = () => {
  const [state, action] = useFormState(createInboxAction, undefined);
  return (
    <div>
      <form action={action}>
        <RegisterForm
          title="Create"
          firstField={
            <>
              <Input label="Edit Inbox Name" formName="inboxName" />{" "}
              {state?.errors.inboxName && <p>{state.errors.inboxName}</p>}
            </>
          }
          remark="your new Inbox"
          actionButton={<ActionButton buttonText="Create Inbox" />}
        />
      </form>
    </div>
  );
};

export default RenderRegForm;
