import Image from "next/image";
import Reveal from "./Reveal";

export default function CtaSection() {
  return (
    <section id="contacto" className="relative overflow-hidden border-b border-hairline py-28 sm:py-36">
      <div className="absolute inset-0">
        <Image
          src="/images/lotus-fine-line.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold uppercase">Agenda tu próxima pieza</p>
          <h2 className="text-display mt-5 text-5xl leading-[0.9] text-foreground sm:text-6xl md:text-7xl">
            HABLEMOS DE TU <span className="gold-gradient-text">PRÓXIMO TATUAJE</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base text-muted sm:text-lg">
            Cuéntame tu idea por Instagram y te respondo para coordinar referencia, zona y fecha.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://ig.me/m/carlos_suprema"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-gold px-8 py-4 text-center text-sm font-semibold tracking-wide text-background transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Escribir por Instagram
            </a>
            <a
              href="https://www.instagram.com/carlos_suprema/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-foreground/25 px-8 py-4 text-center text-sm font-semibold tracking-wide text-foreground transition-colors hover:border-gold hover:text-gold-soft sm:w-auto"
            >
              Ver Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
