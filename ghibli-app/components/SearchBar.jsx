"use client";

export default function SearchBar({ onSearch }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="🔍 Buscar por título..."
        className="w-full p-3 rounded-lg border border-cyan-500 bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
      />
    </div>
  );
}
