import { useEffect, useState } from 'react';

interface FloatingItem {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  emoji: string;
}

export default function FloatingBackground() {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    const emojis = ['☁️', '🎈', '💝', '🌟', '🦋', '🌸'];
    const newItems: FloatingItem[] = [];

    for (let i = 0; i < 12; i++) {
      newItems.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 10,
        size: 20 + Math.random() * 20,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
      });
    }

    setItems(newItems);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute animate-float-gentle opacity-30"
          style={{
            left: `${item.left}%`,
            bottom: '-50px',
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            fontSize: `${item.size}px`,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
}
