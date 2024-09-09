"use server";

import { getUser } from "@/lib/dal";
import { FormState, LoginSchema, SignUpSchema } from "@/lib/definitions";
import { createSession, updateSessiion } from "@/lib/session";
import { base_url } from "@/lib/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(prev: any, formData: FormData) {
  const entries = Object.fromEntries(formData.entries());
  console.log(entries);
  const validatedFields = LoginSchema.safeParse(entries);

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  try {
    await getUser(formData);
  } catch (e) {
    // throw new Error("Invalid credentials");
    console.log(e);
    return {message: ["Invalid credentials"]  };
  }
  redirect("/");
}

export async function signUpAction(prev: any, formData: FormData) {
  const entries = Object.fromEntries(formData.entries());
  const validatedFields = SignUpSchema.safeParse(entries);

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  try {
    const user = await fetch(`${base_url}/register`, {
      method: "POST",
      body: formData,
    });
    const response = await user.json();
    await createSession(response.id);
  } catch (e) {
    throw new Error("Sign up failed");
  }

  redirect("/");
}