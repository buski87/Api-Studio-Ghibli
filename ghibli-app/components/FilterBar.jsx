"use client";

export default function FilterBar({ onFilter, directors = [], years = [] }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-wrap gap-6 mb-8 justify-start items-end">
      {/* Selector de Director */}
      <div className="flex flex-col">
        <label
          htmlFor="director"
          className="text-xs text-cyan-300 mb-2 uppercase tracking-wider font-semibold"
        >
          Director
        </label>
        <select
          id="director"
          name="director"
          onChange={handleChange}
          className="p-2 rounded-md bg-[#1f1f1f] text-white border border-cyan-500 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
        >
          <option value="">Todos</option>
          {directors.map((dir) => (
            <option key={dir} value={dir}>
              {dir}
            </option>
          ))}
        </select>
      </div>

      {/* Selector de Año */}
      <div className="flex flex-col">
        <label
          htmlFor="year"
          className="text-xs text-cyan-300 mb-2 uppercase tracking-wider font-semibold"
        >
          Año
        </label>
        <select
          id="year"
          name="year"
          onChange={handleChange}
          className="p-2 rounded-md bg-[#1f1f1f] text-white border border-cyan-500 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
        >
          <option value="">Todos</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
