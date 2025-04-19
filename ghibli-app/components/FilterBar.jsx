"use client";

export default function FilterBar({ onFilter, directors = [], years = [] }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        name="director"
        onChange={handleChange}
        className="p-2 border rounded bg-white dark:bg-gray-900 dark:border-gray-700 text-sm text-black dark:text-white"
      >
        <option value="">Todos los directores</option>
        {directors.map((dir) => (
          <option key={dir} value={dir}>{dir}</option>
        ))}
      </select>

      <select
        name="year"
        onChange={handleChange}
        className="p-2 border rounded bg-white dark:bg-gray-900 dark:border-gray-700 text-sm text-black dark:text-white"
      >
        <option value="">Todos los años</option>
        {years.map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
    </div>
  );
}
