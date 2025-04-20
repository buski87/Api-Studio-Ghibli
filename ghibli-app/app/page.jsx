"use client";
import Banner from "@/components/Banner";
export default function Home({ searchParams }) {

  return (
    <div className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] min-h-screen text-white">
      <section className="px-4 text-center bg-transparent">
        <Banner />
      </section>
    </div>
  );
}
