import { useState, useEffect, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function BirthdayMelody() {
  const [isPlaying, setIsPlaying] = useState(false);

  const playBirthdayMelody = useCallback(() => {
    if (isPlaying) return;
    
    setIsPlaying(true);
    
    try {
      // Create a complete birthday melody using Web Audio API
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const audioContext = new AudioContextClass();
      const notes = [
        // "Happy Birthday to You" - First line
        { freq: 261.63, duration: 400 }, // C - "Hap-"
        { freq: 261.63, duration: 200 }, // C - "py"
        { freq: 293.66, duration: 600 }, // D - "Birth-"
        { freq: 261.63, duration: 600 }, // C - "day"
        { freq: 349.23, duration: 600 }, // F - "to"
        { freq: 329.63, duration: 1200 }, // E - "You"
        
        // "Happy Birthday to You" - Second line
        { freq: 261.63, duration: 400 }, // C - "Hap-"
        { freq: 261.63, duration: 200 }, // C - "py"
        { freq: 293.66, duration: 600 }, // D - "Birth-"
        { freq: 261.63, duration: 600 }, // C - "day"
        { freq: 392.00, duration: 600 }, // G - "to"
        { freq: 349.23, duration: 1200 }, // F - "You"
        
        // "Happy Birthday Dear..." - Third line
        { freq: 261.63, duration: 400 }, // C - "Hap-"
        { freq: 261.63, duration: 200 }, // C - "py"
        { freq: 523.25, duration: 600 }, // C8 - "Birth-"
        { freq: 440.00, duration: 600 }, // A - "day"
        { freq: 349.23, duration: 600 }, // F - "dear"
        { freq: 329.63, duration: 600 }, // E - "friend"
        { freq: 293.66, duration: 1200 }, // D - "..."
        
        // "Happy Birthday to You" - Final line
        { freq: 466.16, duration: 400 }, // Bb - "Hap-"
        { freq: 466.16, duration: 200 }, // Bb - "py"
        { freq: 440.00, duration: 600 }, // A - "Birth-"
        { freq: 349.23, duration: 600 }, // F - "day"
        { freq: 392.00, duration: 600 }, // G - "to"
        { freq: 349.23, duration: 1200 }, // F - "You!"
      ];

      let currentTime = audioContext.currentTime;

      notes.forEach(note => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(note.freq, currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, currentTime);
        gainNode.gain.linearRampToValueAtTime(0.05, currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, currentTime + note.duration / 1000);
        
        oscillator.start(currentTime);
        oscillator.stop(currentTime + note.duration / 1000);
        
        currentTime += note.duration / 1000;
      });

      setTimeout(() => {
        setIsPlaying(false);
      }, 12000); // Extended duration for full song
    } catch (error) {
      console.log('Audio playback not supported:', error);
      setIsPlaying(false);
    }
  }, []);

  // Auto-play when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      playBirthdayMelody();
    }, 2000); // Start earlier for immediate musical greeting

    return () => clearTimeout(timer);
  }, [playBirthdayMelody]);

  return (
    <button
      onClick={playBirthdayMelody}
      disabled={isPlaying}
      className={`fixed top-4 left-4 z-40 p-3 rounded-full transition-all duration-300 ${
        isPlaying 
          ? 'bg-pink-400 animate-pulse' 
          : 'bg-white/80 hover:bg-pink-100 hover:scale-110'
      } shadow-lg border-2 border-pink-200`}
      title="Play Birthday Melody"
    >
      {isPlaying ? (
        <div className="flex items-center gap-1">
          <Volume2 className="w-5 h-5 text-white" />
          <span className="animate-bounce text-white">🎵</span>
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <span className="text-lg">🎵</span>
          <VolumeX className="w-4 h-4 text-pink-600" />
        </div>
      )}
    </button>
  );
}