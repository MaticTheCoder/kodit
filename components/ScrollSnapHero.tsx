"use client";

import { useEffect } from "react";

export default function ScrollSnapHero() {
  useEffect(() => {
    let locked = false;

    const onWheel = (e: WheelEvent) => {
      const hero = document.querySelector("#hero");
      const zakaj = document.querySelector("#zakaj");

      if (!hero || !zakaj) return;

      const heroBottom = hero.getBoundingClientRect().bottom;

      if (heroBottom > 0 && e.deltaY > 0 && !locked) {
        locked = true;

        zakaj.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setTimeout(() => {
          locked = false;
        }, 800);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  return null;
}