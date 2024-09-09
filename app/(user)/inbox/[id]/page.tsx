import InboxMessages from "@/components/Inbox/InboxMessages";
import { base_url } from "@/lib/utils";

async function Inbox({ params }: { params: { id: string } }) {
  const inbox = await fetch(`${base_url}/inboxes/${params.id}/messages`);
  const inboxMessages = await inbox.json();
  return (
    <div>
      <InboxMessages inboxMessages={inboxMessages} />
    </div>
  );
}

export default Inbox;
