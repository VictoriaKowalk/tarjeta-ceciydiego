import { motion } from "motion/react";
import type { GuestInfo } from "../data/getGuestFromUrl";
import type { WeddingData } from "../data/weddingData";

interface WelcomeScreenProps {
  data: WeddingData;
  guestInfo: GuestInfo;
  onEnter: () => void;
}

export function WelcomeScreen({ data, guestInfo, onEnter }: WelcomeScreenProps) {
  const seatsText =
    guestInfo.reservedSeats === 1
      ? "Tenemos 1 lugar reservado para vos."
      : `Tenemos ${guestInfo.reservedSeats} lugares reservados para ustedes.`;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url("${data.images.welcome}")` }}
      />
      <div className="absolute inset-0 bg-[#F8F5F0]/80 z-0 backdrop-blur-sm" />

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm tracking-[0.3em] uppercase text-[#8B837C] font-sans mb-6"
        >
          {data.copy.welcomeEyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-6xl text-[#3A3632] font-serif italic text-center mb-12"
        >
          {data.couple.bride}
          <br />
          <span className="text-3xl not-italic">&</span>
          <br />
          {data.couple.groom}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-full bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_8px_32px_rgba(58,54,50,0.05)] relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-[#D8C7B3] mt-6" />

          <h2 className="text-xl text-[#3A3632] font-display mt-4 mb-2">
            {guestInfo.guestName}
          </h2>
          <p className="text-sm text-[#8B837C] font-sans mb-8">{seatsText}</p>

          <button
            onClick={onEnter}
            className="w-full py-4 bg-[#D8C7B3] hover:bg-[#c9b59e] text-white font-sans tracking-widest text-xs uppercase rounded-full transition-colors duration-300 shadow-md"
          >
            Ingresar
          </button>

          <p className="text-[10px] uppercase tracking-widest text-[#9BAFBA] font-sans mt-4">
            {data.copy.welcomeHint}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
