import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingElement {
  id: number;
  left: number;
  delay: number;
  type: 'balloon' | 'heart';
}

export default function FloatingElements({ trigger }: { trigger: number }) {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    if (trigger === 0) return;

    const newElements: FloatingElement[] = [];
    for (let i = 0; i < 15; i++) {
      newElements.push({
        id: Date.now() + i,
        left: Math.random() * 90 + 5,
        delay: Math.random() * 0.5,
        type: Math.random() > 0.5 ? 'balloon' : 'heart',
      });
    }

    setElements(newElements);

    const timer = setTimeout(() => {
      setElements([]);
    }, 4000);

    return () => clearTimeout(timer);
  }, [trigger]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-float-up"
          style={{
            left: `${element.left}%`,
            bottom: '-50px',
            animationDelay: `${element.delay}s`,
          }}
        >
          {element.type === 'heart' ? (
            <Heart className="w-6 h-6 md:w-8 md:h-8 fill-red-400 text-red-400" />
          ) : (
            <div className="relative">
              <div className="w-8 h-10 md:w-10 md:h-12 bg-gradient-to-b from-pink-400 to-pink-500 rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-pink-600" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
