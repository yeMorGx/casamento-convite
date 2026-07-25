"use client";

import { useRef, useState } from "react";

import Intro from "./components/intro";
import Invitation from "./components/invite";
import BackgroundMusic from "./components/music";
import FallingFlowers from "./components/FallingFlowers";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const fadeInAudio = (
    audio: HTMLAudioElement,
    targetVolume = 0.35,
    duration = 3000
  ) => {
    audio.volume = 0;

    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);

      audio.volume = progress * targetVolume;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const startMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      audio.currentTime = 0;
      await audio.play();
      fadeInAudio(audio);
    } catch (err) {
      console.error("Erro ao iniciar música:", err);
    }
  };

  return (
    <main
      className="min-h-screen w-full"
      style={{
        background: "var(--background)",
      }}
    >
      <div
        className="relative h-screen w-full overflow-hidden"
        style={{
          background: "var(--background)",
        }}
      >
        <BackgroundMusic ref={audioRef} />

        {!opened ? (
          <>
            <Intro
              onStart={startMusic}
              onTransitionStart={() => {
                setTransitioning(true);
              }}
              onFinish={() => {
                setOpened(true);

                setTimeout(() => {
                  setTransitioning(false);
                }, 1000);
              }}
            />

            <div
              className="
                pointer-events-none
                absolute
                bottom-20
                left-1/2
                z-50
                -translate-x-1/2
                rounded-full
                bg-white/10
                px-7
                py-4
                backdrop-blur-md
                border
                border-white/20
                shadow-[0_8px_32px_rgba(0,0,0,0.15)]
              "
            >
              <div className="flex items-center gap-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                </span>

                <p
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.5em]
                    font-medium
                  "
                  style={{
                    color: "#ffffff",
                    textShadow: "0 2px 10px rgba(0,0,0,.3)",
                  }}
                >
                  Toque para abrir
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="h-full w-full animate-invite">
            <FallingFlowers />
            <Invitation />
          </div>
        )}

        {/* Transição envelope -> convite */}
        <div
          className={`
            pointer-events-none
            absolute
            inset-0
            z-[100]
            transition-opacity
            duration-[1200ms]
            ease-in-out
            ${transitioning ? "opacity-100" : "opacity-0"}
          `}
          style={{
            background:
              "radial-gradient(circle at center, rgba(239,201,210,.28), var(--background) 75%)",
          }}
        />
      </div>
    </main>
  );
}