"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4 animate-float-delayed">
      <nav className="rounded-full px-6 py-4 md:px-8 flex items-center justify-between bg-alabaster/60 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(183,156,237,0.2),inset_-2px_-2px_6px_rgba(43,35,44,0.05),inset_2px_2px_6px_rgba(255,255,255,0.8)]">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl transition-transform duration-300 group-hover:rotate-12" role="img" aria-label="sparkles">✨</span>
          <span className="font-heading font-bold text-2xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-plum to-crimson">
            WOW
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-10 font-sans font-medium text-mauve">
          <li>
            <Link 
              href="/" 
              className={`hover:text-crimson transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-crimson after:transition-all hover:after:w-full ${pathname === '/' ? 'text-crimson after:w-full' : 'after:w-0'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`hover:text-crimson transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-crimson after:transition-all hover:after:w-full ${pathname === '/about' ? 'text-crimson after:w-full' : 'after:w-0'}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/events" 
              className={`hover:text-crimson transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-crimson after:transition-all hover:after:w-full ${pathname === '/events' ? 'text-crimson after:w-full' : 'after:w-0'}`}
            >
              Events
            </Link>
          </li>
          <li>
            <Link 
              href="/team" 
              className={`hover:text-crimson transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-crimson after:transition-all hover:after:w-full ${pathname === '/team' ? 'text-crimson after:w-full' : 'after:w-0'}`}
            >
              Team
            </Link>
          </li>
        </ul>

        {/* Call to Action */}
        <div className="hidden md:block">
          <button className="px-6 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-plum to-lilac transition-all hover:scale-105 shadow-md hover:shadow-[0_4px_15px_rgba(183,156,237,0.5)]">
            Join Us
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-plum text-2xl hover:text-crimson transition-colors">
          ☰
        </button>
      </nav>
    </div>
  );
}
