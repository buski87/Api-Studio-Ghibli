"use client";

export default function SearchBar({ onSearch }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Buscar por título..."
        className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-black dark:text-white"
      />
    </div>
  );
}
