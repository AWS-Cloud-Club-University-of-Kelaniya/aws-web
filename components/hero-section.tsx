"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const TARGET_DATE = new Date("2026-04-25T09:00:00+05:30");

function getTimeLeft() {
  const diff = Math.max(0, TARGET_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

const CountdownCircle = ({
  value,
  label,
}: {
  value: number;
  label: string;
}) => (
  <div className="countdown-circle rounded-full w-20 h-20 sm:w-24 sm:h-24 flex flex-col items-center justify-center">
    <span className="text-2xl sm:text-3xl font-bold font-display text-white">
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-xs text-dark/80">{label}</span>
  </div>
);

const HeroSection = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);
  const [backgroundSize, setBackgroundSize] = useState("100% auto");
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  useEffect(() => {
    // Set initial time only on client after hydration
    setTime(getTimeLeft());
    setIsMounted(true);

    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    // Handle responsive background size and overlay opacity
    const handleResize = () => {
      setBackgroundSize(window.innerWidth < 768 ? "auto 50%" : "100% auto");
      setOverlayOpacity(window.innerWidth < 768 ? 0.8 : 0);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative hexagon-pattern hero-bg min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/bg_banner.jpg')",
        backgroundSize: backgroundSize,
        backgroundRepeat: "repeat-y",
        backgroundColor: "RGB(35, 47, 63)",
      }}
    >
      {/* Background overlay for transparency */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: "rgba(35, 47, 63, 0.8)",
          opacity: overlayOpacity,
        }}
      />

      {/* Decorative hexagon side elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-64 h-full opacity-20 bg-gradient-to-r from-purple-600/20 to-transparent" />
        <div className="absolute right-0 top-0 w-64 h-full opacity-20 bg-gradient-to-l from-cyan/20 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        <img
          src="/AWS_SCDlogo_RGB.svg"
          alt="AWS Community Day Sri Lanka"
          className="w-64 sm:w-80 md:w-96"
        />

        {/* <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-wider text-gradient-gold uppercase">
          Security Edition
        </h1> */}

        <div className="text-lg sm:text-xl text-foreground/90 font-medium">
          <p>April 25, 2026</p>
          <p className="text-muted-foreground">
            Faculty of Science, University of Kelaniya
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          {isMounted ? (
            <>
              <CountdownCircle value={time.days} label="Days" />
              <CountdownCircle value={time.hours} label="Hours" />
              <CountdownCircle value={time.minutes} label="Minutes" />
              <CountdownCircle value={time.seconds} label="Seconds" />
            </>
          ) : (
            <>
              <CountdownCircle value={0} label="Days" />
              <CountdownCircle value={0} label="Hours" />
              <CountdownCircle value={0} label="Minutes" />
              <CountdownCircle value={0} label="Seconds" />
            </>
          )}
        </div>

        <Button
          asChild
          size="lg"
          className="mt-6 text-base px-8 text-white border-0"
          style={{
            background:
              "linear-gradient(90deg, #a855f7 0%, #ec4899 50%, #f97316 100%)",
          }}
        >
          <a
            href="https://scdsrilanka.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Event Details
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
