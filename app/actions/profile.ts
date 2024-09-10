"use server";

import { verifySession } from "@/lib/dal";
import { SignUpSchema, passwordSchema } from "@/lib/definitions";
import { deleteSession } from "@/lib/session";
import { base_url } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type ObjectShape = {
  username: string;
  email: string;
};

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
  console.log(entries);

  // const validatedFields = SignUpSchema.safeParse(entries);

  // if (!validatedFields.success) {
  //   return { errors: validatedFields.error.flatten().fieldErrors };
  // }

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
    console.log(response);
    return { message: response.message };
  } catch (e) {
    throw new Error("Edit profile failed");
  }

  revalidatePath("/profile");

  // redirect("/profile");
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
    console.log(response);
  } catch (e) {
    throw new Error("Edit profile failed");
  }

  revalidatePath("/profile");

  // redirect("/profile");
}

export async function logOutUser() {
  await deleteSession();

  redirect("/login");
}

export async function deleteUser() {
  const { userId } = await verifySession();
  try {
    const response = await fetch(`${base_url}/users/${userId}`);

    if (!response.ok) throw new Error("failed to delete user");

    const data = await response.json();
    console.log("user successfully deleted", data);
  } catch (err) {
    console.log(err);
  }

  redirect("/login");
}
