import { useEffect, useState } from 'react';

interface FloatingHeart {
  id: number;
  left: number;
  delay: number;
  size: string;
  emoji: string;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const heartEmojis = ['💕', '💖', '💗', '💝', '🌸', '🦋', '✨', '🌺', '💫', '🌷'];
    const sizes = ['text-lg', 'text-xl', 'text-2xl'];
    
    const createHeart = () => ({
      id: Date.now() + Math.random(),
      left: Math.random() * 90 + 5,
      delay: Math.random() * 3,
      size: sizes[Math.floor(Math.random() * sizes.length)],
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)]
    });

    // Initial hearts
    const initialHearts = Array.from({ length: 8 }, createHeart);
    setHearts(initialHearts);

    // Add new hearts periodically
    const interval = setInterval(() => {
      setHearts(prev => {
        const newHeart = createHeart();
        const filtered = prev.filter(heart => Date.now() - heart.id < 12000);
        return [...filtered, newHeart];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`absolute animate-float-up opacity-60 ${heart.size}`}
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            animationDelay: `${heart.delay}s`,
            animationDuration: '12s'
          }}
        >
          <span className="animate-wiggle">{heart.emoji}</span>
        </div>
      ))}
    </div>
  );
}