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


    } catch(err) {

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
        bg-black
      "

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
    border-white/20
    bg-black/30
    px-5
    py-2

    backdrop-blur-sm
  "
>
  <p
    className="
      text-[10px]
      uppercase
      tracking-[0.35em]
      text-white/70
    "
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
        className="
          absolute
          inset-0
          bg-black/10
        "
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
            text-white
          "
        >
          Toque para abrir
        </p>


      </div>


    </div>

  );

}