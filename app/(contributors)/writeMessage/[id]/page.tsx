import { base_url } from "@/lib/utils";
import MessageWrapper from "../component/MessageWrapper";

type Props = {
  params: { id: string };
};

async function fetchInboxName(id: string) {
  try {
    const response = await fetch(`${base_url}/inboxes/${id}`);
    if (!response.ok) throw new Error("Failed to fetch inbox name");
    const data = await response.json();
    return { name: data.name };
  } catch (err) {
    console.error(err);
  }
}

export default async function MessageInput({ params }: Props) {
  const id = params.id;
  const inbox_result = await fetchInboxName(id);
  const inbox_name = inbox_result?.name;
  return <MessageWrapper id={id} inboxName={inbox_name} />;
}
