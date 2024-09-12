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

  return (
    <div>
      <form action={action}>
        <RegisterForm
          title="Create"
          firstField={
            <>
              <Input label="Enter Inbox Name" formName="inboxName" />{" "}
              {state?.errors?.inboxName && <p>{state?.errors.inboxName}</p>}
            </>
          }
          remark="your new Inbox"
          actionButton={
            <CreateInboxButton onSuccess={onSuccess} state={state} />
          }
        />
      </form>
    </div>
  );
};

type CreateInboxButtonProp = {
  onSuccess?: () => void;
  state: any;
};

function CreateInboxButton({ onSuccess, state }: CreateInboxButtonProp) {
  const { pending } = useFormStatus();

  useEffect(() => {
    if (state && !state.errors && !pending) {
      onSuccess && onSuccess();
    }
  }, [state, pending, onSuccess]);
  return <ActionButton buttonText={pending ? "Creating..." : "Create Inbox"} />;
}

export default RenderRegForm;
