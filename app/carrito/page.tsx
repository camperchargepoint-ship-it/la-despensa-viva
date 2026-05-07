

import Image from "next/image";
import Link from "next/link";

const cartItems = [
  {
    name: "Pack Clásico",
    category: "Packs",
    price: 42,
    quantity: 1,
    image: "/productos/packs/pack-clasico-1.png",
  },
  {
    name: "Mejillones en escabeche",
    category: "Conservas",
    price: 8.9,
    quantity: 2,
    image: "/productos/conservas/mejillones-1.png",
  },
  {
    name: "Moscatel mediterráneo",
    category: "Caprichos",
    price: 16.5,
    quantity: 1,
    image: "/productos/caprichos/moscatel-1.png",
  },
];

const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
const shipping = subtotal >= 60 ? 0 : 4.9;
const total = subtotal + shipping;

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(price);

export default function CartPage() {
  return (
    <main className="min-h-screen bg-[#f6f0e6] text-[#32271f]">
      <header className="border-b border-[#32271f]/10 bg-[#221913] px-6 py-8 text-[#fff7ec] lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link href="/" className="relative h-20 w-52 shrink-0 md:h-24 md:w-72" aria-label="Volver al inicio">
            <Image
              src="/logos/logo-beig.png"
              alt="La Despensa Viva"
              fill
              priority
              className="object-contain object-left"
            />
          </Link>

          <Link
            href="/"
            className="rounded-full border border-[#fff7ec]/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#fff7ec] transition hover:bg-[#fff7ec]/10"
          >
            Seguir comprando
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-14 max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#8a4b3a]">Carrito</p>
          <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-[#2e241d] md:text-7xl">
            Tu selección gourmet.
          </h1>
          <p className="mt-7 text-lg leading-8 text-[#6d5d50]">
            Este carrito es una simulación visual para mostrar cómo funcionaría la experiencia de compra de La Despensa Viva.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <section className="overflow-hidden rounded-[2rem] bg-[#fffaf2] shadow-xl shadow-[#3a2415]/5">
            <div className="border-b border-[#32271f]/10 px-6 py-5 md:px-8">
              <h2 className="font-serif text-3xl text-[#2e241d]">Productos añadidos</h2>
            </div>

            <div className="divide-y divide-[#32271f]/10">
              {cartItems.map((item) => (
                <article key={item.name} className="grid gap-5 px-6 py-6 md:grid-cols-[140px_1fr_auto] md:items-center md:px-8">
                  <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#eadfce]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8a4b3a]">{item.category}</p>
                    <h3 className="font-serif text-3xl leading-tight text-[#2e241d]">{item.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#6d5d50]">
                      Producto seleccionado para una despensa cuidada, con estética mediterránea y presentación premium.
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-6 md:flex-col md:items-end">
                    <div className="flex items-center rounded-full border border-[#32271f]/15 bg-[#f6f0e6] px-4 py-2 text-sm text-[#6d5d50]">
                      <span className="px-2">−</span>
                      <span className="min-w-6 text-center font-semibold text-[#32271f]">{item.quantity}</span>
                      <span className="px-2">+</span>
                    </div>
                    <p className="text-lg font-semibold text-[#2e241d]">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="h-fit rounded-[2rem] bg-[#221913] p-7 text-[#fff7ec] shadow-2xl shadow-[#3a2415]/15 md:p-9">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#d9a57f]">Resumen</p>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em]">Pedido preparado con mimo.</h2>

            <div className="mt-9 space-y-5 border-y border-[#fff7ec]/15 py-7 text-sm text-[#efe2d3]">
              <div className="flex justify-between gap-6">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>Envío</span>
                <span>{shipping === 0 ? "Gratis" : formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between gap-6 text-[#d9a57f]">
                <span>Entrega estimada</span>
                <span>48/72 h</span>
              </div>
            </div>

            <div className="mt-7 flex items-end justify-between gap-6">
              <span className="text-sm uppercase tracking-[0.25em] text-[#efe2d3]">Total</span>
              <span className="font-serif text-5xl tracking-[-0.04em] text-[#fffaf2]">{formatPrice(total)}</span>
            </div>

            <button className="mt-9 w-full rounded-full bg-[#9a563f] px-8 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#fffaf2] transition hover:bg-[#7d4332]">
              Finalizar compra
            </button>

            <p className="mt-5 text-center text-xs leading-5 text-[#efe2d3]/75">
              Checkout ficticio. No se procesará ningún pago.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}