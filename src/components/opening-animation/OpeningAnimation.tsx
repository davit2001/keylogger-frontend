"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  onComplete: () => void;
}

// One full keylogger animation cycle (type + data-sent flash) takes ~9 seconds.
// We start the exit fade at 9000ms so exactly one cycle plays before the dashboard appears.
const CYCLE_DURATION = 9000;

export default function OpeningAnimation({ onComplete }: Props) {
  const [phase, setPhase] = useState<"active" | "exiting">("active");

  useEffect(() => {
    const t = setTimeout(() => setPhase("exiting"), CYCLE_DURATION);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase === "active" && (
        <motion.div
          key="keylogger-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50"
        >
          <iframe
            src="/keylogger-demo.html"
            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
            title="Cybersecurity Awareness — Keylogger Simulation"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
