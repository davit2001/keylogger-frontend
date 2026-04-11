"use client";
import { useState } from "react";

export function useAnimationGate() {
  const [animationDone, setAnimationDone] = useState(false);
  return { animationDone, markDone: () => setAnimationDone(true) };
}