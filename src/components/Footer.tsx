export default function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center sm:px-8">
        <a
          href="https://www.instagram.com/carlos_suprema/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-display text-2xl tracking-widest text-foreground transition-colors hover:text-gold-soft"
        >
          @carlos_suprema
        </a>

        <p className="text-sm text-muted">Santiago, Chile</p>

        <p className="max-w-md text-xs leading-relaxed text-muted/70">
          Web creada como propuesta visual basada en el Instagram oficial de
          Carlos Suprema.
        </p>

        <p className="text-xs text-muted/50">
          © {new Date().getFullYear()} Carlos Suprema
        </p>
      </div>
    </footer>
  );
}
