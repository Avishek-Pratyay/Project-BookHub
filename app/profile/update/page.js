"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient, useSession } from "@/lib/auth-client";

export default function UpdateProfile() {
  const router = useRouter();
  const { data: session } = useSession();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);

  // Pre-fill form with current user data from session
  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setPhoto(session.user.image || "");
    }
  }, [session]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await authClient.updateUser({
      name,
      image: photo,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Update failed");
      return;
    }

    toast.success("Profile updated");
    router.push("/profile");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">

      <form
        onSubmit={handleUpdate}
        className="card w-96 p-6 bg-white shadow-xl space-y-4"
      >

        <h1 className="text-xl font-bold text-center">
          Update Profile
        </h1>

        <input
          className="input input-bordered w-full"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="input input-bordered w-full"
          placeholder="Image URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />

        <button className="btn btn-primary w-full" disabled={loading}>
          {loading ? "Updating..." : "Update Information"}
        </button>

      </form>

    </div>
  );
}