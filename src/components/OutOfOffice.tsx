import Image from 'next/image';

export default function OutOfOffice() {
  return (
    <div className="flex flex-col px-6 pt-8">
      <div className="w-[164px] h-[164px] relative flex justify-center items-center mb-6">
        <Image
          src="/tori-profile.png"
          alt="Tori"
          width={164}
          height={164}
          className="rounded-full flex justify-center items-center object-cover shadow-lg border border-black"
          priority
        />
      </div>
      <div className="space-y-2">
        {/* <h1 className="text-[42px] leading-tight font-semibold text-[#2D2D2D] font-playfair-display">
          Hi, I&apos;m Tori.
        </h1> */}
        <p className="text-[16px] leading-tight font-semibold text-[#2D2D2D] font-playfair-display">
        Hi founders! Thank you so much for your incredible support and interest in my free app-building program!
        </p>
        <p className="text-[#2D2D2D] text-[14px] mt-2">
        I’m deeply grateful to be part of your journey as a founder. The response has been truly overwhelming, with so many amazing ideas pouring in.
            <br/>
            <br/>
        To ensure I can give each idea and founder the time and attention they deserve, I’ve decided to pause submissions for now. The page will reopen in late February, and I can’t wait to see even more incredible ideas then!
            <br/>
            <br/>
            In the meantime, if you’d like to hire me to build your app,&nbsp;
            <a href="services/#contact" className="text-red-900 underline italic hover:text-black">
            please click here.
            </a>
            <br/>
            <br/>
            The income I receive through paid projects and partnerships helps make this free program possible, allowing me to continue giving back to founders who need it most.
            <br/>
            <br/>
    Thank you for your understanding and for being part of this amazing community!
<br/>
<br/>
    Yours in tech,
    <br/>
    Tori
      </p>
      </div>
    </div>
  );
}