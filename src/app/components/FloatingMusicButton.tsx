import { Music2, Pause } from "lucide-react";

interface FloatingMusicButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export function FloatingMusicButton({ isPlaying, onToggle }: FloatingMusicButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center text-[#9BAFBA] hover:text-[#3A3632] transition-colors border border-white/50"
      aria-label={isPlaying ? "Pausar musica" : "Reproducir musica"}
    >
      {isPlaying ? (
        <Pause className="w-5 h-5" strokeWidth={1.5} />
      ) : (
        <Music2 className="w-5 h-5" strokeWidth={1.5} />
      )}
    </button>
  );
}
