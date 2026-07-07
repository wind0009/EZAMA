"use client";

import { useEffect, useState } from "react";

export default function SiteEnhancements() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setShowTop(window.scrollY > 640);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[80] h-0.5 bg-transparent" aria-hidden="true">
        <div className="h-full bg-yellow-400 transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-yellow-400 font-black text-blue-950 shadow-[0_12px_34px_rgba(8,16,43,.24)] transition duration-300 hover:-translate-y-1 hover:bg-yellow-300 ${showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"}`}
        aria-label="Revenir en haut"
      >
        ↑
      </button>
    </>
  );
}
