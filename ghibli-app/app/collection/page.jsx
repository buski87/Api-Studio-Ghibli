import { Suspense } from "react";
import MisPeliculas from "@/components/MisPeliculas";

export default function CollectionPage() {
  return (
    <main className="min-h-screen text-white px-4 py-12 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <h1 className="text-4xl font-extrabold text-white mb-10 text-center uppercase tracking-wider">
        Mis Películas
      </h1>
      <Suspense fallback={<div className="text-center text-white py-20">Cargando películas...</div>}>
        <MisPeliculas />
      </Suspense>
    </main>
  );
}
