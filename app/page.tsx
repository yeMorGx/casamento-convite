"use client";

import { useRef, useState } from "react";

import Intro from "./components/intro";
import Invitation from "./components/invite";
import BackgroundMusic from "./components/music";
import FallingFlowers from "./components/FallingFlowers";
import GoldenParticles from "./components/GoldenParticles";

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

      const progress = Math.min(
        (time - start) / duration,
        1
      );


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

      console.error(
        "Erro ao iniciar música:",
        err
      );

    }

  };


  const finishIntro = () => {

    // começa a transição

    setTransitioning(true);


    // troca para o convite no meio do fade

    setTimeout(() => {

      setOpened(true);

    }, 1000);


    // remove a camada

    setTimeout(() => {

      setTransitioning(false);

    }, 2200);

  };


  return (

    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-neutral-950
        p-4
      "
    >

      <div
        className="
          relative
          h-screen
          w-full
          max-w-[430px]
          max-h-[932px]
          overflow-hidden
          rounded-[32px]
          bg-black
          shadow-2xl
        "
      >

        <BackgroundMusic ref={audioRef} />


        {!opened ? (

          <Intro
            onStart={startMusic}
            onFinish={finishIntro}
          />

        ) : (

          <div className="animate-invite">

            <GoldenParticles />

            <FallingFlowers />

            <Invitation />

          </div>

        )}



        {/* TRANSIÇÃO */}

        <div
          className={`
            pointer-events-none
            absolute
            inset-0
            z-[100]

            bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),#FAF7F2_70%)]

            transition-opacity
            duration-[1200ms]
            ease-in-out

            ${
              transitioning
                ? "opacity-100"
                : "opacity-0"
            }

          `}
        />


      </div>

    </main>

  );

}