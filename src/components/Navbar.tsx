'use client';
import Link from 'next/link';
import { useState } from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-6 relative">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold text-[#2D2D2D]">
          @buildwithtori
        </Link>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <IoMdClose className="w-6 h-6 text-[#2D2D2D]" />
          ) : (
            <IoMdMenu className="w-6 h-6 text-[#2D2D2D]" />
          )}
        </button>
      </div>

      {/* Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-2 mr-6 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="py-2">
            <Link 
              href="/" 
              className="block px-4 py-2 text-[#2D2D2D] hover:bg-neutral-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Submission
            </Link>
            <Link 
              href="/services" 
              className="block px-4 py-2 text-[#2D2D2D] hover:bg-neutral-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 