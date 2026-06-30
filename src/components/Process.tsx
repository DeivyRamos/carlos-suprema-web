import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Envíame tu idea",
    text: "Cuéntame qué quieres tatuarte por Instagram: referencias, estilo o concepto.",
  },
  {
    n: "02",
    title: "Revisamos referencia y zona del cuerpo",
    text: "Analizamos juntos la imagen, la ubicación y cómo se va a comportar en tu piel.",
  },
  {
    n: "03",
    title: "Definimos diseño, tamaño y fecha",
    text: "Cerramos el boceto final, el tamaño y agendamos tu sesión.",
  },
  {
    n: "04",
    title: "Sesión de tatuaje",
    text: "Trabajo con material de un solo uso y protocolo de higiene certificado.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="border-b border-hairline bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold uppercase">Cómo funciona</p>
          <h2 className="text-display mt-4 max-w-xl text-4xl leading-[0.95] text-foreground sm:text-5xl">
            De la idea a la <span className="gold-gradient-text">piel.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 100}>
              <div className="relative border-t border-hairline pt-6">
                <span className="text-display text-5xl text-gold/40 sm:text-6xl">{step.n}</span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
