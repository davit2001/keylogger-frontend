"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { format } from "date-fns";

const statusLines = [
  { label: "NETWORK INTRUSION DETECTED", value: "192.168.44.103 → 10.0.0.1" },
  { label: "TARGET GEOLOCATION", value: "48°12'N 16°22'E — CENTRAL DISTRICT" },
  { label: "DEVICE FINGERPRINT", value: "Android SM-G998B / IMEI: 354678910" },
  { label: "ENCRYPTION PROTOCOL", value: "AES-256-GCM [PARTIAL BYPASS]" },
  { label: "THREAT CLASSIFICATION", value: "OMEGA-CLASS / PRIORITY ONE" },
];

export default function TerminalMonitor() {
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    setTimestamp(format(new Date(), "dd MMM yyyy HH:mm:ss 'UTC'"));
  }, []);

  return (
    <div className="absolute inset-0 p-6 md:p-10 flex flex-col gap-6 font-mono text-green-400 select-none">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse shadow-lg shadow-red-500/50" />
          <span className="text-sm font-bold tracking-[0.3em] text-red-400">
            SURVEILLANCE ACTIVE
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xs text-green-600 tracking-widest"
        >
          {timestamp}
        </motion.div>
      </div>

      {/* Status lines */}
      <div className="flex flex-col gap-2 mt-2">
        {statusLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.35, duration: 0.3 }}
            className="flex items-center gap-3 text-xs"
          >
            <span className="text-green-600">[{String(i + 1).padStart(2, "0")}]</span>
            <span className="text-green-500 w-52 shrink-0">{line.label}</span>
            <span className="text-slate-400">→</span>
            <span className="text-green-300">{line.value}</span>
          </motion.div>
        ))}
      </div>

      {/* Monitoring bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="flex items-center gap-3 text-xs mt-1"
      >
        <span className="text-green-600">STATUS</span>
        <div className="flex-1 h-px bg-green-900/60 relative overflow-hidden max-w-xs">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 3, duration: 2, ease: "linear" }}
            style={{ originX: 0 }}
            className="absolute inset-0 bg-green-500/70"
          />
        </div>
        <span className="text-green-400 animate-pulse tracking-widest">
          MONITORING...
        </span>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-green-700/60" />
      <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-green-700/60" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-green-700/60" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-green-700/60" />
    </div>
  );
}
