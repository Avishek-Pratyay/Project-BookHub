"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const { data: session } = useSession();
  const user = session?.user || null;

  const logout = async () => {
    await signOut();
    setMenuOpen(false);
    router.push("/");
  };

  const navClass = (path) =>
    `px-3 py-2 rounded-lg transition ${
      pathname === path
        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
        : "hover:bg-base-200 hover:text-black"
    }`;

  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-md px-6">

      {/* ── MAIN ROW ── */}
      <div className="navbar px-0">

        {/* LOGO */}
        <div className="flex-1">
          <Link href="/" className="text-2xl font-bold text-white">
            📚 BookHub
          </Link>
        </div>

        {/* CENTER NAV — hidden on mobile */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 font-medium">
          <Link href="/" className={navClass("/")}>Home</Link>
          <Link href="/books" className={navClass("/books")}>Books</Link>
          <Link href="/profile" className={navClass("/profile")}>Profile</Link>
        </div>

        {/* RIGHT — desktop */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          {user ? (
            <>
              <span className="text-sm text-gray-300">
                {user.name}
              </span>
              <button onClick={logout} className="btn btn-error btn-sm">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          )}
        </div>

        {/* HAMBURGER — mobile only */}
        <button
          className="md:hidden ml-auto text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* ── MOBILE DROPDOWN MENU ── */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-2 pb-4 font-medium">

          <Link href="/" className={navClass("/")} onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link href="/books" className={navClass("/books")} onClick={() => setMenuOpen(false)}>
            All Books
          </Link>

          <Link href="/profile" className={navClass("/profile")} onClick={() => setMenuOpen(false)}>
            Profile
          </Link>

          <div className="border-t border-slate-700 pt-3 mt-1">
            {user ? (
              <>
                <p className="text-sm text-gray-400 mb-2">{user.name}</p>
                <button onClick={logout} className="btn btn-error btn-sm w-full">
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="btn btn-primary btn-sm w-full"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>

        </div>
      )}

    </div>
  );
}
