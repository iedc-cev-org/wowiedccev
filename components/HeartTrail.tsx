"use client";

import { useEffect, useState } from "react";

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
}

// Colors perfectly matched to the WOW theme
const colors = ["#C2183B", "#B79CED", "#8D7A95", "#ff8fa3", "#ffb3c6"];

export default function HeartTrail() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Throttle particle creation (max 1 heart every 60ms)
      if (now - lastTime < 60) return;
      lastTime = now;

      // Randomize offset so they don't spawn strictly in a straight line
      const offsetX = (Math.random() - 0.5) * 24;
      const offsetY = (Math.random() - 0.5) * 24;

      const newHeart: Heart = {
        id: now + Math.random(),
        x: e.clientX + offsetX,
        y: e.clientY + offsetY,
        size: Math.random() * 12 + 10, // 10px to 22px
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 60 - 30, // -30deg to 30deg
      };

      setHearts((prev) => [...prev, newHeart]);

      // Remove the heart after the animation completes (1000ms)
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Prevent hydration errors by not rendering until mounted
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up-fade"
          style={{
            left: heart.x,
            top: heart.y,
            color: heart.color,
            fontSize: `${heart.size}px`,
            textShadow: '0 2px 4px rgba(43,35,44,0.1)',
            // Custom CSS variable for dynamic rotation in keyframes
            ['--r' as string]: heart.rotation,
          }}
        >
          ❤
        </div>
      ))}
    </div>
  );
}
