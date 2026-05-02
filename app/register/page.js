"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !photo || !password) {
      toast.error("All fields required");
      return;
    }

    toast.success("Registration successful");

    router.push("/login");
  };

  const handleGoogleRegister = () => {
    toast.success("Google registration successful");
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">

      <form
        onSubmit={handleRegister}
        className="card w-96 p-6 bg-white shadow-xl space-y-4"
      >

        <h1 className="text-2xl font-bold text-center">Register</h1>

        <input
          className="input input-bordered w-full"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="input input-bordered w-full"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input input-bordered w-full"
          placeholder="Photo URL"
          onChange={(e) => setPhoto(e.target.value)}
        />

        <input
          className="input input-bordered w-full"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-full">
          Register
        </button>

        {/* GOOGLE REGISTER */}
        <button
          type="button"
          onClick={handleGoogleRegister}
          className="btn bg-red-500 text-white w-full"
        >
          Continue with Google
        </button>

        <p className="text-center text-sm">
          Already have account?{" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>

      </form>

    </div>
  );
}