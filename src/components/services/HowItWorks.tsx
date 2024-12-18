import React from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Exploration Process",
    description: "We'll kick things off with a friendly conversation to dive into your goals and vision. Whether it's a brand-new website, an app, or both, we'll discuss the design, features, and functionality you need. This is where I learn about your business, your audience, and what success looks like for you."
  },
  {
    number: 2,
    title: "Design Approval",
    description: "After our initial chat, I'll create a thoughtful design tailored to your vision. You'll get to see how your website or app will look and feel, and we'll refine it together with one round of edits to make sure it's perfect. Once you give me the green light, I'll roll up my sleeves and start building"
  },
  {
    number: 3,
    title: "Build Phase",
    description: "This is where the magic happens. I'll develop your website or app from the ground up, ensuring it's functional, scaleable, and user-friendly. Every detail—front-end visuals to back-end functionality—will be designed to make your project shine."
  },
  {
    number: 4,
    title: "Final Review",
    description: "Your website or app is ready for you to see in action. We'll do one final round of edits to ensure everything aligns with your expectations and vision."
  },
  {
    number: 5,
    title: "Launch!",
    description: "Your project is live! Whether it's a user-friendly website or an app hitting the app store, you'll get everything you need to confidently share it with the world."
  }
];

export default function HowItWorks() {
  return (
    <div className="px-6 py-12 lg:px-32">
      <h2 className="text-5xl text-center font-medium text-red-900 font-playfair-display mb-12">
        Here&apos;s how it works...
      </h2>
      <div className="relative">
        <div className="absolute left-[25px] top-[40px] bottom-[40px] w-px bg-neutral-400" />
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-6">
              <div className="relative">
                <div className="w-[50px] h-[50px] rounded-full border border-neutral-500 flex items-center justify-center bg-white">
                  <span className="text-[20px] font-medium">{step.number}</span>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-[24px] font-medium text-[#2D2D2D] font-playfair-display mb-2">
                  {step.title}
                </h3>
                <p className="text-[16px] leading-relaxed text-neutral-500 font-source-sans-3">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 