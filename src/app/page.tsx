import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-black grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20  sm:p-20 font-[family-name:var(--font-noto-sans)]">
      <header className="row-start-1 flex items-center justify-between w-full max-w-[1200px] px-2 py-5">
        <div className="flex items-center gap-18">
        <h1 className="text-4xl font-bold">Jitter</h1>
       <nav className="flex items-center gap-8">
          <a href="/about" className="text-base text-black hover:text-gray-500 font-semibold">
            Products
          </a>    
          <a href="/contact" className="text-base text-black hover:text-gray-500 font-semibold">
            Customers
          </a>
          <a href="/privacy" className="text-base text-black hover:text-gray-500 font-semibold">
            Templates
          </a>
          <a href="/terms" className="text-base text-black hover:text-gray-500 font-semibold">
            Pricing
          </a>
       </nav>
        </div>
        <div className="flex items-center gap-4">
          <a href="/login" className="text-lg font-bold text-white hover:text-gray-700 bg-black px-7 py-3 rounded-full">
            My Files
          </a>
       </div>
      </header >
    </div>
  );
}
