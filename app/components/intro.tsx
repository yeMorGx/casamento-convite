"use client";

import { useRef, useState } from "react";

interface IntroProps {
  onStart: () => void;
  onTransitionStart: () => void;
  onFinish: () => void;
}

export default function Intro({
  onStart,
  onTransitionStart,
  onFinish,
}: IntroProps) {
  const [started, setStarted] = useState(false);

  const transitionStarted = useRef(false);

  const cellVideoRef = useRef<HTMLVideoElement>(null);
  const deskVideoRef = useRef<HTMLVideoElement>(null);

  const startVideo = async () => {
    if (started) return;

    setStarted(true);
    onStart();

    // Vídeo dura 5s → fade começa aos 3s
    setTimeout(() => {
      if (!transitionStarted.current) {
        transitionStarted.current = true;
        onTransitionStart();
      }
    }, 3000);

    try {
      cellVideoRef.current?.play();
      deskVideoRef.current?.play();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="relative h-full w-full cursor-pointer overflow-hidden"
      onClick={startVideo}
      style={{ background: "var(--background)" }}
    >
      <video
        ref={cellVideoRef}
        src="/video/cellvideo2.mp4#t=0.001"
        className="absolute inset-0 h-full w-full object-cover md:hidden"
        playsInline
        preload="auto"
        muted
        onEnded={onFinish}
      />

      <video
        ref={deskVideoRef}
        src="/video/deskvideo.mp4#t=0.001"
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        playsInline
        preload="auto"
        muted
        onEnded={onFinish}
      />

      {/* restante do seu JSX permanece igual */}
    </div>
  );
}