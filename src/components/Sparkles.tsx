import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  top: number;
  left: number;
  delay: number;
  size: number;
}

export default function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const newSparkles: Sparkle[] = [];

    for (let i = 0; i < 20; i++) {
      newSparkles.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        size: 2 + Math.random() * 4,
      });
    }

    setSparkles(newSparkles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDelay: `${sparkle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
