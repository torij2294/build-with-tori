import Image from 'next/image';
import { IoArrowForward } from "react-icons/io5";

export default function ServicesHero() {
  return (
    <div className="px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-16">
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

        <div className="w-full md:w-3/5 space-y-4">
          <h1 className="text-[42px] leading-tight pb-6 font-semibold text-[#2D2D2D] font-playfair-display">
            Bespoke Websites and Apps tailored to your vision
          </h1>
          <a href="#contact">
            <button
              className="w-fit px-8 py-4 border border-black text-[18px] font-medium font-source-sans-3 italic
              transition-all duration-200 hover:bg-red-900 hover:bg-opacity-90 hover:text-white inline-flex items-center justify-center gap-3"
            >
              Let&apos;s Build Together
              <IoArrowForward className="text-xl" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
} 