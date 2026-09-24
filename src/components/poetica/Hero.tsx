"use client";

import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-pour.jpg";

type CounterProps = {
  value: number;
  suffix?: string;
  pad?: number;
  started: boolean;
};

function Counter({ value, suffix = "", pad = 0, started }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!started) return;

    const duration = 35000;
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      setDisplayValue(Math.round(value * eased));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [started, value]);

  return <>{String(displayValue).padStart(pad, "0")}{suffix}</>;
}

export function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const stats = statsRef.current;
    if (!stats || statsStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStatsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(stats);
    return () => observer.disconnect();
  }, [statsStarted]);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      <div data-reveal className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center reveal-sequence">
        <div className="lg:col-span-6 animate-fade-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-gold" />
            <span className="editorial-eyebrow text-muted-foreground">
              Brooklyn · Manhattan · Est. 2020
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
            Radical Hospitality.
            <br />
            <span className="italic text-gold">Handcrafted</span> Coffee.
          </h1>

          <p className="mt-8 max-w-xl text-base lg:text-lg text-muted-foreground leading-relaxed">
            Experience artisanal espresso, organic matcha, and a sanctuary of
            art and solidarity across seven New York neighborhoods — and one
            beloved mobile truck at Prospect Park.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#order"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gold hover:text-gold-foreground transition-all duration-300 hover:scale-[1.02]"
            >
              Order Direct & Save
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 px-2 py-4 text-xs uppercase tracking-widest font-medium link-underline"
            >
              Explore the Menu →
            </a>
          </div>

          <div ref={statsRef} className="mt-16 grid grid-cols-3 gap-8 max-w-md">
            {[
              { value: 8, pad: 2, suffix: "", label: "Locations" },
              { value: 100, pad: 0, suffix: "%", label: "Independent" },
              { value: 365, pad: 0, suffix: "", label: "Days a Year" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl tabular-nums">
                  <Counter
                    value={s.value}
                    pad={s.pad}
                    suffix={s.suffix}
                    started={statsStarted}
                  />
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-editorial animate-fade-up">
            <img
              src={heroImg}
              alt="Barista pouring latte art at Poetica Coffee"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-foreground/10" />
          </div>
          <div className="hidden lg:flex absolute -left-6 bottom-10 flex-col items-center gap-3">
            <span className="font-serif italic text-sm rotate-180 [writing-mode:vertical-rl] text-muted-foreground">
              Coffee as Art
            </span>
            <span className="h-12 w-px bg-foreground/40" />
          </div>
          <div className="absolute -bottom-6 -right-2 lg:right-6 bg-background border border-border px-6 py-5 max-w-[220px] shadow-editorial">
            <p className="font-serif italic text-lg leading-snug">
              "A cup, a book, a neighborhood."
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground">
              — The Poetica Promise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
