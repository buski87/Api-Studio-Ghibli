export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white text-sm font-medium text-center py-6 shadow-inner mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-white font-semibold">
          © {new Date().getFullYear()} <span className="text-cyan-300">Buski87</span> · Proyecto fan de Studio Ghibli
        </p>
        <p className="text-gray-300 text-xs mt-1">
          Esta web no está afiliada oficialmente con Studio Ghibli.
        </p>
      </div>
    </footer>
  );
}
