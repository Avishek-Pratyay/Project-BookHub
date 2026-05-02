"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "@/lib/auth";

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const user = getUser();

    if (!user) {
      router.push("/login");
    }
  }, []);

  return children;
}