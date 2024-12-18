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
        const errorData = await response.text();
        console.error('Submission Error:', errorData);
        setStatus('Submission failed. Please try again later.');
      }
    } catch (err) {
      console.error('Fetch Error:', err);
      setStatus('Submission failed. Please try again later.');
    }
  };

  return (
    <div className="px-6 py-12">
      <div className="max-w-2xl mx-auto border border-black rounded-none p-8 shadow-sm bg-white">
        <div className="text-center mb-8 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/lightbulb-icon-2.png"
              alt="Lightbulb icon"
              width={75}
              height={75}
            />
            <h2 className="text-base font-medium pr-8 text-left text-[#2D2D2D] font-source-sans-3">
              Share your idea with me and let&apos;s create something amazing together!
            </h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="px-4 py-3 border border-neutral-400 rounded-none text-base placeholder-neutral-400 bg-white focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="px-4 py-3 border border-neutral-400 rounded-none text-base placeholder-neutral-400 bg-white focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-400 rounded-none text-base placeholder-neutral-400 bg-white focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
            required
          />

          <div className="relative rounded-none overflow-hidden border border-neutral-400 focus-within:ring-2 focus-within:ring-red-900">
            <textarea
              name="idea"
              placeholder="Share your idea here..."
              value={formData.idea}
              onChange={handleChange}
              className="w-full px-4 py-3 min-h-[150px] text-base placeholder-neutral-400 bg-white focus:outline-none resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-900 text-white py-4 px-6 rounded-none text-lg font-medium hover:bg-opacity-90 transition-opacity"
          >
            Submit
          </button>

          {status && (
            <p className="text-center text-lg font-medium text-neutral-500">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
} 