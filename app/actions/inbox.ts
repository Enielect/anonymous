"use server";

import { verifySession } from "@/lib/dal";
import { base_url } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

async function createInbox(submitData: string) {
  const { userId } = await verifySession();
  console.log(userId);

  try {
    const response = await fetch(`${base_url}/users/${userId}/inboxes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: submitData,
    });

    if (!response.ok) {
      throw new Error(`Failed to create inbox: ${response.status}`);
    }

    const data = await response.json();
    console.log("Inbox created successfully:", data);
  } catch (error) {
    console.error("Error creating inbox:", error);
  }
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
  const validatedFields = CreateInboxSchema.safeParse(entries);

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  try {
    await createInbox(submitData);
  } catch (e) {
    throw new Error("Inbox creation failed");
  }

  revalidatePath("/inbox");
  return { message: "success" };
}

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
    console.log("Inbox deleted successfully:", data);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error("Error parsing JSON response:", error);
      // I received a syntax error sometimes when trying to parse the response, but the inbox was still deleted.
      // So I just specifically handle the case where the error is a SyntaxError.
    } else {
      console.error("Error deleting inbox:", error);
    }
  }

  revalidatePath("/inbox");
  redirect("/inbox");
}
