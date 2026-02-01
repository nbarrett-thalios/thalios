export default function Navbar() {
  return (
    <header className="fixed w-full z-50 backdrop-blur-xl bg-black/5 border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Thalios Logo" className="h-10 w-auto" />
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2dd4bf] to-[#38bdf8]">
                Thalios
              </span>
              <span className="text-2xl font-bold text-white">.ai</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
