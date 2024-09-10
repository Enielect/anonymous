import InboxMessages from "@/components/Inbox/InboxMessages";
import { verifySession } from "@/lib/dal";
import { base_url } from "@/lib/utils";

async function Inbox({ params }: { params: { id: string } }) {
  const { userId } = await verifySession();
  const inbox = await fetch(`${base_url}/inboxes/${params.id}/messages`, {
    method: "GET", // HTTP method
    headers: {
      "User-Id": userId.toString(), // Convert userId to string
      "Content-Type": "application/json", // Optional: If you are expecting JSON response
    },
  });
  const inboxMessages = await inbox.json();

  const userInbox = await fetch(`${base_url}/inboxes/${params.id}`)
    .then((res) => res.json())
    .then((data) => data);
  return (
    <div>
      <InboxMessages inboxName={userInbox.name} inboxMessages={inboxMessages} />
    </div>
  );
}

export default Inbox;
