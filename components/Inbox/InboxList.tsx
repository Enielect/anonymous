import { InboxData } from "@/utils/DummyData";
import React from "react";
import { base_url } from "@/lib/utils";
import InboxItem from "@/components/Inbox/InboxItem";
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
    <div className="w-full bg-[#151515] h-full px-6 space-y-4">
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
