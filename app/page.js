import books from "@/data/books.json";
import Link from "next/link";

export default function Home() {
  const featuredBooks = books.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* HERO SECTION */}
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Find Your Next Read 📚
        </h1>

        <p className="text-gray-500 mt-4">
          Explore, borrow, and enjoy books instantly from our digital library.
        </p>

        <Link
          href="/books"
          className="btn bg-indigo-500 hover:bg-indigo-600 text-white mt-6"
        >
          Browse Now
        </Link>
      </div>

      {/* MARQUEE */}
      <div className="bg-base-200 py-2 px-4 rounded-lg mb-10">
        <marquee>
          📢 New Arrivals: The Silent Patient | Atomic Habits | Clean Code | Harry Potter |
          Special Discount on Memberships Available Now!
        </marquee>
      </div>

      {/* FEATURED BOOKS */}
      <h2 className="text-2xl font-bold mb-6">Featured Books</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {featuredBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white border rounded-xl shadow hover:shadow-lg transition p-4"
          >
            <img
              src={book.image_url}
              alt={book.title}
              className="h-48 w-full object-cover rounded-lg"
            />

            <h3 className="font-bold mt-3">{book.title}</h3>
            <p className="text-sm text-gray-500">{book.author}</p>

            <Link
              href={`/books/${book.id}`}
              className="btn btn-sm bg-indigo-500 hover:bg-indigo-600 text-white mt-3 w-full"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* EXTRA SECTION 1 */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose BookHub?</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold text-lg">📚 Huge Collection</h3>
            <p className="text-sm text-gray-500 mt-2">
              Access 12+ curated books across Story, Tech, and Science.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold text-lg">⚡ Instant Access</h3>
            <p className="text-sm text-gray-500 mt-2">
              Borrow books instantly with one click system.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold text-lg">🔒 Secure Login</h3>
            <p className="text-sm text-gray-500 mt-2">
              Protected authentication system with BetterAuth.
            </p>
          </div>

        </div>
      </div>

      {/* EXTRA SECTION 2 */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold">1. Create Account</h3>
            <p className="text-sm text-gray-500 mt-2">
              Register and login to access library.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold">2. Explore Books</h3>
            <p className="text-sm text-gray-500 mt-2">
              Search or browse from 12 curated books.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold">3. Borrow Instantly</h3>
            <p className="text-sm text-gray-500 mt-2">
              Click borrow and enjoy reading instantly.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}