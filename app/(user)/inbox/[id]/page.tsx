import InboxMessages from "@/components/Inbox/InboxMessages";
import { verifySession } from "@/lib/dal";
import { base_url } from "@/lib/utils";

async function fetchInboxMessages(userId: string, inbox_id: string) {
  try {
    const inbox = await fetch(`${base_url}/inboxes/${inbox_id}/messages`, {
      method: "GET", 
      headers: {
        "User-Id": userId.toString(), // Convert userId to string
        "Content-Type": "application/json", 
      },
    });
    const inboxMessages = await inbox.json();
    return inboxMessages;
  } catch (error) {
    if (error instanceof TypeError && error.message.includes("Network error")) {
      console.log("Network error", error);
    } else console.error("Error fetching inbox messages", error);
  }
}

async function Inbox({ params }: { params: { id: string } }) {
  const { userId } = await verifySession();
  const inboxMessages = await fetchInboxMessages(userId.toString(), params.id);

  const userInbox = await fetch(`${base_url}/inboxes/${params.id}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.error("Error fetching inbox", error));
  return (
    <div>
      <InboxMessages inboxName={userInbox.name} inbox_id={params.id} inboxMessages={inboxMessages} />
    </div>
  );
}

export default Inbox;
