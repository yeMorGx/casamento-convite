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

    // começa transição

    setTransitioning(true);


    // troca para convite durante o fade

    setTimeout(() => {

      setOpened(true);

    }, 900);



    // remove transição

    setTimeout(() => {

      setTransitioning(false);

    }, 2000);

  };



  return (

    <main
      className="
        min-h-screen
        w-full
        bg-[#FAF7F2]
      "
    >

      <div
        className="
          relative
          h-screen
          w-full
          overflow-hidden
          bg-black
        "
      >


        <BackgroundMusic ref={audioRef} />



        {!opened ? (

          <Intro
            onStart={startMusic}
            onFinish={finishIntro}
          />


        ) : (

          <div
            className="
              h-full
              w-full
              animate-invite
            "
          >

            <GoldenParticles />

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

            bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),#FAF7F2_75%)]

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