import { usePoetica } from "./store";

export function OrderBand() {
  const { openOrderModal } = usePoetica();

  return (
    <section id="order" className="bg-foreground text-background py-20 lg:py-28">
      <div data-reveal className="mx-auto max-w-5xl px-6 lg:px-10 text-center reveal-sequence">
        <div className="editorial-eyebrow text-gold mb-6">Order Direct & Save</div>
        <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05]">
          Skip the aggregators.
          <br />
          <em className="text-gold">Support the source.</em>
        </h2>
        <p className="mt-8 max-w-xl mx-auto text-background/70 leading-relaxed">
          Every direct order keeps 100% of your money inside the neighborhood —
          paying baristas, restocking the banned books shelf, and keeping the
          truck rolling at Prospect Park.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={openOrderModal}
            className="inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:scale-[1.02] transition-transform"
          >
            Order from Your Branch
          </button>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-4 py-4 text-xs uppercase tracking-widest text-background/80 hover:text-background link-underline"
          >
            View the Full Menu →
          </a>
        </div>
      </div>
    </section>
  );
}
