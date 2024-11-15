import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-6">
      <Link href="/" className="text-xl font-semibold text-[#2D2D2D]">
        @buildwithtori
      </Link>
    </nav>
  );
} 