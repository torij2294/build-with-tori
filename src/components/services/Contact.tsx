'use client';

import { useState, useRef } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  projectType: {
    website: boolean;
    mobileApp: boolean;
    landingPage: boolean;
  };
  description: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    projectType: {
      website: false,
      mobileApp: false,
      landingPage: false,
    },
    description: ''
  });
  const [status, setStatus] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const statusRef = useRef<HTMLParagraphElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        projectType: {
          ...prev.projectType,
          [name]: checkbox.checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Submitting...');
    setIsSubmitting(true);

    setTimeout(() => {
      statusRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }, 100);

    try {
      const response = await fetch('/api/services-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Submission successful!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          projectType: {
            website: false,
            mobileApp: false,
            landingPage: false,
          },
          description: ''
        });

        setTimeout(() => {
          statusRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }, 100);
      } else {
        const errorData = await response.text();
        console.error('Submission Error:', errorData);
        setStatus('Submission failed. Please try again later.');
      }
    } catch (err) {
      console.error('Fetch Error:', err);
      setStatus('Submission failed. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="px-6 py-12 relative">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-5xl font-medium text-red-900 font-playfair-display">
          Are you ready to have some fun<br />and grow your business?
        </h2>
        <p className="text-lg text-neutral-500 font-source-sans-3 max-w-2xl mx-auto">
          I can't wait to hear about your idea! Please fill out the client application form below and we'll get back to you asap.
        </p>
      </div>

      <div className="max-w-2xl mx-auto relative">
        <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
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

          <div className="space-y-3">
            <p className="text-neutral-500 font-medium">What are you looking to build?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="website"
                  checked={formData.projectType.website}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-neutral-400 text-black focus:ring-black accent-black"
                />
                <span className="text-neutral-500">Website</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="mobileApp"
                  checked={formData.projectType.mobileApp}
                  onChange={handleChange}
                  className="w-5 h-5 border-neutral-400 text-black focus:ring-black accent-black"
                />
                <span className="text-neutral-500">Mobile App</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="landingPage"
                  checked={formData.projectType.landingPage}
                  onChange={handleChange}
                  className="w-5 h-5 border-neutral-400 text-black focus:ring-black accent-black"
                />
                <span className="text-neutral-500">$400 Landing Page</span>
              </label>
            </div>
          </div>

          <div className="relative rounded-none overflow-hidden border border-neutral-400 focus-within:ring-2 focus-within:ring-red-900">
            <textarea
              name="description"
              placeholder="Tell me about your idea..."
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-3 min-h-[150px] text-base placeholder-neutral-400 bg-white focus:outline-none resize-none block"
              required
            />
          </div>

          <div className="relative">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-none text-lg font-medium transition-opacity
                ${isSubmitting
                  ? 'bg-neutral-400 cursor-not-allowed'
                  : 'bg-red-900 hover:bg-opacity-90'
                } text-white`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>

          {status && (
            <p
              ref={statusRef}
              className="text-center text-lg font-medium text-neutral-500"
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
} 