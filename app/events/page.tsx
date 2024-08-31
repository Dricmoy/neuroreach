import Link from 'next/link';

export default function Events() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center px-6 md:px-12 lg:px-24 bg-gradient-to-b from-green-50 to-green-100 text-gray-800">
      <header className="text-center mb-12 mt-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-700 mb-4 tracking-tight">
          Upcoming Events
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-xl mx-auto">
          Check out our upcoming events, workshops, and seminars.
        </p>
      </header>

      <section className="w-full max-w-3xl py-8 bg-white shadow-md rounded-lg mb-10 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Events</h2>
        {/* Example event */}
        <div className="mb-8 p-4 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-green-700">Neuroscience Seminar</h3>
          <p className="text-gray-600">Date: September 15, 2024</p>
          <p className="text-gray-600">Location: Auditorium A</p>
          <p className="mt-2">Join us for an in-depth seminar on recent advances in neuroscience.</p>
        </div>
        {/* Repeat for more events */}
        <Link href="/" className="text-green-600 hover:text-green-500 font-medium transition-colors cursor-pointer">
          Back to Home →
        </Link>
      </section>
    </main>
  );
}
