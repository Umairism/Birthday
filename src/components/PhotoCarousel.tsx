import { useState, useEffect } from 'react';

interface Photo {
  emoji: string;
  quote: string;
  description: string;
  crystalColor: string;
  glowColor: string;
}

const photos: Photo[] = [
  { 
    emoji: "💎", 
    quote: "You're a precious gem", 
    description: "Sparkling brighter every year",
    crystalColor: "from-pink-200/80 via-rose-300/60 to-purple-200/80",
    glowColor: "shadow-pink-300/50"
  },
  { 
    emoji: "🌸", 
    quote: "Blooming beautifully", 
    description: "Like cherry blossoms in spring",
    crystalColor: "from-rose-200/80 via-pink-300/60 to-rose-200/80",
    glowColor: "shadow-rose-300/50"
  },
  { 
    emoji: "✨", 
    quote: "Pure magic in motion", 
    description: "Creating wonder wherever you go",
    crystalColor: "from-purple-200/80 via-pink-300/60 to-purple-200/80",
    glowColor: "shadow-purple-300/50"
  },
  { 
    emoji: "🦋", 
    quote: "Graceful transformation", 
    description: "Beautiful inside and out",
    crystalColor: "from-pink-200/80 via-purple-300/60 to-rose-200/80",
    glowColor: "shadow-pink-300/50"
  },
  { 
    emoji: "🌟", 
    quote: "Shining your light", 
    description: "Illuminating everyone's world",
    crystalColor: "from-rose-200/80 via-purple-300/60 to-pink-200/80",
    glowColor: "shadow-rose-300/50"
  }
];

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Simple navigation functions
  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToPhoto = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-rotation every 6 seconds
  useEffect(() => {
    const interval = setInterval(nextPhoto, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentPhoto = photos[currentIndex];

  return (
    <div className="w-full max-w-lg mx-auto px-4 mb-8 md:mb-12">
      {/* Crystal Container */}
      <div className="relative">
        {/* Main Crystal Card */}
        <div
          className={`relative overflow-hidden rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 border border-white/30 shadow-2xl ${currentPhoto.glowColor} animate-float-gentle transform hover:scale-105 transition-all duration-700`}
          style={{
            backdropFilter: 'blur(20px)',
            background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
            boxShadow: `
              0 8px 32px rgba(0,0,0,0.1),
              inset 0 1px 0 rgba(255,255,255,0.2),
              inset 0 -1px 0 rgba(255,255,255,0.1),
              0 0 50px rgba(236, 72, 153, 0.2)
            `
          }}
        >
          {/* Decorative Corner Crystals */}
          <div className="absolute -top-2 -left-2 text-xl animate-pulse opacity-70">💎</div>
          <div className="absolute -top-2 -right-2 text-xl animate-bounce opacity-70">✨</div>
          <div className="absolute -bottom-2 -left-2 text-xl animate-wiggle opacity-70">🌸</div>
          <div className="absolute -bottom-2 -right-2 text-xl animate-float-gentle opacity-70">🦋</div>

          {/* Content Area */}
          <div className="p-8 md:p-10 text-center">
            {/* Large Emoji with Crystal Effect */}
            <div className="relative mb-6">
              <div className={`inline-block p-6 rounded-2xl bg-gradient-to-br ${currentPhoto.crystalColor} backdrop-blur-sm border border-white/40 shadow-lg animate-pulse-soft`}>
                <div className="text-6xl md:text-7xl filter drop-shadow-lg animate-float-gentle">
                  {currentPhoto.emoji}
                </div>
              </div>
              {/* Sparkle effects around emoji */}
              <div className="absolute -top-1 -right-1 text-xs animate-twinkle">✨</div>
              <div className="absolute -bottom-1 -left-1 text-xs animate-twinkle" style={{animationDelay: '0.5s'}}>⭐</div>
            </div>

            {/* Quote Text */}
            <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 mb-3 font-['Pacifico'] animate-gradient">
              "{currentPhoto.quote}"
            </h3>

            {/* Description */}
            <p className="text-base md:text-lg text-pink-700 font-medium font-['Fredoka_One'] opacity-90">
              {currentPhoto.description}
            </p>

            {/* Decorative Elements */}
            <div className="flex justify-center gap-3 mt-4 text-lg">
              <span className="animate-bounce" style={{animationDelay: '0s'}}>🌸</span>
              <span className="animate-bounce" style={{animationDelay: '0.2s'}}>💖</span>
              <span className="animate-bounce" style={{animationDelay: '0.4s'}}>✨</span>
            </div>
          </div>
        </div>

        {/* Crystal Navigation Buttons */}
        <button
          onClick={prevPhoto}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-pink-300 hover:bg-pink-400 text-white rounded-full p-3 shadow-xl border-2 border-white/50 transition-all duration-300 hover:scale-110 active:scale-95 z-30"
          style={{ minWidth: '48px', minHeight: '48px' }}
        >
          <span className="text-xl font-bold">←</span>
        </button>

        <button
          onClick={nextPhoto}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-rose-300 hover:bg-rose-400 text-white rounded-full p-3 shadow-xl border-2 border-white/50 transition-all duration-300 hover:scale-110 active:scale-95 z-30"
          style={{ minWidth: '48px', minHeight: '48px' }}
        >
          <span className="text-xl font-bold">→</span>
        </button>

        {/* Crystal Dot Indicators */}
        <div className="flex justify-center gap-3 mt-6">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPhoto(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'w-8 h-3 bg-pink-400 shadow-lg' 
                  : 'w-3 h-3 bg-pink-200 hover:bg-pink-300 hover:scale-125'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-4">
        <p className="text-xs md:text-sm text-pink-600 font-medium font-['Fredoka_One'] flex items-center justify-center gap-2">
          <span className="animate-pulse">💎</span>
          Precious memories in crystal frames
          <span className="animate-bounce">✨</span>
        </p>
      </div>
    </div>
  );
}
