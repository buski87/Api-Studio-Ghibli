'use client';

import { Suspense } from "react";
import FilmsContent from "@/components/FilmsContent";

export default function FilmsPage() {
  return (
    <Suspense fallback={<div className="text-white text-center py-20">Cargando películas...</div>}>
      <FilmsContent />
    </Suspense>
  );
}
