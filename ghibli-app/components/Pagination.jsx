// components/Pagination.jsx
import Link from "next/link";

export default function Pagination({ currentPage, totalPages }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-10 flex-wrap">
      {Array.from({ length: totalPages }).map((_, i) => {
        const pageNum = i + 1;
        return (
          <Link
            key={pageNum}
            href={`/?page=${pageNum}`}
            className={`px-4 py-2 rounded text-sm ${
              currentPage === pageNum
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {pageNum}
          </Link>
        );
      })}
    </div>
  );
}
