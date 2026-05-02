"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdateProfile() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setName(user.name || "");
      setPhoto(user.photo || "");
    }
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    const oldUser = JSON.parse(localStorage.getItem("user"));

    const updatedUser = {
      ...oldUser,
      name,
      photo,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    toast.success("Profile updated");

    // 🔥 refresh navbar/profile instantly
    window.dispatchEvent(new Event("storage"));

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

        <button className="btn btn-primary w-full">
          Update Information
        </button>

      </form>

    </div>
  );
}