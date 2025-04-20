import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden mb-12">
      <img
        src="/images/banner.png"
        alt="Ghibli Banner"
        className="absolute w-full h-full object-cover brightness-[1.0]"
      />
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Explora el Mundo Ghibli
        </h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl drop-shadow">
          Encuentra tus películas favoritas y disfruta del universo mágico de Studio Ghibli.
        </p>
        <Link
          href="/films"
          className="bg-cyan-400 text-black px-6 py-3 font-semibold rounded hover:bg-cyan-300 transition"
        >
          🎬 Ver películas
        </Link>
      </div>
    </section>
  );
}