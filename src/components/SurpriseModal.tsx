import { X } from 'lucide-react';
import Confetti from './Confetti';

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SurpriseModal({ isOpen, onClose }: SurpriseModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fade-in">
      <Confetti active={true} />
      <div className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 rounded-3xl shadow-2xl max-w-sm w-full p-6 md:p-8 animate-shake-in border-4 border-pink-200/50">
        {/* Cute decorative elements */}
        <div className="absolute -top-3 -left-3 text-3xl animate-wiggle">🌸</div>
        <div className="absolute -top-3 -right-3 text-3xl animate-pulse">💕</div>
        <div className="absolute -bottom-3 -left-3 text-2xl animate-bounce">🦋</div>
        <div className="absolute -bottom-3 -right-3 text-2xl animate-twinkle">⭐</div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2 transition-all active:scale-95"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-800" />
        </button>

        <div className="text-center space-y-4 md:space-y-6">
          <div className="text-6xl md:text-7xl animate-heart-beat">💕</div>
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 leading-tight font-['Fredoka_One']">
            You're My Sunshine! ☀️
          </h2>
          <div className="space-y-3">
            <p className="text-base md:text-lg text-pink-700 font-medium">
              Your kindness lights up my world 🌟
            </p>
            <p className="text-sm md:text-base text-pink-600 font-['Pacifico']">
              Thank you for being the most supportive & amazing friend! 
            </p>
            <p className="text-lg font-bold text-rose-600 font-['Fredoka_One']">
              You deserve all the happiness! 💖✨
            </p>
          </div>
          <div className="flex justify-center gap-2 text-2xl md:text-3xl">
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>�</span>
            <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>�</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🦋</span>
            <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>✨</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>�</span>
            <span className="animate-bounce" style={{ animationDelay: '0.5s' }}>💕</span>
          </div>
        </div>
      </div>
    </div>
  );
}
