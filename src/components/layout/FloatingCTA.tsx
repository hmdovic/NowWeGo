"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >
        document.documentElement.scrollHeight - 400;
      setVisible(window.scrollY > window.innerHeight * 0.9 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#contact"
          data-cursor="view"
          data-cursor-label="Start"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-medium text-paper shadow-[0_20px_40px_-10px_rgba(10,10,11,0.35)] transition-colors hover:bg-accent md:flex"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-soft opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-soft" />
          </span>
          Plan een contentscan
        </motion.a>
      )}
    </AnimatePresence>
  );
}
