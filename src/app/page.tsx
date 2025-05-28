import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <div className="bg-white text-black items-center flex flex-col justify-items-center min-h-screen p-4 pb-20  sm:p-20 font-[family-name:var(--font-noto-sans)]">
    <Navbar/>
    <section className="pt-20 w-full flex flex-col items-center justify-center gap-10"> 
      <div className="bg-gray-100 rounded-full py-2 px-4 ">
        <h4 className="capitalize"> <span className="uppercase font-bold">new: </span>infinite canvas <span className="text-purple-500 font-bold">Learn more</span></h4>
      </div>
      <div className="py-4">
        <h1 className="font-bold text-8xl text-center">Super fast motion <br /> for every team</h1>
      </div>
      <button className="bg-purple-400 font-bold py-4 px-8 rounded-full">Try Jitter for free!</button>
    </section>
   </div>
  );
}
