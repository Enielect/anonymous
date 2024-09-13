import React from "react";
import InboxItem from "./InboxItem";
import { base_url } from "@/lib/utils";
import { verifySession } from "@/lib/dal";

interface InboxItemProp {
  inbox_name: string;
  inbox_id: string;
  date: string;
}

async function findMessags(inbox_id: string) {
  const { userId } = await verifySession();

  try {
    const response = await fetch(`${base_url}/inboxes/${inbox_id}/messages`, {
      method: "GET",
      headers: {
        "User-Id": userId.toString(), // Passing the User-Id in the headers
        "Content-Type": "application/json", // Optional: If you are expecting JSON response
      },
    });

    if (!response.ok)
      throw new Error(`Failed to fetch messages: ${response.status}`);
    const messages = await response.json();
    return messages;
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
}

const InboxItemWrapper = async ({
  inbox_name,
  inbox_id,
  date,
}: InboxItemProp) => {
  const messages = await findMessags(inbox_id);

  const messagesLength = messages.length;
  return (
    <>
      <InboxItem
        inbox_name={inbox_name}
        inbox_id={inbox_id}
        messages={messagesLength}
        date={date}
      />
    </>
  );
};

export default InboxItemWrapper;
