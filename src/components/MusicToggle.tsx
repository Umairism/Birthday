import { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const notes = [
    { freq: 523.25, duration: 0.3 },
    { freq: 523.25, duration: 0.3 },
    { freq: 587.33, duration: 0.6 },
    { freq: 523.25, duration: 0.6 },
    { freq: 698.46, duration: 0.6 },
    { freq: 659.25, duration: 1.2 },
  ];

  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const playMelody = async () => {
    try {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      const audioContext = audioContextRef.current;

      let currentTime = audioContext.currentTime;

      for (const note of notes) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = note.freq;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.3, currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, currentTime + note.duration);

        oscillator.start(currentTime);
        oscillator.stop(currentTime + note.duration);

        currentTime += note.duration;
      }

      setTimeout(() => {
        setIsPlaying(false);
      }, currentTime * 1000);

    } catch (error) {
      console.error('Audio playback failed:', error);
      setIsPlaying(false);
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      playMelody();
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed top-4 right-4 z-50 p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 transition-all duration-300"
      aria-label={isPlaying ? 'Stop music' : 'Play music'}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-white animate-pulse" />
      ) : (
        <Music className="w-5 h-5 md:w-6 md:h-6 text-white" />
      )}
    </button>
  );
}
