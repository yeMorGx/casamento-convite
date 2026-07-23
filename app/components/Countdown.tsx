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
      <p
        className="mb-5 text-xs uppercase tracking-[0.35em]"
        style={{ color: "var(--color-gold)" }}
      >
        Faltam apenas
      </p>

      <div
        className="flex items-end gap-4 rounded-3xl px-8 py-6 shadow-lg"
        style={{
          background: "var(--color-surface)",
          borderColor: "var(--color-border)",
          boxShadow: "0 12px 30px var(--shadow-soft)",
        }}
      >
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
    <div className="flex min-w-[72px] flex-col items-center">
      <span
        className="font-body text-5xl leading-none"
        style={{ color: "var(--color-primary-dark)" }}
      >
        {value}
      </span>

      <span
        className="mt-3 text-[11px] uppercase tracking-[0.25em]"
        style={{ color: "var(--text-secondary)" }}
      >
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span
      className="pb-6 text-3xl"
      style={{ color: "var(--color-gold)" }}
    >
      :
    </span>
  );
}