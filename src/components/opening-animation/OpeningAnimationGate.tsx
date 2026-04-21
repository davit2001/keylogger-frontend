"use client";
import { useAnimationGate } from "@/hooks/useAnimationGate";
import OpeningAnimation from "./OpeningAnimation";

export default function OpeningAnimationGate() {
  const { animationDone, markDone } = useAnimationGate();
  if (animationDone) return null;
  return <OpeningAnimation onComplete={markDone} />;
}
