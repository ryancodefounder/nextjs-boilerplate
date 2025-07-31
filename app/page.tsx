export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-10 font-sans">
      <nav className="flex justify-between items-center max-w-6xl mx-auto py-4">
        <h1 className="text-2xl font-bold text-blue-600">Homepeek</h1>
        <div className="space-x-4">
          <a href="/explore" className="text-gray-700 hover:text-blue-600">Explore</a>
          <a href="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</a>
          <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</a>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto text-center py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Instantly see any home's value and history.
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Enter an address and get a beautiful summary — pricing, photos, and nearby comps.
        </p>
        <a href="/explore" className="bg-blue-600 text-white px-6 py-3 rounded text-lg hover:bg-blue-700">
          Try Homepeek
        </a>
      </section>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
        <div>
          <h3 className="text-xl font-semibold mb-2">📍 Instant Lookups</h3>
          <p className="text-gray-600">Type an address and get immediate details, pricing history, and neighborhood data.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">📷 Beautiful Property Cards</h3>
          <p className="text-gray-600">Auto-generated summaries with photos, estimates, and AI-powered insights.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">📬 Save & Share</h3>
          <p className="text-gray-600">Bookmark homes you love, export reports, or share them with friends and clients.</p>
        </div>
      </section>

      <footer className="text-center text-gray-400 py-10">
        © {new Date().getFullYear()} Homepeek. Built for the curious.
      </footer>
    </main>
  );
}

