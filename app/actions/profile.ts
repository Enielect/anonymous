"use server";

import { verifySession } from "@/lib/dal";
import { passwordSchema } from "@/lib/definitions";
import { deleteSession } from "@/lib/session";
import { base_url } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function removeEmptyStringProperties(formData: FormData): FormData {
  const cleanedFormData = new FormData();

  formData.forEach((value, key) => {
    if (value !== "") {
      cleanedFormData.append(key, value);
    }
  });

  return cleanedFormData;
}

export async function editProfileAction(prev: any, formData: FormData) {
  const resultData = removeEmptyStringProperties(formData);
  const entries = Object.fromEntries(resultData.entries());

  const payload = await verifySession();

  try {
    const response = await fetch(`${base_url}/users/${payload.userId}`, {
      method: "PUT",
      body: JSON.stringify(entries),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      revalidatePath("/profile");
      return { message: "Profile updated successfully" };
    }
    const user = await response.json();
    return { message: user.message };
  } catch (e) {
    throw new Error("Edit profile failed");
  }
}

export async function editUserPasswordAction(prev: any, formData: FormData) {
  const entries = Object.fromEntries(formData.entries());
  const validatedFields = passwordSchema.safeParse(entries);

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const payload = await verifySession();

  try {
    const user = await fetch(`${base_url}/users/${payload.userId}`, {
      method: "PUT",
      body: JSON.stringify(entries),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await user.json();
    if (!response.ok) throw new Error("Failed to edit password");
  } catch (e) {
    throw new Error("Edit profile failed");
  }

  revalidatePath("/profile");
  return { message: "Password updated successfully" };
}

export async function logOutUser() {
  deleteSession();

  redirect("/login");
}

export async function deleteUser() {
  const { userId } = await verifySession();
  try {
    const response = await fetch(`${base_url}/users/${userId}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("failed to delete user");
    deleteSession();
    console.log("user successfully deleted");
  } catch (err) {
    console.log(err, "failed to delete user now");
  }

  redirect("/login");
}
