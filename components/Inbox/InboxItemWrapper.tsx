import React from "react";
import InboxItem from "./InboxItem";
import { base_url } from "@/lib/utils";

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
  const inbox = await fetch(`${base_url}/inboxes/${inbox_id}/messages`);
  const response = await inbox.json();
  console.log(response)
  const messages = response.length;
  return (
    <>
      <InboxItem inbox_name={inbox_name} inbox_id={inbox_id} messages={messages} date={date} />
    </>
  );
};

export default InboxItemWrapper;
