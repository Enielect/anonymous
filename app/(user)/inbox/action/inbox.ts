"use server";

import { verifySession } from "@/lib/dal";
import { base_url } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export async function editInboxName(
  inbox_id: string,
  prev: any,
  formData: FormData
) {
  const entries = Object.fromEntries(formData.entries());
  const { userId } = await verifySession();
  try {
    const response = await fetch(`${base_url}/inboxes/${inbox_id}`, {
      method: "PUT",
      headers: {
        "User-Id": userId.toString(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entries),
    });

    if (!response.ok) throw new Error("Failed to Edit inbox name");
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/inbox");

  return { message: "success" };
}
