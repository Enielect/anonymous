import React from "react";
import { Loader2 } from "lucide-react";

const InboxLoading = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <Loader2 className="size-12 animate-spin" />
    </div>
  );
};

export default InboxLoading;
