import Image from 'next/image';

export default function ServicesAbout() {
    return (
        <div className="relative">
            <div className="hidden md:block absolute top-0 left-1/2 w-px h-full bg-black -translate-x-1/2"/>
            <div className="px-6 py-12">
                <div className="flex flex-col md:flex-row relative">

                    <div className="w-full md:w-1/2 space-y-4 md:pr-8">
                        <h2 className="text-[24px] font-medium text-[#2D2D2D] font-playfair-display">
                            Hi, I'm Tori
                        </h2>
                        <p className="text-[16px] leading-relaxed text-[#2D2D2D] font-source-sans-3">
                            I help founders build custom websites and apps.
                            <br />
                            <br />
                            Whether you’re launching your first startup or running a small business, you deserve a website or app you’re excited to share. You deserve a digital experience that feels like you —modern, functional, and built to stand out. That’s where I come in.
                            <br />
                            <br />
                            My work is about more than code. It’s about giving you a digital space that reflects your vision and helps your business flourish—so you can focus on what you do best.
                            <br />
                            <br />
                            Let’s create something you’ll be proud to show off.{' '}
                            <br />
                            <br />
                            <a 
                                href="#contact" 
                                className="text-red-900 underline italic hover:text-black"
                            >
                                Get in touch
                            </a>
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 h-[400px] relative md:pl-8 mt-8 md:mt-0">
                        <div className="w-full h-full relative rounded-none overflow-hidden border border-black shadow-lg">
                            <Image
                                src="/about-image.jpg"
                                alt="About section image"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 