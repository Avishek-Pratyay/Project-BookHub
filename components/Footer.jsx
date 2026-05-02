"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  BookOpen,
  User,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <BookOpen /> BookHub
          </h2>

          <p className="text-sm text-gray-300 mt-3">
            A modern online book borrowing platform for students and readers.
            Explore and borrow books easily anytime.
          </p>

          {/* FAKE SOCIAL ICON STYLE (SAFE VERSION) */}
          <div className="flex gap-3 mt-5 text-gray-300">

            <Globe className="hover:text-blue-400 cursor-pointer" />
            <User className="hover:text-green-400 cursor-pointer" />
            <BookOpen className="hover:text-yellow-400 cursor-pointer" />

          </div>
        </div>

        {/* CONTACT */}
        <div>

          <h3 className="text-lg font-semibold mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 text-sm text-gray-300">

            <p className="flex items-center gap-2">
              <Mail size={16} /> support@bookhub.com
            </p>

            <p className="flex items-center gap-2">
              <Phone size={16} /> +880 1234 567890
            </p>

            <p className="flex items-center gap-2">
              <MapPin size={16} /> Sylhet, Bangladesh
            </p>

          </div>

        </div>

        {/* LINKS */}
        <div>

          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2 text-sm text-gray-300">

            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/books" className="hover:text-primary">Books</Link>
            <Link href="/profile" className="hover:text-primary">Profile</Link>
            <Link href="/login" className="hover:text-primary">Login</Link>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} BookHub. All rights reserved.
      </div>

    </footer>
  );
}