import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col px-6 pt-8">
      <div className="w-[164px] h-[164px] relative mb-6">
        <Image
          src="/tori-profile.jpg"
          alt="Tori"
          width={164}
          height={164}
          className="rounded-full object-cover border-4 border-white shadow-lg"
          priority
        />
      </div>
      <div className="space-y-2 mb-12">
        <h1 className="text-[38px] leading-tight font-semibold text-[#2D2D2D] font-poppins">
          Hi, I'm Tori.
        </h1>
        <p className="text-[28px] leading-tight font-semibold text-[#2D2D2D] max-w-[280px] font-poppins">
          I help founders build applications.
        </p>
      </div>
    </div>
  );
} 