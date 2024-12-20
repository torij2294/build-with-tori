import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col px-6 pt-8">
      <div className="w-[164px] h-[164px] relative mb-6">
        <Image
          src="/tori-profile.png"
          alt="Tori"
          width={164}
          height={164}
          className="rounded-full object-cover shadow-lg border border-black"
          priority
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-[42px] leading-tight font-semibold text-[#2D2D2D] font-playfair-display">
          Hi, I&apos;m Tori.
        </h1>
        <p className="text-[28px] leading-tight font-semibold text-[#2D2D2D] max-w-[280px] font-playfair-display">
          I help founders build applications.
        </p>
      </div>
    </div>
  );
} 