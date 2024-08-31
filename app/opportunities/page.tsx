export default function Opportunities() {
    return (
      <main className="flex flex-col min-h-screen items-center justify-center px-6 md:px-12 lg:px-24 bg-gradient-to-b from-green-50 to-green-100 text-gray-800">
        <header className="text-center mb-12 mt-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-700 mb-4 tracking-tight">
            Opportunities
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-xl mx-auto">
            Explore various opportunities to get involved and make an impact.
          </p>
        </header>
  
        <section className="w-full max-w-3xl py-8 bg-white shadow-md rounded-lg mb-10 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Current Openings</h2>
          {/* Example opportunity */}
          <div className="mb-8 p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-green-700">Volunteer Opportunities</h3>
            <p className="text-gray-600">Help out at our events and gain valuable experience.</p>
          </div>
          {/* Repeat for more opportunities */}
        </section>
      </main>
    );
  }
  