"use client";

export default function FilterBar({ onChange, directors = [], years = [] }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="flex flex-wrap gap-6 mb-8 justify-start items-end">
      <div className="flex flex-col">
        <label htmlFor="director" className="text-xs text-cyan-300 mb-2 uppercase font-semibold">
          Director
        </label>
        <select
          id="director"
          name="director"
          onChange={handleChange}
          className="p-2 rounded-md bg-[#1f1f1f] text-white border border-cyan-500"
        >
          <option value="">Todos</option>
          {directors.map((dir) => (
            <option key={dir} value={dir}>{dir}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="year" className="text-xs text-cyan-300 mb-2 uppercase font-semibold">
          Año
        </label>
        <select
          id="year"
          name="year"
          onChange={handleChange}
          className="p-2 rounded-md bg-[#1f1f1f] text-white border border-cyan-500"
        >
          <option value="">Todos</option>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
