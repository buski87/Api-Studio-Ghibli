export default function LoadingSpinner() {
  return (
    <div className="flex flex-col justify-center items-center py-16 text-cyan-400">
      <div className="animate-spin rounded-full h-14 w-14 border-4 border-cyan-400 border-t-transparent mb-4"></div>
      <p className="text-sm font-semibold uppercase tracking-widest">
        Cargando películas...
      </p>
    </div>
  );
}
