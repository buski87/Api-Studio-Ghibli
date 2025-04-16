"use client";

export default function FilterBar({ onFilter }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        name="director"
        onChange={handleChange}
        className="p-2 border rounded bg-white dark:bg-gray-900 dark:border-gray-700 text-sm"
      >
        <option value="">Todos los directores</option>
        <option value="Hayao Miyazaki">Hayao Miyazaki</option>
        <option value="Isao Takahata">Isao Takahata</option>
        <option value="Gorō Miyazaki">Gorō Miyazaki</option>
      </select>

      <select
        name="year"
        onChange={handleChange}
        className="p-2 border rounded bg-white dark:bg-gray-900 dark:border-gray-700 text-sm"
      >
        <option value="">Todos los años</option>
        <option value="1986">1986</option>
        <option value="1988">1988</option>
        <option value="1997">1997</option>
        <option value="2001">2001</option>
        <option value="2013">2013</option>
      </select>
    </div>
  );
}
