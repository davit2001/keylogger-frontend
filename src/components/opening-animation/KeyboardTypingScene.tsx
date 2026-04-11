"use client";
import { motion } from "framer-motion";

const lines = [
  "> INTERCEPTING COMMUNICATIONS...",
  "> DECRYPTING PAYLOAD FRAGMENTS...",
  "> SUBJECT PROFILE LOADED: CLASSIFIED",
  "> CROSS-REFERENCING Keylogger DATABASE...",
  "> ACCESS GRANTED — CLEARANCE: OMEGA",
];

function TypingLine({
  text,
  delay,
  isLast,
}: {
  text: string;
  delay: number;
  isLast: boolean;
}) {
  const chars = text.split("");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="flex items-center"
    >
      <motion.span
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.04, delayChildren: delay } },
        }}
        className={`font-mono text-sm md:text-base ${
          isLast ? "text-amber-400 font-bold" : "text-green-400"
        }`}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            {char}
          </motion.span>
        ))}
        {isLast && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="ml-0.5 inline-block w-2 h-4 bg-amber-400 align-middle"
          />
        )}
      </motion.span>
    </motion.div>
  );
}

export default function KeyboardTypingScene() {
  const lineDuration = 1.6;
  const lineDelays = lines.map((_, i) => 3 + i * lineDuration);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative bg-black/70 border border-green-800/60 rounded-lg p-6 md:p-10 max-w-2xl w-full mx-4 shadow-2xl shadow-green-950/40">
        {/* Terminal header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-green-900/40">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs font-mono text-green-600 tracking-widest">
            KEYLOGGER_v4.2.1
          </span>
        </div>

        {/* Typing lines */}
        <div className="flex flex-col gap-3 min-h-[160px]">
          {lines.map((line, i) => (
            <TypingLine
              key={i}
              text={line}
              delay={lineDelays[i]}
              isLast={i === lines.length - 1}
            />
          ))}
        </div>

        {/* Scanline overlay on terminal */}
        <div
          className="absolute inset-0 rounded-lg pointer-events-none opacity-30"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.03) 2px, rgba(0,255,0,0.03) 4px)",
          }}
        />
      </div>
    </div>
  );
}
