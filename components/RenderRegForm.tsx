"use client";
import React, { useEffect } from "react";

import RegisterForm, { ActionButton, Input } from "@/components/RegisterForm";
import { useFormState, useFormStatus } from "react-dom";
import { createInboxAction } from "@/app/actions/inbox";

type RenderRegFormProp = {
  onSuccess?: () => void;
};

const RenderRegForm = ({ onSuccess }: RenderRegFormProp) => {
  const [state, action] = useFormState(createInboxAction, undefined);
  const { pending } = useFormStatus();

  useEffect(() => {
    if (state && !state.errors && !pending) {
      onSuccess && onSuccess();
    }
  }, [state, pending, onSuccess]);

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
          actionButton={
            <ActionButton
              buttonText={pending ? "Creating..." : "Create Inbox"}
            />
          }
        />
      </form>
    </div>
  );
};

export default RenderRegForm;
