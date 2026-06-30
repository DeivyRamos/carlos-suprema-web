import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden border-b border-hairline pt-28"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/dragon-sleeve.jpg"
          alt="Tatuaje de manga estilo realismo y blackwork por Carlos Suprema"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_15%] opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-background/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <p className="mb-4 text-xs tracking-[0.4em] text-gold uppercase">
          Tatuajes a medida · Santiago, Chile
        </p>
        <h1 className="text-display text-[18vw] leading-[0.85] text-foreground sm:text-[9rem] md:text-[10rem]">
          CARLOS
          <br />
          <span className="gold-gradient-text">SUPREMA</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-muted sm:text-xl">
          Línea fina, realismo y blackwork con precisión milimétrica.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://ig.me/m/carlos_suprema"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-7 py-3.5 text-center text-sm font-semibold tracking-wide text-background transition-transform hover:scale-[1.03]"
          >
            Agendar consulta
          </a>
          <a
            href="#portafolio"
            className="rounded-full border border-foreground/25 px-7 py-3.5 text-center text-sm font-semibold tracking-wide text-foreground transition-colors hover:border-gold hover:text-gold-soft"
          >
            Ver trabajos
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 border-t border-hairline pt-6 text-sm text-muted">
          <span>
            <strong className="text-foreground">39K+</strong> seguidores
          </span>
          <span>
            <strong className="text-foreground">474</strong> publicaciones
          </span>
          <span>
            <strong className="text-foreground">@carlos_suprema</strong>
          </span>
        </div>
      </div>
    </section>
  );
}
