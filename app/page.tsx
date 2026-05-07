import Image from "next/image";

const categories = [
  { name: "Conservas", href: "/productos/conservas", image: "/productos/conservas/seccion-conservas.png" },
  { name: "Bebidas", href: "/productos/bebidas", image: "/productos/bebidas/seccion-bebidas.png" },
  { name: "Gourmet", href: "/productos/gourmet", image: "/productos/gourmet/seccion-gourmet.png" },
  { name: "Caprichos", href: "/productos/caprichos", image: "/productos/caprichos/seccion-caprichos.png" },
  { name: "Packs", href: "/productos/packs", image: "/productos/packs/seccion-packs.png" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f0e6] text-[#32271f]">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-[#fff7ec]/10 bg-[#221913]/65 text-[#fff7ec] backdrop-blur-md">
        <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-8 lg:px-14">
          <a href="#inicio" className="relative h-20 w-52 shrink-0 md:h-28 md:w-80" aria-label="La Despensa Viva">
            <Image
              src="/logos/logo-beig.png"
              alt="La Despensa Viva"
              fill
              priority
              className="object-contain object-left"
            />
          </a>

          <div className="hidden items-center gap-10 md:flex">
            <nav className="flex items-center gap-10 text-sm uppercase tracking-[0.2em] text-[#fff7ec]/85">
              <a className="transition hover:text-[#d9a57f]" href="#inicio">Inicio</a>
              <div className="group relative py-8">
                <a className="transition hover:text-[#d9a57f]" href="#productos">Productos</a>
                <div className="pointer-events-none absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 rounded-3xl border border-[#fff7ec]/15 bg-[#221913]/95 p-4 text-[#fff7ec] opacity-0 shadow-2xl shadow-black/30 backdrop-blur-md transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                  <a className="block rounded-2xl px-4 py-3 transition hover:bg-[#fff7ec]/10 hover:text-[#d9a57f]" href="/productos/conservas">Conservas</a>
                  <a className="block rounded-2xl px-4 py-3 transition hover:bg-[#fff7ec]/10 hover:text-[#d9a57f]" href="/productos/bebidas">Bebidas</a>
                  <a className="block rounded-2xl px-4 py-3 transition hover:bg-[#fff7ec]/10 hover:text-[#d9a57f]" href="/productos/gourmet">Gourmet</a>
                  <a className="block rounded-2xl px-4 py-3 transition hover:bg-[#fff7ec]/10 hover:text-[#d9a57f]" href="/productos/caprichos">Caprichos</a>
                  <a className="block rounded-2xl px-4 py-3 transition hover:bg-[#fff7ec]/10 hover:text-[#d9a57f]" href="/productos/packs">Packs</a>
                </div>
              </div>
              <a className="transition hover:text-[#d9a57f]" href="#sobre-nosotros">Sobre nosotros</a>
              <a className="transition hover:text-[#d9a57f]" href="#lifestyle">Lifestyle</a>
              <a className="transition hover:text-[#d9a57f]" href="#contacto">Contacto</a>
            </nav>
            <a
              href="/carrito"
              aria-label="Carrito"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#fff7ec]/35 text-[#fff7ec] transition hover:bg-[#9a563f]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
                <path d="M4 5h2.2l1.5 9.2a2 2 0 0 0 2 1.7h6.8a2 2 0 0 0 1.9-1.4l1.3-5.3H7.1" />
                <path d="M9.2 20.2h.01" />
                <path d="M17.2 20.2h.01" />
                <path d="M9 12.2h8" />
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <a
              href="/carrito"
              aria-label="Carrito"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#fff7ec]/35 text-[#fff7ec] transition hover:bg-[#9a563f]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                <path d="M4 5h2.2l1.5 9.2a2 2 0 0 0 2 1.7h6.8a2 2 0 0 0 1.9-1.4l1.3-5.3H7.1" />
                <path d="M9.2 20.2h.01" />
                <path d="M17.2 20.2h.01" />
                <path d="M9 12.2h8" />
              </svg>
            </a>
            <details className="group relative">
              <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#fff7ec]/35 text-[#fff7ec] transition hover:bg-[#9a563f] [&::-webkit-details-marker]:hidden">
                <span className="sr-only">Abrir menú</span>
                <span className="flex flex-col gap-1.5">
                  <span className="block h-px w-5 bg-current" />
                  <span className="block h-px w-5 bg-current" />
                  <span className="block h-px w-5 bg-current" />
                </span>
              </summary>
              <nav className="absolute right-0 top-14 w-64 rounded-3xl border border-[#fff7ec]/15 bg-[#221913]/95 p-5 text-sm uppercase tracking-[0.18em] text-[#fff7ec] shadow-2xl shadow-black/30 backdrop-blur-md">
                <a className="block rounded-2xl px-4 py-3 transition hover:bg-[#fff7ec]/10" href="#inicio">Inicio</a>
                <a className="block rounded-2xl px-4 py-3 transition hover:bg-[#fff7ec]/10" href="#productos">Productos</a>
                <div className="ml-4 border-l border-[#fff7ec]/15 pl-3 text-xs tracking-[0.14em] text-[#fff7ec]/80">
                  <a className="block rounded-2xl px-4 py-2 transition hover:bg-[#fff7ec]/10" href="/productos/conservas">Conservas</a>
                  <a className="block rounded-2xl px-4 py-2 transition hover:bg-[#fff7ec]/10" href="/productos/bebidas">Bebidas</a>
                  <a className="block rounded-2xl px-4 py-2 transition hover:bg-[#fff7ec]/10" href="/productos/gourmet">Gourmet</a>
                  <a className="block rounded-2xl px-4 py-2 transition hover:bg-[#fff7ec]/10" href="/productos/caprichos">Caprichos</a>
                  <a className="block rounded-2xl px-4 py-2 transition hover:bg-[#fff7ec]/10" href="/productos/packs">Packs</a>
                </div>
                <a className="block rounded-2xl px-4 py-3 transition hover:bg-[#fff7ec]/10" href="#sobre-nosotros">Sobre nosotros</a>
                <a className="block rounded-2xl px-4 py-3 transition hover:bg-[#fff7ec]/10" href="#lifestyle">Lifestyle</a>
                <a className="block rounded-2xl px-4 py-3 transition hover:bg-[#fff7ec]/10" href="#contacto">Contacto</a>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <section id="inicio" className="relative min-h-screen overflow-hidden bg-[#221913] text-[#fff7ec]">
        <div className="absolute inset-0">
          <Image
            src="/hero/imagen-hero.png"
            alt="Caja gourmet mediterránea de La Despensa Viva"
            fill
            priority
            className="object-cover object-[76%_center] md:object-[90%_center]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(34,25,19,0.9)_0%,rgba(34,25,19,0.76)_30%,rgba(34,25,19,0.34)_55%,rgba(34,25,19,0.04)_78%,rgba(34,25,19,0)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#221913]/82 via-[#221913]/26 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-40 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.42em] text-[#d9a57f]">
              Despensa mediterránea
            </p>
            <h1 className="max-w-4xl font-serif text-6xl leading-[0.92] tracking-[-0.05em] text-[#fffaf2] md:text-8xl">
              Sabores que se
              <br />
              eligen con calma.
            </h1>
            <p className="mt-10 max-w-xl text-xl leading-9 text-[#efe2d3]">
              Una selección cuidada de conservas, vinos, productos gourmet y caprichos dulces para regalar, compartir y disfrutar.
            </p>
            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              <a
                href="#productos"
                className="rounded-full bg-[#9a563f] px-9 py-5 text-center text-sm font-semibold uppercase tracking-[0.24em] text-[#fffaf2] transition hover:bg-[#7d4332]"
              >
                Ver productos
              </a>
              <a
                href="#sobre-nosotros"
                className="rounded-full border border-[#f1d8c3]/30 bg-[#ffffff]/5 px-9 py-5 text-center text-sm font-semibold uppercase tracking-[0.24em] text-[#fffaf2] backdrop-blur-sm transition hover:border-[#f1d8c3]/55 hover:bg-[#ffffff]/10"
              >
                Nuestra selección
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="productos" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#8a4b3a]">Productos</p>
            <h2 className="max-w-2xl font-serif text-4xl leading-tight tracking-[-0.03em] md:text-6xl">
              Una despensa pensada para cada momento.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#6d5d50]">
            Conservas, bebidas, gourmet, caprichos y packs seleccionados con una estética limpia y un criterio mediterráneo.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {categories.map((category) => (
            <a key={category.name} href={category.href} className="group relative min-h-[280px] md:min-h-[300px] xl:min-h-[260px] overflow-hidden rounded-[1.5rem] bg-[#eadfce] shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#3a2415]/10">
              <Image src={category.image} alt={category.name} fill className="object-cover object-center transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2e241d]/75 via-[#2e241d]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-[#fffaf2]">
                <h3 className="font-serif text-3xl">{category.name}</h3>
                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[#f0d8c3]">Ver selección</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="sobre-nosotros" className="relative overflow-hidden bg-[#221913] text-[#fff7ec]">
        <div className="absolute inset-0">
          <Image
            src="/sobre-nosotros/imagen-aboutme-2.jpeg"
            alt="Fachada de La Despensa Viva"
            fill
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(34,25,19,0.92)_0%,rgba(34,25,19,0.78)_34%,rgba(34,25,19,0.42)_58%,rgba(34,25,19,0.12)_78%,rgba(34,25,19,0)_100%)]" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#221913]/84 via-[#221913]/34 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[780px] max-w-7xl items-center px-6 py-28 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.42em] text-[#d9a57f]">
              Sobre nosotros
            </p>

            <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-[#fffaf2] md:text-7xl">
              Delicatessen mediterráneas elegidas con intención.
            </h2>

            <p className="mt-10 max-w-2xl text-xl leading-9 text-[#efe2d3]">
              La Despensa Viva nace como una tienda gourmet ficticia creada para mostrar cómo una marca puede unir identidad, producto, dirección visual y experiencia digital.
            </p>
          </div>
        </div>
      </section>

      <section id="lifestyle" className="bg-[#f6f0e6] px-6 py-28 text-[#32271f] lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#8a4b3a]">Lifestyle</p>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] md:text-6xl">
              No solo producto. También momento.
            </h2>
            <p className="mt-7 text-lg leading-8 text-[#6d5d50]">
              Mesas compartidas, detalles cuidados, packaging bonito y pequeños rituales que elevan lo cotidiano.
            </p>
          </div>

          <div className="relative min-h-[640px] overflow-hidden rounded-[2.5rem] bg-[#eadfce] shadow-2xl shadow-[#3a2415]/10">
            <div className="lifestyle-slide lifestyle-slide-1 absolute inset-0">
              <Image
                src="/lifestyle/imagen-consumo.png"
                alt="Mesa mediterránea con productos gourmet"
                fill
                className="object-cover"
              />
            </div>

            <div className="lifestyle-slide lifestyle-slide-2 absolute inset-0">
              <Image
                src="/lifestyle/imagen-packaging.png"
                alt="Packaging cuidado de La Despensa Viva"
                fill
                className="object-cover"
              />
            </div>

            <div className="lifestyle-slide lifestyle-slide-3 absolute inset-0">
              <Image
                src="/lifestyle/imagen-detalle.png"
                alt="Detalle premium de producto gourmet"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#2e241d]/35 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section id="contacto" className="relative overflow-hidden bg-[#221913] text-[#fff7ec]">
        <div className="absolute inset-0">
          <Image
            src="/sobre-nosotros/imagen-aboutme-1.png"
            alt="Preparando una caja gourmet de La Despensa Viva"
            fill
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[#221913]/58" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,25,19,0.22)_0%,rgba(34,25,19,0.62)_62%,rgba(34,25,19,0.84)_100%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[720px] max-w-5xl flex-col items-center justify-center px-6 py-28 text-center lg:px-10">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.42em] text-[#d9a57f]">
            Contacto
          </p>

          <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-[#fffaf2] md:text-7xl">
            ¿Preparamos tu próxima despensa?
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-[#efe2d3]">
            Escríbenos para packs, regalos especiales o selecciones a medida.
          </p>

          <a
            href="mailto:hola@ladespensaviva.com"
            className="mt-12 inline-flex rounded-full bg-[#9a563f] px-10 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#fffaf2] transition hover:bg-[#7d4332]"
          >
            Escribir ahora
          </a>
        </div>
      </section>

      <footer className="border-t border-[#32271f]/10 px-6 py-10 text-sm text-[#6d5d50] lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <p>© La Despensa Viva</p>
          <div className="flex flex-wrap gap-5">
            <a href="/aviso-legal" className="hover:text-[#8a4b3a]">Aviso legal</a>
            <a href="/politica-privacidad" className="hover:text-[#8a4b3a]">Política de privacidad</a>
            <a href="/cookies" className="hover:text-[#8a4b3a]">Cookies</a>
            <a href="/terminos-condiciones" className="hover:text-[#8a4b3a]">Términos y condiciones</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
