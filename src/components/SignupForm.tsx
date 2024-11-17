"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function SignupForm() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', idea: '' });
  const [status, setStatus] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Submission successful!');
        setFormData({ firstName: '', lastName: '', email: '', idea: '' });
      } else {
        console.error('Submission Error:', await response.json());
        setStatus('Submission failed. Please try again later.');
      }
    } catch (err) {
      console.error('Fetch Error:', err);
      setStatus('Submission failed. Please try again later.');
    }
  };

  return (
    <>
      <div className="w-full px-6 pb-12">
        <div className="bg-[#d1ed9f] rounded-[32px] border border-black shadow-lg p-6">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/lightbulb-icon.png"
              alt="Lightbulb icon"
              width={70}
              height={70}
            />
            <h2 className="text-[18px] font-semibold text-[#2D2D2D] font-poppins leading-tight">
              Got an idea? Share it and let&apos;s build together!
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-black rounded-full text-[16px] placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#9fe6ed] font-dm-sans"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-black rounded-full text-[16px] placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#9fe6ed] font-dm-sans"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-black rounded-full text-[16px] placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#9fe6ed] font-dm-sans"
                required
              />
            </div>
            <div className="relative rounded-[32px] overflow-hidden border border-black bg-white focus-within:ring-2 focus-within:ring-[#9fe6ed]">
              <textarea
                name="idea"
                placeholder="Share your idea here..."
                value={formData.idea}
                onChange={handleChange}
                className="w-full px-4 pr-8 py-3 min-h-[150px] max-h-[300px] overflow-y-auto resize-none text-[16px] placeholder-gray-400 bg-white focus:outline-none font-dm-sans scrollbar-thin scrollbar-thumb-black/20 scrollbar-track-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#9fe6ed] text-[#2D2D2D] py-4 px-6 rounded-full border border-black text-[16px] font-medium hover:opacity-90 transition-opacity mt-6 font-dm-sans"
            >
              Get Access
            </button>
            {status && (
              <p className="text-center mt-4 text-[16px] font-medium">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
      
      <div className="w-full px-6">
        <a 
          href="https://www.terris.io/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full bg-[#f4a7fa] text-[#2D2D2D] py-6 px-6 rounded-full border border-black text-[20px] font-medium hover:opacity-90 transition-opacity text-center font-dm-sans"
        >
          Sign-up for Terris&apos; waitlist
        </a>
      </div>
    </>
  );
} 