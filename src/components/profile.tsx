"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Profile() {
  const session = useSession();
  if (session.data?.user) {
    return (
      <div>
        <h1>User sign in!</h1>
        {/* {session.data?.user?.image && (
          <Image
            src={session.data.user.image}
            alt="User Profile Image"
            width={400}
            height={400}
          />
        )} */}
        <p>{session.data.user.name}</p>
        <p>{session.data.user.email}</p>
      </div>
    );
  }
  return (
    <div>
      <h1>User is not sign in!</h1>
    </div>
  );
}
