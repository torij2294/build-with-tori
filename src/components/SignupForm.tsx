import Image from 'next/image';

export default function SignupForm() {
  return (
    <div className="w-full px-6">
      <div className="bg-[#d1ed9f] rounded-[32px] border border-black shadow-lg p-6">
        <div className="flex items-center gap-4">
          <Image
            src="/lightbulb-icon.png"
            alt="Lightbulb icon"
            width={48}
            height={48}
          />
          <h2 className="text-[20px] font-semibold text-[#2D2D2D] font-poppins">
            Got an idea? Share it and let's build together!
          </h2>
        </div>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 border border-black rounded-full text-[16px] placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#9fe6ed] font-dm-sans"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-3 border border-black rounded-full text-[16px] placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#9fe6ed] font-dm-sans"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-black rounded-full text-[16px] placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#9fe6ed] font-dm-sans"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#9fe6ed] text-[#2D2D2D] py-2 px-6 rounded-full border border-black text-[16px] font-medium hover:opacity-90 transition-opacity mt-6 font-dm-sans"
          >
            Get Access
          </button>
        </form>
      </div>
    </div>
  );
} 