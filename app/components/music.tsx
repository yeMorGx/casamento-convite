"use client";

import { forwardRef } from "react";

const BackgroundMusic = forwardRef<HTMLAudioElement>((_, ref) => {
  return (
    <audio
      ref={ref}
      src="/music/wedding.mp3"
      preload="auto"
      loop
    />
  );
});

BackgroundMusic.displayName = "BackgroundMusic";

export default BackgroundMusic;