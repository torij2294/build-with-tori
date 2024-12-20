'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isServicesPage = pathname === '/services';

  return (
    <nav className="p-6 relative z-50">
      <div className="flex justify-between items-center">
        <Link href="/services" className="text-xl font-semibold text-[#2D2D2D]">
          @buildwithtori
        </Link>

        <div className="flex items-center gap-4">
          {isServicesPage && (
            <a href="#contact">
              <button className="px-6 py-2 border border-black text-[16px] font-medium font-source-sans-3 bg-red-900 text-white
                transition-all duration-200 hover:bg-opacity-80">
                Inquire
              </button>
            </a>
          )}

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
      </div>

      {/* Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-2 mr-6 w-48 bg-white rounded-none shadow-lg border border-black">
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