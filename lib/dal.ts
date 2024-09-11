import "server-only";

import { cookies } from "next/headers";
import { cache } from "react";
import "server-only";
import { createSession, decrypt, deleteSession } from "./session";
import { redirect } from "next/navigation";
import { base_url } from "./utils";

export const verifySession = cache(async () => {
  const cookie = cookies().get("session")?.value; 
  const session = await decrypt(cookie);

  if (!session?.userId) redirect("/login");
  return { isAuth: true, userId: session.userId };
});

export const getUser = cache(async (formData: FormData) => {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);
  try {
    const user = await fetch(`${base_url}/login`, {
      method: "POST",
      body: formData,
    });
    const response = await user.json();

    // if (!response.ok) throw new Error("Failed to fetch user");

    if (!session?.userId && session) deleteSession();
    await createSession(response.id);
  } catch (error) {
    if (error instanceof TypeError && error.message.includes("Network error"))
      console.error("Failed to fetch user:", error);
    throw new Error("Invalid credentials");
  }
});
