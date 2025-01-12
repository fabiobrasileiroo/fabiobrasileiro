"use client";

import { useRef } from "react";
import type { ConfettiRef } from "@/components/ui/confetti";
import Confetti from "@/components/ui/confetti";

export function ConfettiTitle() {
  const confettiRef = useRef<ConfettiRef>(null);

  const handleMouseEnter = () => {
    if (confettiRef.current) {
      confettiRef.current.fire({});
    }
  };

  return (
    <div
      className="relative flex pt-44 w-full flex-col items-center justify-center overflow-hidden rounded-lg"
      role="button"
      aria-label="Título com animação de confete"
      onMouseEnter={handleMouseEnter}
    >
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-50/55">
        Fábio <span className="max-sm:hidden">Brasileiro</span>
      </span>

      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 w-full h-full"
      />
    </div>
  );
}
