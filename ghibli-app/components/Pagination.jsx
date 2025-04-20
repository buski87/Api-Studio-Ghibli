import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Pagination({ currentPage, totalPages }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-10 flex-wrap">
      {Array.from({ length: totalPages }).map((_, i) => {
        const pageNum = i + 1;
        const isActive = currentPage === pageNum;

        const params = new URLSearchParams(searchParams);
        params.set("page", pageNum);

        return (
          <Link
            key={pageNum}
            href={`${pathname}?${params.toString()}`}
            className={`px-4 py-2 rounded-full text-sm font-bold transition duration-300 ${
              isActive
                ? "bg-cyan-400 text-black border-2 border-cyan-500 shadow-lg scale-105"
                : "bg-gray-800 text-white hover:bg-cyan-300 hover:text-black hover:scale-105"
            }`}
          >
            {pageNum}
          </Link>
        );
      })}
    </div>
  );
}
