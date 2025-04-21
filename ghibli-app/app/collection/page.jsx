'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import MisPeliculas from '@/components/MisPeliculas';

export default function MisPeliculasPage() {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const router = useRouter();
  const pathname = usePathname();

  const handlePageChange = (pageNum) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNum);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <main className="min-h-screen text-white px-4 py-12 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <h1 className="text-4xl font-extrabold text-white mb-10 text-center uppercase tracking-wider">
        Mis Películas
      </h1>
      <MisPeliculas currentPage={currentPage} onPageChange={handlePageChange} />
    </main>
  );
}
