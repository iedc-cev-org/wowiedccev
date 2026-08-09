"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Preloader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Show preloader on every route change
    setLoading(true);
    setFade(false);
    
    // Lock body scroll while loading
    document.body.style.overflow = "hidden";
    
    // Faster preloader for subsequent page navigations
    const duration = isFirstLoad ? 2500 : 1200;
    if (isFirstLoad) {
      setIsFirstLoad(false);
    }
    
    // Start fading out
    const timer = setTimeout(() => {
      setFade(true);
      document.body.style.overflow = "auto";
      
      // Remove from DOM entirely after the transition completes
      setTimeout(() => setLoading(false), 800);
    }, duration);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [pathname]); // Re-trigger effect when pathname changes

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] ${fade ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="relative flex flex-col items-center justify-center w-64 h-64">
        {/* Animated Rings */}
        <div className="absolute inset-0 m-auto w-48 h-48 rounded-full border border-lilac/30 border-t-crimson border-l-crimson animate-spin-slow"></div>
        <div className="absolute inset-0 m-auto w-40 h-40 rounded-full border border-plum/20 border-b-plum border-r-plum animate-spin-reverse-slow"></div>
        
        {/* Colorized Logo via Mask */}
        <div 
          className="h-16 md:h-20 w-48 md:w-56 bg-gradient-to-r from-crimson to-lilac animate-pulse"
          style={{
            maskImage: 'url(/logo.png)',
            WebkitMaskImage: 'url(/logo.png)',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
          }}
          role="img"
          aria-label="WOW Logo Loading"
        />
      </div>
      
      {/* Loading Text & Bouncing Dots */}
      <div className="mt-8 flex flex-col items-center gap-3">
        <span className="font-heading text-3xl font-bold text-plum tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-plum to-crimson animate-pulse">
          Women of Wonders
        </span>
        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-crimson animate-bounce shadow-sm" style={{ animationDelay: '0s' }}></span>
          <span className="w-2.5 h-2.5 rounded-full bg-lilac animate-bounce shadow-sm" style={{ animationDelay: '0.15s' }}></span>
          <span className="w-2.5 h-2.5 rounded-full bg-plum animate-bounce shadow-sm" style={{ animationDelay: '0.3s' }}></span>
        </div>
      </div>
    </div>
  );
}
