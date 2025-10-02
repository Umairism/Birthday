import { useState, useEffect } from 'react';
import Confetti from './components/Confetti';
import FloatingBackground from './components/FloatingBackground';
import FloatingHearts from './components/FloatingHearts';
import MagicParticles from './components/MagicParticles';
import SparklesBg from './components/Sparkles';
import Cake from './components/Cake';
import PhotoCarousel from './components/PhotoCarousel';
import SurpriseModal from './components/SurpriseModal';
import TypewriterText from './components/TypewriterText';
import MagicButton from './components/MagicButton';
import MusicToggle from './components/MusicToggle';
import CuteLoader from './components/CuteLoader';
import BirthdayMelody from './components/BirthdayMelody';

function App() {
  const [magicTrigger, setMagicTrigger] = useState(0);
  const [showSurprise, setShowSurprise] = useState(false);
  const [message] = useState("To the most wonderful soul who makes every day brighter with her kindness and support. You're not just getting older, you're getting more amazing! 💕✨");
  const [showTypewriter, setShowTypewriter] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [customMessage, setCustomMessage] = useState(message);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleMagicClick = () => {
    setMagicTrigger((prev) => prev + 1);
  };

  const handleSurprise = () => {
    setShowSurprise(true);
  };

  const handleEditMessage = () => {
    setEditMode(true);
    setShowTypewriter(false);
  };

  const handleSaveMessage = () => {
    setEditMode(false);
    setShowTypewriter(false);
    setMagicTrigger(prev => prev + 1);
  };

  if (isLoading) {
    return <CuteLoader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 relative overflow-x-hidden">
      <FloatingBackground />
      <FloatingHearts />
      <SparklesBg />
      <Confetti active={true} />
      <MagicParticles trigger={magicTrigger} />
      <SurpriseModal isOpen={showSurprise} onClose={() => setShowSurprise(false)} />
      <MusicToggle />
      <BirthdayMelody />

      <div className="relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-4 sm:py-8 md:py-12 parallax-section">
          <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 mb-6 sm:mb-8 md:mb-12 animate-fade-in mt-4 sm:mt-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-['Pacifico'] drop-shadow-2xl relative z-20 birthday-title">
              <span className="relative inline-block z-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 animate-gradient">
                Happy Birthday
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-spin-slow z-30 drop-shadow-lg animate-emoji-glow">🧁</div>
                <div className="absolute -top-1 sm:-top-2 -left-2 sm:-left-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl animate-bounce z-30 drop-shadow-lg animate-emoji-glow">🌸</div>
                <div className="absolute -bottom-1 sm:-bottom-2 right-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl animate-pulse z-30 drop-shadow-lg animate-emoji-glow">💖</div>
                <div className="absolute -top-3 sm:-top-6 left-1/2 transform -translate-x-1/2 text-lg sm:text-xl md:text-2xl animate-float-gentle z-30 drop-shadow-lg animate-emoji-glow">🦋</div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-1 sm:-left-2 text-lg sm:text-xl md:text-2xl animate-bounce z-30 drop-shadow-lg animate-emoji-glow" style={{animationDelay: '0.5s'}}>🌈</div>
              </span>
            </h1>
            <div className="flex justify-center gap-3 md:gap-4 text-4xl md:text-5xl mb-4 z-20 relative">
              <span className="animate-float-gentle drop-shadow-lg filter brightness-110" style={{ animationDelay: '0s' }}>🎈</span>
              <span className="animate-float-gentle drop-shadow-lg filter brightness-110" style={{ animationDelay: '0.2s' }}>💝</span>
              <span className="animate-float-gentle drop-shadow-lg filter brightness-110" style={{ animationDelay: '0.4s' }}>✨</span>
              <span className="animate-float-gentle drop-shadow-lg filter brightness-110" style={{ animationDelay: '0.6s' }}>🌺</span>
              <span className="animate-float-gentle drop-shadow-lg filter brightness-110" style={{ animationDelay: '0.8s' }}>💕</span>
            </div>
            <div className="text-center mb-6">
              <p className="text-lg md:text-xl font-['Fredoka_One'] text-pink-600 drop-shadow-sm">
                For someone who makes the world brighter ✨
              </p>
            </div>
          </div>

          <div className="w-full max-w-md mx-auto mb-8 md:mb-12 animate-slide-up">
            <div className="glass-card-cute p-6 md:p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-300/50 relative">
              <div className="absolute -top-2 -right-2 text-2xl animate-bounce">💖</div>
              <div className="absolute -top-1 -left-2 text-xl animate-pulse">🌸</div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl animate-pulse">💌</span>
                  <h2 className="text-lg md:text-xl font-bold text-pink-700 font-['Fredoka_One']">
                    Sweet Message
                  </h2>
                  <span className="text-lg animate-bounce">💕</span>
                </div>
                {!editMode && (
                  <button
                    onClick={handleEditMessage}
                    className="text-sm text-pink-600 hover:text-pink-800 font-medium flex items-center gap-1 hover:scale-110 transition-transform"
                  >
                    <span>✏️</span> Edit
                  </button>
                )}
              </div>

              {editMode ? (
                <div className="space-y-3">
                  <textarea
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="w-full min-h-[120px] p-4 text-base md:text-lg font-medium text-pink-700 bg-white/60 rounded-2xl border-2 border-pink-300 focus:border-pink-500 focus:outline-none resize-none transition-colors focus:shadow-lg focus:shadow-pink-200/50"
                    placeholder="Write your sweet birthday message... 💕"
                  />
                  <button
                    onClick={handleSaveMessage}
                    className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white py-2 px-4 rounded-xl font-['Fredoka_One'] hover:scale-105 transition-transform active:scale-95 shadow-lg"
                  >
                    Save Message 💖
                  </button>
                </div>
              ) : showTypewriter ? (
                <p className="text-base md:text-lg font-medium text-pink-700 leading-relaxed min-h-[80px]">
                  <TypewriterText text={customMessage} speed={50} />
                </p>
              ) : (
                <p className="text-base md:text-lg font-medium text-pink-700 leading-relaxed min-h-[80px]">
                  {customMessage}
                </p>
              )}
            </div>
          </div>

          <div className="mb-8 md:mb-12 animate-bounce-in" style={{ animationDelay: '0.5s' }}>
            <MagicButton onClick={handleMagicClick} />
          </div>

          <div className="mb-12 md:mb-16 animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <Cake onDoubleTap={handleSurprise} />
          </div>
        </section>

        <section className="pb-12 md:pb-16 px-4 parallax-section" style={{ transform: 'translateZ(20px)' }}>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 font-['Pacifico'] drop-shadow-lg">
              Precious Memories 
            </h2>
            <div className="flex justify-center gap-2 text-2xl mt-2">
              <span className="animate-bounce" style={{animationDelay: '0s'}}>📸</span>
              <span className="animate-bounce" style={{animationDelay: '0.2s'}}>💕</span>
              <span className="animate-bounce" style={{animationDelay: '0.4s'}}>✨</span>
              <span className="animate-bounce" style={{animationDelay: '0.6s'}}>🌸</span>
            </div>
          </div>
          <PhotoCarousel />
        </section>

        <footer className="text-center pb-8 px-4">
          <div className="inline-block glass-card-cute px-6 py-4 relative">
            <div className="absolute -top-1 -right-1 text-lg animate-pulse">🌟</div>
            <div className="absolute -top-1 -left-1 text-lg animate-bounce">🦋</div>
            <p className="text-sm md:text-base text-pink-700 font-medium flex items-center gap-2">
              <span className="animate-heart-beat">💕</span>
              <span className="font-['Fredoka_One']">Crafted with endless love & magic for the sweetest soul!</span>
              <span className="animate-heart-beat">💕</span>
            </p>
            <div className="text-xs text-pink-500 mt-1 font-['Pacifico']">
              You deserve all the happiness in the world ✨
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
