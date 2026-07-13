import { useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { MainScreen } from "./components/MainScreen";
import { FloatingMusicButton } from "./components/FloatingMusicButton";
import { weddingData } from "./data/weddingData";
import { getGuestFromUrl } from "./data/getGuestFromUrl";

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [guestInfo] = useState(() => getGuestFromUrl());

  const handleEnter = () => {
    setHasEntered(true);

    if (audioRef.current && weddingData.music.backgroundUrl) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) {
      setIsPlaying((current) => !current);
      return;
    }

    if (audioRef.current.paused) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F8F5F0] font-sans antialiased relative">
      {weddingData.music.backgroundUrl && (
        <audio ref={audioRef} src={weddingData.music.backgroundUrl} loop preload="auto" />
      )}

      <MainScreen data={weddingData} guestInfo={guestInfo} />

      <AnimatePresence>
        {!hasEntered && (
          <WelcomeScreen
            key="welcome"
            data={weddingData}
            guestInfo={guestInfo}
            onEnter={handleEnter}
          />
        )}
      </AnimatePresence>

      {hasEntered && (
        <FloatingMusicButton isPlaying={isPlaying} onToggle={toggleMusic} />
      )}
    </div>
  );
}
