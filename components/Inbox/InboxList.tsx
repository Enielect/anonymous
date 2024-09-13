import React from "react";
import InboxItemWrapper from "./InboxItemWrapper";

type InboxData = {
  id: string;
  name: string;
  created_at: string;
};

type InboxListProps = {
  allInboxes: InboxData[];
};
const InboxList = ({ allInboxes }: InboxListProps) => {
  return (
    <div className=" bg-[#151515] min-h-[calc(100dvh-11.5rem)] px-6 py-3 space-y-4">
      {allInboxes.map((inbox) => (
        <InboxItemWrapper
          key={inbox.id}
          inbox_id={inbox.id}
          inbox_name={inbox.name}
          date={inbox.created_at}
        />
      ))}
    </div>
  );
};

export default InboxList;
