"use server";

import { base_url } from "@/lib/utils";

export async function sendMessage(id: string, prev: any, formData: FormData) {
  const responseBody = { body: formData.get("body") };

  try {
    const response = await fetch(`${base_url}/inboxes/${id}/messages`, {
      method: "POST",
      body: JSON.stringify(responseBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Failed to create message");
    const data = await response.json();
    return { message: data.created_at };
  } catch (error) {
    console.log(error);
    return { error: "Failed to send message" };
  }
}
