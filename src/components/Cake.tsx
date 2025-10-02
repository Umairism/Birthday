import { useState } from 'react';

interface CakeProps {
  onDoubleTap: () => void;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

export default function Cake({ onDoubleTap }: CakeProps) {
  const [candles, setCandles] = useState([false, false, false]);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [tapCount, setTapCount] = useState(0);
  const [tapTimer, setTapTimer] = useState<number | null>(null);

  const handleTap = () => {
    const newTapCount = tapCount + 1;
    setTapCount(newTapCount);

    if (tapTimer) {
      clearTimeout(tapTimer);
    }

    if (newTapCount === 1) {
      const lightIndex = candles.findIndex((lit) => !lit);
      if (lightIndex !== -1) {
        const newCandles = [...candles];
        newCandles[lightIndex] = true;
        setCandles(newCandles);
        createSparkles();
      }
    } else if (newTapCount === 2) {
      onDoubleTap();
      setTapCount(0);
      return;
    }

    const timer = window.setTimeout(() => {
      setTapCount(0);
    }, 500);
    setTapTimer(timer);
  };

  const createSparkles = () => {
    const newSparkles: Sparkle[] = [];
    for (let i = 0; i < 10; i++) {
      newSparkles.push({
        id: Date.now() + i,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
      });
    }
    setSparkles(newSparkles);
    setTimeout(() => setSparkles([]), 1000);
  };

  return (
    <div className="relative cursor-pointer select-none transform hover:scale-105 transition-transform duration-300" onClick={handleTap}>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute top-1/2 left-1/2 text-yellow-400 text-2xl animate-sparkle-burst pointer-events-none"
          style={{
            transform: `translate(${sparkle.x}px, ${sparkle.y}px)`,
          }}
        >
          ✨
        </div>
      ))}
      <div className="relative w-40 h-32 md:w-48 md:h-40 mx-auto animate-float-soft">
        {/* Cute decorative elements around the cake */}
        <div className="absolute -top-4 -left-4 text-2xl animate-bounce">🌸</div>
        <div className="absolute -top-4 -right-4 text-2xl animate-pulse">💕</div>
        <div className="absolute -bottom-2 -left-6 text-xl animate-wiggle">🦋</div>
        <div className="absolute -bottom-2 -right-6 text-xl animate-twinkle">⭐</div>
        <div className="absolute inset-x-0 top-8 flex justify-center gap-4 md:gap-6 z-10">
          {candles.map((lit, i) => (
            <div key={i} className="flex flex-col items-center">
              {lit && (
                <div className="relative">
                  <div className="w-3 h-4 md:w-4 md:h-5 bg-gradient-to-t from-orange-400 via-yellow-400 to-yellow-200 rounded-full animate-flicker mb-1" />
                  <div className="absolute inset-0 bg-yellow-300 rounded-full blur-md opacity-50 animate-glow" />
                </div>
              )}
              <div className="w-2 h-6 md:w-2.5 md:h-8 bg-gradient-to-b from-red-400 to-red-500 rounded-sm" />
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 inset-x-0">
          {/* Top layer - now with frosting swirls */}
          <div className="h-10 md:h-12 bg-gradient-to-b from-pink-200 to-pink-300 rounded-t-3xl border-4 border-pink-400 relative">
            <div className="absolute top-1 left-2 w-2 h-2 bg-white rounded-full opacity-70"></div>
            <div className="absolute top-2 right-3 w-1.5 h-1.5 bg-white rounded-full opacity-70"></div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs">🌸</div>
          </div>
          {/* Bottom layer - more colorful and cute */}
          <div className="h-12 md:h-16 bg-gradient-to-b from-rose-200 to-rose-300 rounded-lg border-4 border-rose-400 relative">
            <div className="flex justify-around items-center h-full px-2">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-red-300 to-red-400 rounded-full animate-pulse" />
              <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
              <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-green-300 to-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
              <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}} />
            </div>
            {/* Cute cake decorations */}
            <div className="absolute top-1 left-2 text-xs">💝</div>
            <div className="absolute top-1 right-2 text-xs">✨</div>
          </div>
        </div>
      </div>

      <p className="text-center text-xs md:text-sm text-pink-600 mt-4 font-medium font-['Fredoka_One']">
        <span className="inline-block animate-bounce">🕯️</span> Tap to light candles • Double tap for surprise! <span className="inline-block animate-bounce">🎁</span>
      </p>
    </div>
  );
}
