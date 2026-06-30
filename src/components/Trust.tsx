import Image from "next/image";
import Reveal from "./Reveal";

const points = [
  {
    title: "Certificación en asepsia e higiene",
    text: "Formación sanitaria certificada en Chile (EdePra Capacitaciones y Fundación DIAM).",
  },
  {
    title: "Protocolo de bioseguridad",
    text: "Material de un solo uso y guantes en cada sesión, visible en su propio contenido.",
  },
  {
    title: "Comunidad real",
    text: "Más de 39.000 personas siguen su trabajo en Instagram.",
  },
  {
    title: "Portafolio extenso",
    text: "Más de 470 publicaciones documentando piezas reales, sin relleno.",
  },
];

export default function Trust() {
  return (
    <section className="border-b border-hairline py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <Reveal>
            <p className="text-xs tracking-[0.4em] text-gold uppercase">Confianza</p>
            <h2 className="text-display mt-4 max-w-md text-4xl leading-[0.95] text-foreground sm:text-5xl">
              Higiene y <span className="gold-gradient-text">seriedad</span>, no solo arte.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-7 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="border-l-2 border-gold/50 pl-4">
                  <h3 className="text-sm font-semibold tracking-wide text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-hairline shadow-[0_0_60px_-15px_rgba(201,164,76,0.25)]">
            <Image
              src="/images/certificacion-higiene.jpg"
              alt="Certificación de asepsia e higiene de Carlos Suprema, emitida en Chile"
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
