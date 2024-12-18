import Image from 'next/image';
import { IoArrowForward } from "react-icons/io5";

export default function ServicesHero() {
  return (
    <div className="px-6 py-12">
      <div className="flex flex-col-reverse md:flex-row items-center gap-16">
        <div className="w-full md:w-2/5">
          <div className="w-full aspect-square relative rounded-none overflow-hidden border border-black shadow-lg">
            <Image
              src="/services-hero.jpg"
              alt="Services illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="w-full md:w-3/5 space-y-6">
          <h1 className="text-[42px] leading-tight font-semibold text-[#2D2D2D] font-playfair-display">
            Bespoke Websites and Apps tailored to your vision
          </h1>
          <button 
            className="w-fit px-8 py-4 border border-black text-[18px] font-medium font-source-sans-3 
            transition-all duration-200 hover:bg-red-950 hover:bg-opacity-90 hover:text-white inline-flex items-center justify-center gap-3"
          >
            Let&apos;s Build Together
            <IoArrowForward className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
} 