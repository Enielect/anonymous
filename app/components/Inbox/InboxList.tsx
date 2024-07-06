import { InboxData } from "@/app/utils/DummyData";
import React from "react";
import InboxItem from "@/app/components/Inbox/InboxItem";

const InboxList = () => {
  return (
    <div className="w-full space-y-4">
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
