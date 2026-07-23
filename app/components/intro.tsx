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

  const videoRef = useRef<HTMLVideoElement>(null);

  const startVideo = async () => {
    if (started) return;

    setStarted(true);

    onStart();

    const video = videoRef.current;

    if (!video) return;

    try {
      video.currentTime = 0;

      await video.play();
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
      {/* Aviso versão teste */}
      <div
        className="
          absolute
          top-9
          left-1/2
          -translate-x-1/2
          z-20

          rounded-full
          border
          px-5
          py-2

          backdrop-blur-sm
        "
        style={{
          borderColor: "rgba(217,144,164,.35)",
          background: "rgba(255,248,250,.45)",
        }}
      >
        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.35em]
          "
          style={{
            color: "var(--color-primary-dark)",
          }}
        >
          Versão teste
        </p>
      </div>

      <video
        ref={videoRef}
        src="/video/envelope.mp4"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
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
          bottom-24
          left-1/2
          -translate-x-1/2

          transition-all
          duration-700

          ${
            started
              ? "opacity-0 translate-y-3"
              : "opacity-100 translate-y-0"
          }
        `}
      >
        <p
          className="
            animate-pulse
            text-sm
            uppercase
            tracking-[0.35em]
          "
          style={{
            color: "#ffffff",
            textShadow: "0 2px 12px rgba(0,0,0,.35)",
          }}
        >
          Toque para abrir
        </p>
      </div>
    </div>
  );
}