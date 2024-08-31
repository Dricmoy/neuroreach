// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center px-6 md:px-12 lg:px-24 bg-gradient-to-b from-green-50 to-green-100 text-gray-800">
      <header className="text-center mb-12 mt-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-700 mb-4 tracking-tight">
          Neuroscience Hub
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-xl mx-auto">
          Bridging students and professionals in the field of neuroscience.
        </p>
      </header>

      <section className="w-full max-w-3xl py-8 bg-white shadow-md rounded-lg mb-10 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Upcoming Events</h2>
        <p className="text-gray-600 mb-4">
          Stay tuned for the latest neuroscience events, workshops, and seminars.
        </p>
        <Link href="/events">
          <span className="text-green-600 hover:text-green-500 font-medium transition-colors cursor-pointer">
            View All Events →
          </span>
        </Link>
      </section>

      <section className="w-full max-w-3xl py-8 bg-white shadow-md rounded-lg mb-10 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Ask a Neuroscience Student</h2>
        <p className="text-gray-600 mb-4">
          Have questions about neuroscience? Our experienced students are here to help.
        </p>
        <Link href="/ask">
          <span className="text-green-600 hover:text-green-500 font-medium transition-colors cursor-pointer">
            Submit Your Question →
          </span>
        </Link>
      </section>

      <section className="w-full max-w-3xl py-8 bg-white shadow-md rounded-lg mb-10 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Join Us</h2>
        <p className="text-gray-600 mb-4">
          Become part of our community and explore diverse opportunities in neuroscience.
        </p>
        <Link href="/join">
          <span className="text-green-600 hover:text-green-500 font-medium transition-colors cursor-pointer">
            Join Now →
          </span>
        </Link>
      </section>

      <footer className="w-full max-w-3xl text-center py-6 mt-auto border-t border-gray-200">
        <p className="text-sm text-gray-500">&copy; 2024 Neuroscience Hub. All rights reserved.</p>
        <nav className="mt-4 flex justify-center space-x-6">
          <Link href="/opportunities">
            <span className="text-green-600 hover:text-green-500 font-medium transition-colors cursor-pointer">
              Opportunities
            </span>
          </Link>
          <Link href="/about">
            <span className="text-green-600 hover:text-green-500 font-medium transition-colors cursor-pointer">
              About Us + Contact
            </span>
          </Link>
        </nav>
      </footer>
    </main>
  );
}
