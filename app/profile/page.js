"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    setUser(data ? JSON.parse(data) : null);
  }, []);

  if (!user) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-xl font-bold">Please login first</h1>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow p-6 rounded-xl">

      <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      <img
        src={user.photo || "https://i.ibb.co/2Wz5F8r/user.png"}
        className="w-24 h-24 rounded-full mb-4"
      />

      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>

      {/* UPDATE BUTTON */}
      <Link
        href="/profile/update"
        className="btn btn-primary mt-6"
      >
        Update Information
      </Link>

    </div>
  );
}