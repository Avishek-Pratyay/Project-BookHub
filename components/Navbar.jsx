"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // 🔥 LIVE AUTH SYNC — Better Auth handles this automatically via useSession
  const { data: session } = useSession();
  const user = session?.user || null;

  // LOGOUT
  const logout = async () => {
    await signOut();
    router.push("/");
  };

  const navClass = (path) =>
    `px-3 py-2 rounded-lg transition ${
      pathname === path
        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
        : "hover:bg-base-200"
    }`;

  return (
    <div className="navbar bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-md px-6">

      {/* LOGO */}
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold text-white">
          📚 BookHub
        </Link>
      </div>

      {/* CENTER NAV */}
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-6 font-medium">

        <Link href="/" className={navClass("/")}>
          Home
        </Link>

        <Link href="/books" className={navClass("/books")}>
          Books
        </Link>

        <Link href="/profile" className={navClass("/profile")}>
          Profile
        </Link>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 ml-auto">

        {user ? (
          <>
            <span className="hidden md:block text-sm text-gray-300">
              {user.email || user.name}
            </span>

            <button
              onClick={logout}
              className="btn btn-error btn-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className="btn btn-primary btn-sm">
            Login
          </Link>
        )}

      </div>

    </div>
  );
}
