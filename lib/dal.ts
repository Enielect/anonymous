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
  const user = await fetch(`${base_url}/login`, {
    method: "POST",
    body: formData,
  });

  const response = await user.json();

  // handle specific case where the user is found
  if (user.status === 200) {
    if (!session?.userId && session) deleteSession();
    await createSession(response.id);
    return;
  }

  // in the case where an invalid credentials was provides I returned a specific messaage
  if (user.status === 400) {
    return { message: response.message, status: user.status };
  }

  // then i threw every other error
  throw new Error("Network Error");
});
