import React from "react";
import ProfileContent from "@/components/Profile/ProfileContent";
import { verifySession } from "@/lib/dal";
import { base_url } from "@/lib/utils";

const Profile = async () => {
  const { userId } = await verifySession();
  const { username, email } = await fetch(`${base_url}/users/${userId}`)
    .then((res) => res.json())
    .then((data) => ({ username: data.username, email: data.email }));
  return (
    <div className="h-[calc(100vh-57px)]">
      <ProfileContent username={username} email={email} />
    </div>
  );
};

export default Profile;
