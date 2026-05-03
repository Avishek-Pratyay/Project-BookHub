"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signIn } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    const { error } = await signIn.email({ email, password });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Login failed");
      return;
    }

    toast.success("Login successful");
    router.push("/");
  };

  // Google OAuth login via Better Auth
  const handleGoogleLogin = async () => {
    const { error } = await signIn.social({ provider: "google" });

    if (error) {
      toast.error(error.message || "Google login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">

      <form
        onSubmit={handleLogin}
        className="card w-96 p-6 bg-white shadow-xl space-y-4"
      >

        <h1 className="text-2xl font-bold text-center">Login</h1>

        <input
          className="input input-bordered w-full"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input input-bordered w-full"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-full" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* GOOGLE LOGIN */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="btn bg-red-500 text-white w-full"
        >
          Continue with Google
        </button>

        {/* LINK TO REGISTER */}
        <p className="text-center text-sm mt-2">
          No account?{" "}
          <a href="/register" className="text-blue-500">
            Register
          </a>
        </p>

      </form>

    </div>
  );
}