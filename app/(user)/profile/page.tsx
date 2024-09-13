import React from "react";
import ProfileContent from "@/components/Profile/ProfileContent";
import { verifySession } from "@/lib/dal";
import { base_url } from "@/lib/utils";

async function fetchUserData() {
  const { userId } = await verifySession();
  try {
    const response = await fetch(`${base_url}/users/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to Fetch user");
    }
    const data = await response.json();
    return { username: data.username, email: data.email };
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
}

const Profile = async () => {
  const userData = await fetchUserData();
  return (
    <div className="min-[500px]:h-[100dvh] h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-57px)]">
      <ProfileContent username={userData?.username} email={userData?.email} />
    </div>
  );
};

export default Profile;
