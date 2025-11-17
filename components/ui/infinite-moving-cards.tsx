"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    logo?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);

    // Clone items for infinite loop
    scrollerContent.forEach((item) => {
      const duplicated = item.cloneNode(true);
      scrollerRef.current!.appendChild(duplicated);
    });

    getDirection();
    getSpeed();
    setStart(true);
  }

  const getDirection = () => {
    if (!containerRef.current) return;

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    if (!containerRef.current) return;

    const speeds = {
      fast: "20s",
      normal: "40s",
      slow: "80s",
    };

    containerRef.current.style.setProperty(
      "--animation-duration",
      speeds[speed]
    );
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4",
          start && "animate-scroll",
          pauseOnHover && "hover:paused"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={item.name + idx}
            className="relative w-[350px] md:w-[450px] shrink-0 rounded-2xl border border-zinc-700 bg-[#0e0e0f]/50 px-8 py-6 flex flex-col justify-between"
          >
            {/* QUOTE */}
            <p className="text-sm text-gray-200 leading-relaxed">
              {item.quote}
            </p>

            {/* FOOTER (LOGO + NAME) */}
            <div className="mt-8 flex items-center gap-3">
              {item.logo && (
                <div className="h-12 w-20 rounded-lg bg-white border border-zinc-600 overflow-hidden shrink-0 flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="object-contain h-full w-full p-1"
                  />
                </div>
              )}

              <span className="text-sm font-medium text-gray-300">
                {item.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
