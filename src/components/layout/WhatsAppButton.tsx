"use client";

import { whatsappLink } from "@/lib/contact";

const PREFILLED_MESSAGE = "Hoi NowWeGo, ik wil graag meer weten over jullie content marketing.";

export default function WhatsAppButton() {
  const href = whatsappLink(PREFILLED_MESSAGE);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ons"
      className="animate-periodic-pulse group fixed bottom-6 left-6 z-40 flex h-14 items-center gap-0 overflow-hidden rounded-full bg-[#25D366]/90 pl-[14px] pr-[14px] text-paper shadow-[0_16px_32px_-10px_rgba(37,211,102,0.55)] backdrop-blur-md transition-all duration-500 ease-out hover:gap-2.5 hover:pr-6 md:bottom-8 md:left-8"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-[26px] w-[26px] shrink-0"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.92a9.86 9.86 0 0 0-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.07c-.24.68-1.4 1.32-1.93 1.38-.5.06-1.05.29-3.5-.73-2.95-1.22-4.83-4.2-4.98-4.4-.14-.19-1.2-1.59-1.2-3.04s.76-2.15 1.03-2.45c.26-.29.58-.36.77-.36h.55c.18 0 .42-.03.64.49.24.58.82 2 .89 2.15.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.37 1.47.29.15.46.13.63-.06.17-.19.72-.83.91-1.12.19-.29.38-.24.63-.15.26.1 1.66.79 1.94.93.29.15.48.22.55.34.07.14.07.72-.17 1.4Z" />
      </svg>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-500 ease-out group-hover:max-w-[9rem] group-hover:opacity-100">
        WhatsApp ons
      </span>
    </a>
  );
}
