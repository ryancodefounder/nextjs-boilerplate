// pages/index.tsx (Next.js + Tailwind)

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Now Anyone Can Instantly Peek Inside Any Home 🏡
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          Just enter an address and get a beautiful, AI-powered summary of that property: value, photos, price history, and more. No more clunky Zillow browsing.
        </p>
        <div className="w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email to join the waitlist"
            className="w-full p-4 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            Join the Waitlist
          </button>
        </div>
      </section>

      <section className="px-6 py-10 bg-gray-100 text-left">
        <h2 className="text-3xl font-bold mb-4">What is HomePeek?</h2>
        <ul className="list-disc ml-6 text-lg space-y-2">
          <li>🏠 See property value and photos instantly by entering an address</li>
          <li>📍 Use GPS to look up nearby homes while driving</li>
          <li>📸 Gorgeous summaries, perfect for social sharing or quick research</li>
          <li>💬 AI-generated descriptions, price history, comps, and more</li>
          <li>👤 Create a “Saved Homes” list for tracking or investment</li>
        </ul>
      </section>

      <section className="px-6 py-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Sneak Peek Demo</h2>
        <div className="w-full max-w-3xl mx-auto mb-6">
          <div className="bg-gray-200 h-64 flex items-center justify-center rounded-xl text-gray-600">
            [Demo video or screenshot coming soon]
          </div>
        </div>
        <p className="text-gray-600">Your new favorite real estate sidekick is coming soon.</p>
      </section>

      <footer className="px-6 py-8 text-sm text-center text-gray-500">
        © 2025 HomePeek • Built with love for home enthusiasts • <a href="#" className="underline">Privacy</a>
      </footer>
    </main>
  );
}
