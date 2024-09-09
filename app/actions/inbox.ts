"use server";

import { verifySession } from "@/lib/dal";
import { base_url } from "@/lib/utils";
import { redirect } from "next/navigation";
import { z } from "zod";

async function createInbox(submitData: string) {
  const { userId } = await verifySession();
  console.log(userId);

  const response = await fetch(`${base_url}/users/${userId}/inboxes`, {
    method: "POST",
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

export async function deleteInbox(inboxId: string) {
  try {
    const response = await fetch(`${base_url}/inboxes/${inboxId}`, {
      method: "DELETE",
    });
  } catch (err) {
    throw new Error("Inbox deletion failed");
  }
}
