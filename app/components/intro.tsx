"use client";

import { useRef, useState } from "react";

interface IntroProps {
  onStart: () => void;
  onFinish: () => void;
}

export default function Intro({
  onStart,
  onFinish,
}: IntroProps) {
  const [started, setStarted] = useState(false);

  const cellVideoRef = useRef<HTMLVideoElement>(null);
  const deskVideoRef = useRef<HTMLVideoElement>(null);

  const startVideo = async () => {
    if (started) return;

    setStarted(true);

    onStart();

    try {
      if (cellVideoRef.current) {
        cellVideoRef.current.currentTime = 0;
        cellVideoRef.current.play().catch((err) => console.error(err));
      }
      if (deskVideoRef.current) {
        deskVideoRef.current.currentTime = 0;
        deskVideoRef.current.play().catch((err) => console.error(err));
      }
    } catch (err) {
      console.error(
        "Erro ao iniciar vídeo:",
        err
      );
    }
  };

  return (
    <div
      className="
        relative
        h-full
        w-full
        cursor-pointer
        overflow-hidden
      "
      style={{
        background: "var(--background)",
      }}
      onClick={startVideo}
    >
      <video
        ref={cellVideoRef}
        src="/video/cellvideo.mp4"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          md:hidden
        "
        playsInline
        preload="auto"
        muted
        onEnded={onFinish}
      />

      <video
        ref={deskVideoRef}
        src="/video/deskvideo.mp4"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          hidden
          md:block
        "
        playsInline
        preload="auto"
        muted
        onEnded={onFinish}
      />

      {/* Overlay suave */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,248,250,.08), rgba(217,144,164,.08))",
        }}
      />

      {/* Texto */}
      <div
        className={`
          absolute
          bottom-20
          left-1/2
          -translate-x-1/2

          transition-all
          duration-700
          ease-out

          ${
            started
              ? "opacity-0 translate-y-8 scale-95"
              : "opacity-100 translate-y-0 scale-100"
          }
        `}
      >
        <div
          className="
            flex
            items-center
            gap-4
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
          {/* Bolinha pulsante */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>

          <p
            className="
            w-50
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
    </div>
  );
}