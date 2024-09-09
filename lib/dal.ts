import { cookies } from "next/headers";
import { cache } from "react";
import "server-only";
import { createSession, decrypt, updateSessiion } from "./session";
import { redirect } from "next/navigation";
import { base_url } from "./utils";

export const verifySession = cache(async () => {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) redirect("/login");
  return { isAuth: true, userId: session.userId };
});

export const getUser = cache(async (formData: FormData) => {
  const session = await verifySession();

  if (!session) return null;

  try {
    const user = await fetch(`${base_url}/login`, {
      method: "POST",
      body: formData,
    });
    const response = await user.json();

    if (response.id === session.userId) updateSessiion();
    else createSession(response.id);
  } catch (error) {
    throw new Error("Invalid credentials");
  }
});
