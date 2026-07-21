"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2026-08-29T17:00:00");

  const getTimeLeft = () => {
    const diff = weddingDate.getTime() - Date.now();

    if (diff <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(
        Math.floor((diff / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0"),
      minutes: String(
        Math.floor((diff / (1000 * 60)) % 60)
      ).padStart(2, "0"),
      seconds: String(
        Math.floor((diff / 1000) % 60)
      ).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-14 flex flex-col items-center">
      <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#B08D57]">
        Faltam apenas
      </p>

      <div className="flex items-end gap-3">
        <Number value={timeLeft.days} label="Dias" />
        <Separator />
        <Number value={timeLeft.hours} label="Horas" />
        <Separator />
        <Number value={timeLeft.minutes} label="Min" />
        <Separator />
        <Number value={timeLeft.seconds} label="Seg" />
      </div>
    </div>
  );
}

function Number({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-body text-5xl leading-none text-[#7A5C4D]">
        {value}
      </span>

      <span className="mt-2 text-[11px] uppercase tracking-[0.25em] text-[#9B8B84]">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span className="pb-6 text-3xl text-[#D4AF37]/60">
      :
    </span>
  );
}