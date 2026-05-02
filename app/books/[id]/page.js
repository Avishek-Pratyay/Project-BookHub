"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import books from "@/data/books.json";
import toast from "react-hot-toast";

export default function BookDetails() {
  const { id } = useParams();
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [book, setBook] = useState(null);

  useEffect(() => {
    // load user safely
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.push("/login");
      return;
    }

    setUser(JSON.parse(storedUser));

    // find book
    const found = books.find((b) => b.id == id);
    setBook(found);
  }, [id, router]);

  if (!book) return <p className="p-6">Loading...</p>;

  const handleBorrow = () => {
    toast.success("Book borrowed successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-10">

      {/* IMAGE */}
      <img
        src={book.image_url}
        className="rounded-xl shadow-md w-full"
      />

      {/* DETAILS */}
      <div className="space-y-4">

        <h1 className="text-3xl font-bold">{book.title}</h1>
        <p className="text-gray-500">Author: {book.author}</p>
        <p>{book.description}</p>

        <p className="font-semibold">
          Category: {book.category}
        </p>

        <p className="text-green-600">
          Available: {book.available_quantity}
        </p>

        <button
          onClick={handleBorrow}
          className="btn btn-primary"
        >
          Borrow This Book
        </button>

      </div>

    </div>
  );
}