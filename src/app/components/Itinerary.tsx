import { Heart, Wine, Book, Utensils, Music, Moon, MapPin } from "lucide-react";
import { motion } from "motion/react";
import type { ItineraryItemData, WeddingData } from "../data/weddingData";

interface ItineraryProps {
  items: ItineraryItemData[];
  locations: WeddingData["locations"];
}

const iconMap = {
  heart: Heart,
  wine: Wine,
  book: Book,
  utensils: Utensils,
  music: Music,
  moon: Moon,
};

export function Itinerary({ items, locations }: ItineraryProps) {
  return (
    <div className="relative py-8">
      <motion.div
        className="absolute left-[38%] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#D8C7B3] -translate-x-1/2 origin-top"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="flex flex-col gap-8 md:gap-12">
        {items.map((item, index) => {
          const Icon = iconMap[item.icon];
          const locationUrl = item.locationKey ? locations[item.locationKey].mapsUrl : "";

          return (
            <motion.div
              key={`${item.time}-${item.title}`}
              className="relative flex items-center justify-center w-full min-h-12 md:grid md:grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)] md:gap-x-10"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: index * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className={`w-[44%] ml-[48%] flex flex-col items-start text-left md:w-auto md:ml-0 md:px-0 md:row-start-1 ${
                  index % 2 === 0
                    ? "md:col-start-1 md:items-end md:text-right"
                    : "md:col-start-3 md:items-start md:text-left"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: index * 0.12 + 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-[#8B837C] font-sans text-xs font-medium tracking-widest uppercase mb-1">
                  {item.time}
                </span>
                <span className="text-[#3A3632] font-display text-xl leading-tight mb-2">
                  {item.title}
                </span>
                {locationUrl && (
                  <a
                    href={locationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-[10px] text-[#9BAFBA] hover:text-[#8B837C] uppercase tracking-wider font-sans transition-colors"
                  >
                    <MapPin className="w-3 h-3" />
                    Ver mapa
                  </a>
                )}
              </motion.div>

              <motion.div
                className="absolute left-[38%] md:static md:col-start-2 md:row-start-1 md:translate-x-0 -translate-x-1/2 w-10 h-10 bg-[#F8F5F0] border border-[#D8C7B3] rounded-full flex items-center justify-center z-10"
                initial={{ opacity: 0, scale: 0.65 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: index * 0.12 + 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <Icon className="w-5 h-5 text-[#9BAFBA]" strokeWidth={1.5} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
