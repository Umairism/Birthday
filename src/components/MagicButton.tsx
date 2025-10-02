interface MagicButtonProps {
  onClick: () => void;
}

export default function MagicButton({ onClick }: MagicButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group relative px-8 py-4 bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-pink-400/50 transform hover:scale-110 active:scale-95 transition-all duration-300 overflow-hidden animate-float-soft"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

      <div className="absolute -top-2 -right-2 text-xl animate-wiggle">🌸</div>
      <div className="absolute -top-2 -left-2 text-xl animate-bounce">💕</div>
      <div className="absolute -bottom-1 right-1/4 text-sm animate-pulse">✨</div>
      <div className="absolute -bottom-1 left-1/4 text-sm animate-twinkle">⭐</div>

      <div className="relative flex items-center gap-2">
        <span className="text-lg animate-pulse">🪄</span>
        <span className="font-['Fredoka_One'] text-pink-800 group-hover:text-white transition-colors">
          Spread Magic!
        </span>
        <span className="text-lg animate-bounce">✨</span>
      </div>

      <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </button>
  );
}
