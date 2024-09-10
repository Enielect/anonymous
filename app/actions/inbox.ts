"use server";

import { verifySession } from "@/lib/dal";
import { base_url } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

async function createInbox(submitData: string) {
  const { userId } = await verifySession();
  console.log(userId);

  const response = await fetch(`${base_url}/users/${userId}/inboxes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: submitData,
  });
}

const CreateInboxSchema = z.object({
  inboxName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
});

export async function createInboxAction(prev: any, formData: FormData) {
  const entries = Object.fromEntries(formData.entries());
  const submitData = JSON.stringify({ name: entries.inboxName });
  console.log(entries);
  const validatedFields = CreateInboxSchema.safeParse(entries);

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  try {
    await createInbox(submitData);
  } catch (e) {
    throw new Error("Inbox creation failed");
  }

  redirect("/inbox");
}

/*Learn from this*/

export async function deleteInbox(inboxId: string) {
  const { userId } = await verifySession();
  try {
    const response = await fetch(`${base_url}/inboxes/${inboxId}`, {
      method: "DELETE",
      headers: {
        "User-Id": userId.toString(),
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to delete inbox: ${response.status}`);
    }

    const data = await response.json();
    // Handle the JSON response here
    console.log("Inbox deleted successfully:", data);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error("Error parsing JSON response:", error);
      // Handle the specific SyntaxError
    } else {
      console.error("Error deleting inbox:", error);
    }
  }

  revalidatePath("/inbox");
}

