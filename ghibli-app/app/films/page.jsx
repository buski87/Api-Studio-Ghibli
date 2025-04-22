import { Suspense } from "react";
import dynamic from "next/dynamic";

const FilmsContent = dynamic(() => import('@/components/FilmsContent'), { ssr: false });

export default function FilmsPage() {
  return (
    <Suspense fallback={<div className="text-white text-center py-20">Cargando películas...</div>}>
      <FilmsContent />
    </Suspense>
  );
}
