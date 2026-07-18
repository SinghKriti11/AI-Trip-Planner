function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-5 bg-slate-900 border-b border-slate-800">

      <h1 className="text-2xl font-bold text-cyan-400">
        ✈ AI Trip Planner
      </h1>

      <button
        className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg transition"
      >
        Get Started
      </button>

    </nav>
  );
}

export default Navbar;