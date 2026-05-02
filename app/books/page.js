"use client";

import { useState } from "react";
import books from "../../data/books.json";
import Link from "next/link";

export default function BooksPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // FILTER LOGIC
  const filteredBooks = books.filter((book) => {
    const matchTitle = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory = category
      ? book.category === category
      : true;

    return matchTitle && matchCategory;
  });

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">

      {/* ================= SIDEBAR ================= */}
      <div className="w-full md:w-1/4 space-y-4">

        <h2 className="text-xl font-bold">Filter by Category</h2>

        <button
          onClick={() => setCategory("")}
          className="btn btn-sm w-full"
        >
          All
        </button>

        <button
          onClick={() => setCategory("Story")}
          className="btn btn-sm btn-primary w-full"
        >
          Story
        </button>

        <button
          onClick={() => setCategory("Tech")}
          className="btn btn-sm btn-secondary w-full"
        >
          Tech
        </button>

        <button
          onClick={() => setCategory("Science")}
          className="btn btn-sm btn-accent w-full"
        >
          Science
        </button>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="w-full md:w-3/4 space-y-6">

        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search books by title..."
          className="input input-bordered w-full"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* BOOK GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div
                key={book.id}
                className="card bg-base-100 shadow-md"
              >
                <figure>
                  <img
                    src={book.image_url}
                    alt={book.title}
                    className="h-48 w-full object-cover"
                  />
                </figure>

                <div className="card-body">
                  <h2 className="card-title text-lg">
                    {book.title}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {book.author}
                  </p>

                  <p className="text-xs">
                    Category: {book.category}
                  </p>

                  <Link
                    href={`/books/${book.id}`}
                    className="btn btn-primary btn-sm mt-2"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No books found 😢
            </p>
          )}

        </div>
      </div>
    </div>
  );
}