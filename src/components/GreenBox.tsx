import Image from 'next/image'

export default function GreenBox() {
  return (
    <div className="bg-[#DCFCE7] rounded-lg p-6 mt-6">
      <div className="flex items-center gap-2">
        <Image
          src="/lightbulb-icon.png"
          alt="Lightbulb icon"
          width={24}
          height={24}
        />
        <h2 className="text-[#166534] text-xl font-semibold">Got an idea...</h2>
      </div>
      <p className="text-[#166534] mt-2">
        Share your thoughts and ideas with us. We would love to hear from you!
      </p>
    </div>
  )
} 