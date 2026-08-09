"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
  ];

  return (
    <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4 transition-transform duration-300 ${!isOpen ? 'animate-float-delayed' : ''}`}>
      <nav className={`px-6 py-4 md:px-8 bg-alabaster/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(183,156,237,0.2),inset_-2px_-2px_6px_rgba(43,35,44,0.05),inset_2px_2px_6px_rgba(255,255,255,0.8)] ${
        isOpen ? "rounded-3xl" : "rounded-full"
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
            <div 
              className="h-10 md:h-12 w-32 md:w-40 transition-transform duration-300 group-hover:scale-105 bg-gradient-to-r from-crimson to-lilac"
              style={{
                maskImage: 'url(/logo.png)',
                WebkitMaskImage: 'url(/logo.png)',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'left center',
                WebkitMaskPosition: 'left center',
              }}
              role="img"
              aria-label="WOW Logo"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-10 font-sans font-medium text-mauve">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`hover:text-crimson transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-crimson after:transition-all hover:after:w-full ${pathname === link.href ? 'text-crimson after:w-full' : 'after:w-0'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Call to Action */}
          <div className="hidden md:block">
            <Link 
              href="https://iedc.cev.ac.in/join"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-plum to-lilac transition-all hover:scale-105 shadow-md hover:shadow-[0_4px_15px_rgba(183,156,237,0.5)] cursor-pointer"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Icon Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-plum hover:text-crimson transition-colors focus:outline-none cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-mauve/20 mt-4 flex flex-col gap-3">
            <ul className="flex flex-col gap-2 font-sans font-medium text-mauve">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={`block py-2.5 px-4 rounded-2xl transition-all ${
                      pathname === link.href 
                        ? 'bg-plum/10 text-crimson font-semibold' 
                        : 'hover:bg-plum/5 hover:text-crimson'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link 
                href="https://iedc.cev.ac.in/join"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block text-center w-full px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-plum to-lilac transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Join Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

