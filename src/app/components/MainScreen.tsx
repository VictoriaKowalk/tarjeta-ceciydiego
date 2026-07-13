import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  BedDouble,
  Car,
  Music,
  Pause,
  Play,
  Plus,
  X,
} from "lucide-react";
import { FadeInSection } from "./FadeInSection";
import { Countdown } from "./Countdown";
import { Itinerary } from "./Itinerary";
import { RSVPForm } from "./RSVPForm";
import type { GuestInfo } from "../data/getGuestFromUrl";
import type { WeddingData } from "../data/weddingData";

interface MainScreenProps {
  data: WeddingData;
  guestInfo: GuestInfo;
}

function ExternalButton({
  href,
  children,
  variant = "primary",
  className = "",
  download = false,
}: {
  href: string;
  children: string;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  download?: boolean | string;
}) {
  const styles = {
    primary:
      "bg-[#9BAFBA] hover:bg-[#8397a2] text-white shadow-md",
    secondary:
      "border border-[#D8C7B3] text-[#3A3632] hover:bg-[#F8F5F0]",
    light:
      "bg-white text-[#9BAFBA] hover:bg-[#F8F5F0]",
  };

  return (
    <a
      href={href}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noreferrer"}
      download={download}
      className={`inline-flex items-center justify-center text-center px-8 py-3 font-sans tracking-widest text-xs uppercase rounded-full transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

function AnimatedCameraIcon() {
  const drawBody = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2.3, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const drawLens = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { delay: 0.85, duration: 1.55, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const drawDetail = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { delay: 1.75, duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.svg
      viewBox="0 0 48 48"
      className="w-12 h-12 mb-6 text-white/90 drop-shadow-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      animate={{ scale: [1, 1.035, 1], opacity: [1, 0.88, 1] }}
      transition={{ delay: 2.55, duration: 2.8, ease: "easeInOut", repeat: Infinity }}
      aria-hidden="true"
    >
      <motion.path
        d="M15 16l3-5h12l3 5h5a4 4 0 014 4v15a4 4 0 01-4 4H10a4 4 0 01-4-4V20a4 4 0 014-4h5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={drawBody}
      />
      <motion.path
        d="M24 33a7 7 0 100-14 7 7 0 000 14z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={drawLens}
      />
      <motion.path
        d="M35 21h.01"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        variants={drawDetail}
      />
    </motion.svg>
  );
}

function AnimatedGiftIcon() {
  const drawBox = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2.3, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const drawRibbon = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { delay: 0.85, duration: 1.55, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const drawBow = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { delay: 1.75, duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.svg
      viewBox="0 0 48 48"
      className="w-12 h-12 mb-6 text-[#D8C7B3] drop-shadow-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      animate={{ scale: [1, 1.035, 1], opacity: [1, 0.88, 1] }}
      transition={{ delay: 2.55, duration: 2.8, ease: "easeInOut", repeat: Infinity }}
      aria-hidden="true"
    >
      <motion.path
        d="M9 21h30v20H9V21z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={drawBox}
      />
      <motion.path
        d="M6 13h36v8H6v-8zM24 13v28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={drawRibbon}
      />
      <motion.path
        d="M24 13c-5-8-13-7-13-2 0 4 6 4 13 2zM24 13c5-8 13-7 13-2 0 4-6 4-13 2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={drawBow}
      />
    </motion.svg>
  );
}

function AnimatedInstagramIcon() {
  const drawOuter = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2.3, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const drawInner = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { delay: 0.85, duration: 1.55, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const drawDot = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { delay: 1.75, duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.svg
      viewBox="0 0 48 48"
      className="w-12 h-12 mx-auto mb-4 text-white/90 drop-shadow-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      animate={{ scale: [1, 1.035, 1], opacity: [1, 0.88, 1] }}
      transition={{ delay: 2.55, duration: 2.8, ease: "easeInOut", repeat: Infinity }}
      aria-hidden="true"
    >
      <motion.path
        d="M15 8h18a7 7 0 017 7v18a7 7 0 01-7 7H15a7 7 0 01-7-7V15a7 7 0 017-7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={drawOuter}
      />
      <motion.path
        d="M24 31a7 7 0 100-14 7 7 0 000 14z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={drawInner}
      />
      <motion.path
        d="M34 14h.01"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        variants={drawDot}
      />
    </motion.svg>
  );
}

function AnimatedSparkleIcon() {
  const drawMain = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2.3, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const drawSmall = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { delay: 0.85, duration: 1.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.svg
      viewBox="0 0 48 48"
      className="w-12 h-12 mb-6 text-[#D8C7B3] drop-shadow-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      animate={{ scale: [1, 1.035, 1], opacity: [1, 0.88, 1] }}
      transition={{ delay: 2.55, duration: 2.8, ease: "easeInOut", repeat: Infinity }}
      aria-hidden="true"
    >
      <motion.path
        d="M24 6l4.5 13.5L42 24l-13.5 4.5L24 42l-4.5-13.5L6 24l13.5-4.5L24 6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={drawMain}
      />
      <motion.path
        d="M10 8l1.5 4.5L16 14l-4.5 1.5L10 20l-1.5-4.5L4 14l4.5-1.5L10 8zM38 28l1.5 4.5L44 34l-4.5 1.5L38 40l-1.5-4.5L32 34l4.5-1.5L38 28z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={drawSmall}
      />
    </motion.svg>
  );
}

function AnimatedCalendarIcon() {
  const drawOuter = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2.3, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const drawInner = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { delay: 0.85, duration: 1.55, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const drawDetail = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { delay: 1.75, duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.svg
      viewBox="0 0 48 48"
      className="w-12 h-12 mb-6 text-[#9BAFBA] drop-shadow-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      animate={{ scale: [1, 1.035, 1], opacity: [1, 0.88, 1] }}
      transition={{ delay: 2.55, duration: 2.8, ease: "easeInOut", repeat: Infinity }}
      aria-hidden="true"
    >
      <motion.path
        d="M12 12h24a4 4 0 014 4v21a4 4 0 01-4 4H12a4 4 0 01-4-4V16a4 4 0 014-4zM8 21h32M16 7v8M32 7v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={drawOuter}
      />
      <motion.path
        d="M16 27h4M24 27h4M32 27h1M16 34h4M24 34h4M32 34h1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={drawInner}
      />
      <motion.path
        d="M24 16h.01"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        variants={drawDetail}
      />
    </motion.svg>
  );
}

function AnimatedMapPinIcon() {
  const drawPin = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2.3, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const drawDot = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { delay: 0.85, duration: 1.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.svg
      viewBox="0 0 48 48"
      className="w-12 h-12 mx-auto mb-6 text-[#9BAFBA] drop-shadow-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      animate={{ scale: [1, 1.035, 1], opacity: [1, 0.88, 1] }}
      transition={{ delay: 2.55, duration: 2.8, ease: "easeInOut", repeat: Infinity }}
      aria-hidden="true"
    >
      <motion.path
        d="M24 43s14-13.2 14-25A14 14 0 0010 18c0 11.8 14 25 14 25z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={drawPin}
      />
      <motion.path
        d="M24 24a5 5 0 100-10 5 5 0 000 10z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={drawDot}
      />
    </motion.svg>
  );
}

function RingsIcon() {
  return (
    <motion.svg
      viewBox="0 0 80 60"
      className="w-20 h-16 mx-auto text-[#D8A85E]"
      initial="separated"
      whileInView="joined"
      viewport={{ once: true, margin: "-20%" }}
      animate={{ opacity: [1, 0.78, 1] }}
      transition={{ delay: 2.4, duration: 2.8, ease: "easeInOut", repeat: Infinity }}
      aria-hidden="true"
    >
      <motion.circle
        cx="32"
        cy="32"
        r="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        variants={{
          separated: { x: -5, opacity: 1 },
          joined: { x: 3, opacity: 1 },
        }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.circle
        cx="48"
        cy="32"
        r="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        variants={{
          separated: { x: 5, opacity: 1 },
          joined: { x: -3, opacity: 1 },
        }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.svg>
  );
}

function GlassesIcon() {
  return (
    <motion.svg
      viewBox="0 0 80 60"
      className="w-20 h-16 mx-auto text-[#6F6A65]"
      initial="apart"
      whileInView="cheers"
      viewport={{ once: true, margin: "-20%" }}
      aria-hidden="true"
    >
      <motion.g
        variants={{
          apart: { x: -8, rotate: -10, opacity: 1 },
          cheers: { x: 1, rotate: -4, opacity: 1 },
        }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "34px 18px" }}
      >
        <motion.path
          d="M26 8h14l-3 23c-.6 4.7-3.4 7.2-7 7.2S23.6 35.7 23 31L20 8h6z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d="M22 19h16M30 39v11M23 51h14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d="M22.5 21h15"
          fill="none"
          stroke="#D8A85E"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </motion.g>

      <motion.g
        variants={{
          apart: { x: 8, rotate: 10, opacity: 1 },
          cheers: { x: -1, rotate: 4, opacity: 1 },
        }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "46px 18px" }}
      >
        <motion.path
          d="M40 8h14l-3 23c-.6 4.7-3.4 7.2-7 7.2S37.6 35.7 37 31L34 8h6z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d="M36 19h16M44 39v11M37 51h14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d="M36.5 21h15"
          fill="none"
          stroke="#D8A85E"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </motion.g>
    </motion.svg>
  );
}

function DateEventCard({
  event,
  calendarUrl,
}: {
  event: WeddingData["event"]["dateCards"][number];
  calendarUrl: string;
}) {
  return (
    <div className="bg-[#F8F5F0] rounded-3xl px-7 py-9 text-center shadow-[0_10px_30px_rgba(58,54,50,0.04)]">
      {event.type === "civil" ? <RingsIcon /> : <GlassesIcon />}
      <h3 className="text-4xl font-serif italic text-[#6F6A65] mt-5 mb-8">
        {event.title}
      </h3>
      <div className="grid grid-cols-2 max-w-xs mx-auto mb-8">
        <div className="pr-6 border-r border-[#D8C7B3]/70">
          <p className="text-3xl font-sans font-light text-[#6F6A65]">{event.day}</p>
          <p className="text-xs uppercase tracking-wider text-[#8B837C] font-sans">
            {event.month}
          </p>
        </div>
        <div className="pl-6">
          <p className="text-3xl font-sans font-light text-[#6F6A65]">{event.time}</p>
          <p className="text-xs uppercase tracking-wider text-[#8B837C] font-sans">
            Horas
          </p>
        </div>
      </div>
      <div className="h-[1px] bg-[#D8C7B3]/60 -mx-7 mb-6" />
      <p className="text-lg font-sans font-semibold text-[#6F6A65] mb-2">{event.venue}</p>
      <p className="text-base font-sans text-[#6F6A65] leading-relaxed mb-8">{event.address}</p>
      <ExternalButton href={calendarUrl} variant="secondary" className="bg-[#ece9e4] border-transparent hover:bg-[#D8C7B3]/35 px-9">
        Agendar
      </ExternalButton>
    </div>
  );
}

export function MainScreen({ data, guestInfo }: MainScreenProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const [copiedHashtag, setCopiedHashtag] = useState(false);
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
  const [copiedCbu, setCopiedCbu] = useState(false);
  const locations = [data.locations.civil, data.locations.party];
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroParallaxY = useTransform(heroScrollProgress, [0, 1], [0, 72]);

  const hashtagUrl = `https://www.instagram.com/explore/tags/${data.integrations.hashtag.replace("#", "")}/`;

  const copyHashtag = async () => {
    await navigator.clipboard.writeText(data.integrations.hashtag);
    setCopiedHashtag(true);
    window.setTimeout(() => setCopiedHashtag(false), 1800);
  };

  const copyCbu = async () => {
    await navigator.clipboard.writeText(data.gifts.cbu);
    setCopiedCbu(true);
    window.setTimeout(() => setCopiedCbu(false), 1800);
  };

  return (
    <div className="w-full bg-[#F8F5F0] text-[#3A3632] overflow-x-hidden selection:bg-[#D8C7B3] selection:text-white pb-20 scroll-smooth">
      <section ref={heroRef} className="relative w-full h-[74svh] md:h-[100dvh] flex flex-col items-center justify-start md:justify-center overflow-hidden bg-[#F8F5F0]">
        <motion.div
          className="hidden md:block absolute -inset-16 bg-cover bg-center z-0 scale-110 blur-xl opacity-80"
          style={{ backgroundImage: `url("${data.images.hero}")` }}
        />
        <motion.img
          src={data.images.hero}
          alt={data.couple.displayName}
          style={{ y: heroParallaxY }}
          className="absolute -top-12 left-0 z-0 w-full h-[calc(74svh+96px)] object-cover object-[48%_top] md:-top-[120px] md:h-[calc(100%+180px)] md:object-cover md:object-top"
        />
        <div className="absolute top-0 left-0 right-0 h-[74svh] md:h-full bg-gradient-to-b from-black/20 via-black/5 to-black/18 md:from-black/30 md:via-black/5 md:to-[#F8F5F0] z-0" />
        <div className="absolute left-0 right-0 bottom-0 h-[14svh] bg-gradient-to-b from-transparent to-[#F8F5F0] z-0 md:hidden" />

        <FadeInSection className="relative z-10 text-center px-6 pt-[33svh] md:pt-0 md:mt-0 md:absolute md:left-0 md:right-0 md:bottom-16 lg:bottom-20">
          <p className="text-white text-xs uppercase tracking-[0.3em] font-sans mb-4 drop-shadow-md">
            {data.copy.heroEyebrow}
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl text-white font-serif italic mb-6 drop-shadow-lg leading-tight">
            {data.couple.bride}
            <br />& {data.couple.groom}
          </h1>
          <p className="text-white text-sm tracking-[0.2em] font-sans uppercase drop-shadow-md">
            {data.event.heroDate}
          </p>
        </FadeInSection>
      </section>

      <section className="pt-10 pb-16 md:py-24 px-6 text-center bg-[#F8F5F0]">
        <FadeInSection>
          <p className="text-[#8B837C] font-sans text-xs uppercase tracking-widest mb-10">
            {data.copy.countdownIntro}
          </p>
          <Countdown targetDate={data.event.dateTime} />
        </FadeInSection>
      </section>

      <section className="py-20 px-8 text-center bg-white">
        <FadeInSection className="max-w-2xl mx-auto flex flex-col items-center">
          <AnimatedSparkleIcon />
          <h2 className="text-2xl md:text-3xl font-serif italic text-[#3A3632] leading-relaxed">
            "{data.copy.story}"
          </h2>
          <div className="w-12 h-[1px] bg-[#D8C7B3] mt-8" />
        </FadeInSection>
      </section>

      <section className="py-24 px-6 bg-[#F8F5F0]">
        <FadeInSection className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl font-display mb-12">
            {data.copy.galleryTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {data.images.gallery.map((image) => (
              <div
                key={image.src}
                className={`${image.className ?? "aspect-[4/3]"} rounded-2xl overflow-hidden shadow-sm`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      <section className="py-20 px-6 text-center bg-white">
        <FadeInSection className="flex flex-col items-center">
          <AnimatedCalendarIcon />
          <h2 className="text-3xl font-display mb-2">Agenda la fecha</h2>
          <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl mt-8">
            {data.event.dateCards.map((event) => (
              <DateEventCard key={event.type} event={event} calendarUrl={data.event.calendarUrl} />
            ))}
          </div>
        </FadeInSection>
      </section>

      <section className="py-24 px-6 bg-[#F8F5F0]">
        <FadeInSection className="max-w-md md:max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display mb-2">Itinerario</h2>
            <p className="text-xs text-[#8B837C] uppercase tracking-widest font-sans">
              {data.copy.itinerarySubtitle}
            </p>
          </div>
          <Itinerary items={data.itinerary} locations={data.locations} />
        </FadeInSection>
      </section>

      <section className="py-20 px-6 bg-white">
        <FadeInSection className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedMapPinIcon />
            <h2 className="text-3xl font-display">Ubicacion</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {locations.map((location) => (
              <div
                key={location.title}
                className="bg-[#F8F5F0] p-8 rounded-3xl text-center border border-[#D8C7B3]/30 flex flex-col items-center"
              >
                <h3 className="text-xl font-display mb-2">{location.title}</h3>
                <p className="text-sm font-sans text-[#8B837C] mb-1">{location.name}</p>
                <p className="text-xs font-sans text-[#8B837C] mb-6">{location.address}</p>
                <ExternalButton href={location.mapsUrl} variant="secondary" className="mt-auto px-6 py-2 text-[10px]">
                  Como llegar
                </ExternalButton>
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      <section className="py-24 px-6 bg-[#F8F5F0] text-center">
        <FadeInSection className="flex flex-col items-center">
          <h2 className="text-3xl font-display mb-4">Dress Code</h2>
          <p className="text-2xl font-serif italic text-[#9BAFBA] mb-6">
            {data.dressCode.title}
          </p>
          <div className="w-16 h-[1px] bg-[#D8C7B3] mb-6" />
          <p className="text-xs uppercase tracking-widest font-sans text-[#8B837C]">
            {data.dressCode.note}
          </p>
        </FadeInSection>
      </section>

      <section className="py-24 px-6 bg-white">
        <FadeInSection className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display mb-4">{data.copy.rsvpTitle}</h2>
          <p className="text-sm font-sans text-[#8B837C] mb-2">{guestInfo.guestName}</p>
          <p className="text-sm font-sans text-[#8B837C] mb-10">
            {data.copy.rsvpDeadline}
          </p>
          <RSVPForm formUrl={data.integrations.rsvpFormUrl} guestInfo={guestInfo} />
        </FadeInSection>
      </section>

      <section className="py-20 px-6 bg-[#F8F5F0]">
        <FadeInSection className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#9BAFBA] font-sans text-xs uppercase tracking-[0.3em] mb-3">
              Musica
            </p>
            <h2 className="text-4xl md:text-5xl font-display mb-5">
              {data.music.playlistTitle}
            </h2>
            <div className="w-16 h-[1px] bg-[#9BAFBA] mx-auto" />
          </div>

          <div className="relative bg-[#3f474c] text-white rounded-[1.75rem] overflow-hidden shadow-[0_18px_45px_rgba(58,54,50,0.18)]">
            <a
              href={data.music.playlistUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute -right-2 -top-2 z-10 w-16 h-16 bg-[#2f3f6f] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
              aria-label="Abrir playlist en Spotify"
            >
              <Pause className="w-6 h-6 text-white" fill="currentColor" strokeWidth={0} />
            </a>

            <div className="p-5 sm:p-7">
              <div className="flex gap-5 items-center">
                <img
                  src={data.music.playlistCover}
                  alt={data.music.playlistTitle}
                  className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-lg shadow-md"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex justify-end mb-3">
                    <Music className="w-7 h-7 text-white/90" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-sans font-semibold leading-tight mb-2">
                    {data.couple.shortName}
                  </h3>
                  <p className="text-sm text-white/70 font-sans mb-4">
                    {data.music.playlistOwner}
                  </p>
                  <a
                    href={data.music.playlistUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-sans font-semibold text-white hover:text-white/75 transition-colors"
                  >
                    <span className="w-7 h-7 border-2 border-white rounded-full flex items-center justify-center">
                      <Plus className="w-4 h-4" />
                    </span>
                    Guardar en Spotify
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <span className="w-4 h-4 border-l-4 border-y-4 border-y-transparent border-l-white/90" />
                <div className="h-1 flex-1 bg-white/25 rounded-full" />
                <span className="w-4 h-4 border-r-4 border-y-4 border-y-transparent border-r-white/90" />
                <span className="text-sm font-sans text-white/90">00:00</span>
                <span className="text-lg leading-none text-white/80">...</span>
                <a
                  href={data.music.playlistUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto w-14 h-14 bg-white text-[#3f474c] rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                  aria-label="Reproducir playlist"
                >
                  <Play className="w-7 h-7 ml-1" fill="currentColor" strokeWidth={0} />
                </a>
              </div>
            </div>

            <div className="bg-[#333c41] px-5 sm:px-7 py-5 space-y-4 max-h-56 overflow-y-auto">
              {data.music.tracks.map((track, index) => (
                <div key={`${track.title}-${track.artist}`} className="grid grid-cols-[1.5rem_1fr_auto] gap-3 items-start">
                  <span className="text-white/60 font-sans text-sm pt-1">{index + 1}</span>
                  <div className="min-w-0">
                    <p className="font-sans font-semibold leading-tight truncate">{track.title}</p>
                    <p className="text-xs text-white/70 font-sans truncate">{track.artist}</p>
                  </div>
                  <span className="font-sans font-semibold text-sm text-white">{track.duration}</span>
                </div>
              ))}
            </div>

            <div className="p-5 sm:p-7 bg-[#333c41] border-t border-white/10">
              <p className="text-sm text-white/75 font-sans mb-4">{data.copy.musicText}</p>
              <div className="grid sm:grid-cols-2 gap-3 justify-items-center">
                <ExternalButton href={data.music.playlistUrl} variant="light" className="w-full max-w-64 px-5">
                  Abrir playlist
                </ExternalButton>
                <ExternalButton href={data.music.playlistUrl} variant="secondary" className="w-full max-w-64 px-5 border-white/40 text-white hover:bg-white/10">
                  Agregar en Spotify
                </ExternalButton>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      <section className="py-24 px-6 bg-[#9BAFBA] text-white text-center">
        <FadeInSection className="max-w-md mx-auto flex flex-col items-center">
          <AnimatedCameraIcon />
          <h2 className="text-3xl font-display mb-4 text-white">{data.copy.albumTitle}</h2>
          <p className="text-sm font-sans text-white/80 mb-10">{data.copy.albumText}</p>
          <ExternalButton href={data.integrations.photoAlbumUrl} variant="light">
            Ir al album
          </ExternalButton>

          <div className="w-full mt-10 pt-8 border-t border-white/20">
            <AnimatedInstagramIcon />
            <p className="text-3xl font-serif italic text-white mb-5">
              {data.integrations.hashtag}
            </p>
            <p className="text-sm font-sans text-white/75 mb-6">
              Usa nuestro hashtag para que podamos revivir cada momento.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 justify-items-center">
              <button
                type="button"
                onClick={copyHashtag}
                className="inline-flex items-center justify-center text-center w-full max-w-64 px-8 py-3 bg-white/15 hover:bg-white/25 text-white border border-white/35 font-sans tracking-widest text-xs uppercase rounded-full transition-colors duration-300"
              >
                {copiedHashtag ? "Copiado" : "Copiar hashtag"}
              </button>
              <ExternalButton href={hashtagUrl} variant="light" className="w-full max-w-64 px-5">
                Abrir Instagram
              </ExternalButton>
            </div>
          </div>
        </FadeInSection>
      </section>

      <section className="py-24 px-6 bg-white text-center">
        <FadeInSection className="max-w-xl mx-auto flex flex-col items-center">
          <AnimatedGiftIcon />
          <h2 className="text-3xl font-display mb-4">{data.gifts.title}</h2>
          <p className="text-sm font-sans text-[#8B837C] mb-8 leading-relaxed">
            {data.copy.giftsText}
          </p>
          <button
            type="button"
            onClick={() => setIsGiftModalOpen(true)}
            className="inline-flex items-center justify-center text-center px-8 py-3 bg-[#D8C7B3] hover:bg-[#c9b59e] text-white font-sans tracking-widest text-xs uppercase rounded-full transition-colors duration-300 shadow-md"
          >
            Ver datos bancarios
          </button>
        </FadeInSection>
      </section>

      {isGiftModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <button
            type="button"
            className="absolute inset-0 bg-[#3A3632]/45 backdrop-blur-sm"
            onClick={() => setIsGiftModalOpen(false)}
            aria-label="Cerrar modal de regalos"
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md bg-white rounded-3xl p-7 sm:p-8 shadow-[0_20px_60px_rgba(58,54,50,0.2)] border border-[#D8C7B3]/30 text-left"
          >
            <button
              type="button"
              onClick={() => setIsGiftModalOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F8F5F0] text-[#8B837C] hover:text-[#3A3632] transition-colors font-sans"
              aria-label="Cerrar"
              translate="no"
            >
              <X className="w-4 h-4 mx-auto" strokeWidth={1.75} />
            </button>

            <h3 className="text-3xl font-display text-[#3A3632] mb-6 text-center">
              Datos bancarios
            </h3>

            <div className="bg-[#F8F5F0] rounded-3xl border border-[#D8C7B3]/30 p-6 mb-6">
              <p className="text-xs uppercase tracking-widest text-[#8B837C] font-sans mb-2" translate="no">Alias</p>
              <p className="font-display text-xl mb-4 text-[#3A3632]" translate="no">{data.gifts.alias}</p>
              <p className="text-xs uppercase tracking-widest text-[#8B837C] font-sans mb-2" translate="no">CBU / CVU</p>
              <p className="font-sans text-sm mb-4 text-[#3A3632] break-all" translate="no">{data.gifts.cbu}</p>
              <p className="text-xs uppercase tracking-widest text-[#8B837C] font-sans mb-2" translate="no">Titular</p>
              <p className="font-sans text-sm text-[#3A3632] mb-4" translate="no">{data.gifts.holder}</p>
              <p className="text-xs uppercase tracking-widest text-[#8B837C] font-sans mb-2" translate="no">Banco</p>
              <p className="font-sans text-sm text-[#3A3632]" translate="no">{data.gifts.bank}</p>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={copyCbu}
                className="w-full inline-flex items-center justify-center text-center px-8 py-3 border border-[#D8C7B3] text-[#3A3632] hover:bg-[#F8F5F0] font-sans tracking-widest text-xs uppercase rounded-full transition-colors duration-300"
              >
                {copiedCbu ? "CBU copiado" : "Copiar CBU"}
              </button>
              <ExternalButton href={data.gifts.externalUrl} variant="primary" className="w-full">
                Regalar
              </ExternalButton>
            </div>
          </motion.div>
        </div>
      )}

      <section className="py-20 px-6 bg-[#F8F5F0]">
        <FadeInSection className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="text-center">
            <BedDouble className="w-6 h-6 text-[#8B837C] mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-2xl font-display mb-6">Hospedajes recomendados</h3>
            <div className="space-y-4">
              {data.hotels.map((hotel) => (
                <div key={hotel.name} className="bg-white p-6 rounded-2xl border border-[#D8C7B3]/30">
                  <h4 className="font-display text-lg mb-1">{hotel.name}</h4>
                  <p className="text-xs font-sans text-[#8B837C] mb-4">{hotel.description}</p>
                  <a
                    href={hotel.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] uppercase tracking-wider font-sans text-[#9BAFBA] hover:text-[#8B837C] transition-colors"
                  >
                    Ver hotel
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Car className="w-6 h-6 text-[#8B837C] mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-2xl font-display mb-6">Traslados</h3>
            <p className="text-sm font-sans text-[#8B837C] mb-6">{data.copy.transfersText}</p>
            <div className="space-y-3">
              {data.transfers.map((transfer) => (
                <a
                  key={transfer.label}
                  href={transfer.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full py-4 bg-white border border-[#D8C7B3]/50 rounded-2xl text-sm font-sans text-[#3A3632] hover:bg-[#D8C7B3] hover:text-white transition-colors"
                >
                  {transfer.label}
                </a>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url("${data.images.closing}")` }}
        />
        <div className="absolute inset-0 bg-black/40 z-0" />
        <FadeInSection className="relative z-10 p-6">
          <h2 className="text-3xl md:text-5xl font-serif italic text-white mb-6 leading-relaxed">
            "{data.copy.closingPhrase}"
          </h2>
          <p className="text-sm tracking-[0.3em] font-sans uppercase text-white/80">
            {data.couple.shortName}
          </p>
        </FadeInSection>
      </section>

      <footer className="bg-[#3A3632] py-8 text-center">
        <p className="text-[10px] uppercase tracking-widest text-[#8B837C] font-sans">
          <a
            href={data.copy.footerUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[#D8C7B3]"
          >
            {data.copy.footer}
          </a>
        </p>
      </footer>
    </div>
  );
}
