"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#autoridad", label: "Sobre mí" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="text-display text-xl tracking-widest text-foreground">
          CARLOS <span className="gold-gradient-text">SUPREMA</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-muted transition-colors hover:text-gold-soft"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://ig.me/m/carlos_suprema"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold/60 px-5 py-2 text-sm tracking-wide text-gold-soft transition-colors hover:bg-gold hover:text-background"
          >
            Agendar consulta
          </a>
        </div>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-foreground transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-hairline bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-muted transition-colors hover:text-gold-soft"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://ig.me/m/carlos_suprema"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-gold/60 px-5 py-3 text-center text-base text-gold-soft"
            >
              Agendar consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
