"use server";

import { verifySession } from "@/lib/dal";
import { SignUpSchema } from "@/lib/definitions";
import { base_url } from "@/lib/utils";
import { redirect } from "next/navigation";

export async function editProfileAction(prev: any, formData: FormData) {
  const entries = Object.fromEntries(formData.entries());
  const validatedFields = SignUpSchema.safeParse(entries);

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const payload = await verifySession();

  try {
    const user = await fetch(`${base_url}/users/${payload.userId}`, {
      method: "PUT",
      body: formData,
    });
    const response = await user.json();
  } catch (e) {
    throw new Error("Edit profile failed");
  }

  // redirect("/profile");
}
