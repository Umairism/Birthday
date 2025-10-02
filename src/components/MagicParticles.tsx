import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  type: 'star' | 'heart' | 'sparkle';
  size: number;
}

export default function MagicParticles({ trigger }: { trigger: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (trigger === 0) return;

    const newParticles: Particle[] = [];
    const types: Array<'star' | 'heart' | 'sparkle'> = ['star', 'heart', 'sparkle'];

    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: Date.now() + i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 2,
        type: types[Math.floor(Math.random() * types.length)],
        size: 20 + Math.random() * 20,
      });
    }

    setParticles(newParticles);

    const timer = setTimeout(() => {
      setParticles([]);
    }, 5000);

    return () => clearTimeout(timer);
  }, [trigger]);

  const getEmoji = (type: string) => {
    switch (type) {
      case 'star':
        return '⭐';
      case 'heart':
        return '💖';
      case 'sparkle':
        return '✨';
      default:
        return '✨';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-30">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-magic-float"
          style={{
            left: `${particle.left}%`,
            bottom: '-50px',
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            fontSize: `${particle.size}px`,
          }}
        >
          {getEmoji(particle.type)}
        </div>
      ))}
    </div>
  );
}
