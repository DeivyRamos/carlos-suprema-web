import Image from "next/image";
import Reveal from "./Reveal";
import Counter from "./Counter";

const stats = [
  { value: 39, suffix: "K+", label: "Seguidores en Instagram" },
  { value: 474, suffix: "", label: "Publicaciones documentadas" },
  { value: 3, suffix: "", label: "Estilos dominados" },
];

export default function Authority() {
  return (
    <section id="autoridad" className="relative border-b border-hairline bg-surface py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-hairline">
            <Image
              src="/images/sesion-trabajo.jpg"
              alt="Carlos Suprema tatuando en sesión, con guantes y protocolo de higiene"
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs tracking-[0.4em] text-gold uppercase">Sobre el artista</p>
            <h2 className="text-display mt-4 text-4xl leading-[0.95] text-foreground sm:text-5xl">
              Tres estilos. <span className="gold-gradient-text">Un mismo estándar.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Carlos Suprema es tatuador especializado en línea fina, realismo y
              blackwork, con base en Santiago, Chile. Su trabajo reúne a una
              comunidad de más de 39.000 personas en Instagram y un portafolio
              de más de 470 piezas documentadas, con formación certificada en
              asepsia e higiene.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-hairline pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-display text-3xl text-gold-soft sm:text-4xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-1 text-xs text-muted sm:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
