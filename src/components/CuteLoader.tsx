import { useEffect, useState } from 'react';

export default function CuteLoader() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 flex items-center justify-center z-50">
      <div className="text-center space-y-6">
        <div className="text-8xl animate-bounce">🎂</div>
        <div className="text-2xl font-['Fredoka_One'] text-pink-600">
          Preparing something special{dots}
        </div>
        <div className="flex justify-center gap-3 text-4xl">
          <span className="animate-bounce" style={{animationDelay: '0s'}}>🌸</span>
          <span className="animate-bounce" style={{animationDelay: '0.2s'}}>💕</span>
          <span className="animate-bounce" style={{animationDelay: '0.4s'}}>✨</span>
          <span className="animate-bounce" style={{animationDelay: '0.6s'}}>🦋</span>
        </div>
      </div>
    </div>
  );
}