import { InboxData } from "@/utils/DummyData";
import React from "react";
import InboxItem from "@/components/Inbox/InboxItem";

const InboxList = () => {
  return (
    <div className="w-full bg-[#151515] px-6 space-y-4">
      {InboxData.map((inbox) => (
        <InboxItem
          key={inbox.id}
          inbox_name={inbox.name}
          messages={inbox.messageCount}
          date={inbox.dateCreated}
        />
      ))}
    </div>
  );
};

export default InboxList;
