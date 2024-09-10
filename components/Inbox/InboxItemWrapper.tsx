import React from "react";
import InboxItem from "./InboxItem";
import { base_url } from "@/lib/utils";
import { verifySession } from "@/lib/dal";

interface InboxItemProp {
  inbox_name: string;
  inbox_id: string;
  date: string;
}

const InboxItemWrapper = async ({
  inbox_name,
  inbox_id,
  date,
}: InboxItemProp) => {
  const user_id = await verifySession();
  const inbox = await fetch(`${base_url}/inboxes/${inbox_id}/messages`, {
    method: "GET", // HTTP method
    headers: {
      "User-Id": user_id.userId.toString(), // Passing the User-Id in the headers
      "Content-Type": "application/json", // Optional: If you are expecting JSON response
    },
  });
  const response = await inbox.json();
  console.log(inbox_id);
  console.log(response);
  const messages = response.length;
  return (
    <>
      <InboxItem
        inbox_name={inbox_name}
        inbox_id={inbox_id}
        messages={messages}
        date={date}
      />
    </>
  );
};

export default InboxItemWrapper;
