import Image from "next/image";
import Reveal from "./Reveal";

const groups = [
  {
    title: "Realismo & Blackwork",
    description: "Mangas completas, alto contraste y profundidad.",
    images: [
      { src: "/images/dragon-sleeve.jpg", alt: "Manga de dragón en blackwork y realismo" },
      { src: "/images/collage-sleeves.jpg", alt: "Composición de mangas en realismo y blackwork" },
      { src: "/images/no-risk-sleeve.jpg", alt: "Manga de realismo y lettering" },
      { src: "/images/promo-realismo-blackwork.jpg", alt: "Tres estilos, un estándar: realismo y blackwork" },
    ],
  },
  {
    title: "Línea Fina",
    description: "Diseños pequeños, detalles que hablan.",
    images: [
      { src: "/images/lotus-fine-line.jpg", alt: "Tatuaje de loto en línea fina" },
      { src: "/images/fine-line-band.jpg", alt: "Brazalete abstracto en línea fina" },
      { src: "/images/promo-small-tattoos.jpg", alt: "Small tattoos en línea fina" },
    ],
  },
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="border-b border-hairline py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold uppercase">Portafolio</p>
          <h2 className="text-display mt-4 max-w-2xl text-4xl leading-[0.95] text-foreground sm:text-5xl">
            Trabajos reales, <span className="gold-gradient-text">directo del Instagram.</span>
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16">
          {groups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 100}>
              <div className="mb-5 flex items-baseline justify-between border-b border-hairline pb-4">
                <h3 className="text-display text-2xl text-gold-soft sm:text-3xl">{group.title}</h3>
                <span className="text-sm text-muted">{group.description}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
                {group.images.map((img) => (
                  <div
                    key={img.src}
                    className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-hairline"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 48vw, 30vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-hairline bg-surface px-6 py-10 text-center sm:py-12">
            <p className="max-w-md text-sm text-muted sm:text-base">
              Este es solo un adelanto. El portafolio completo, con más de 470
              piezas, está en Instagram.
            </p>
            <a
              href="https://www.instagram.com/carlos_suprema/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gold/60 px-6 py-3 text-sm font-semibold tracking-wide text-gold-soft transition-colors hover:bg-gold hover:text-background"
            >
              Ver más en Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
