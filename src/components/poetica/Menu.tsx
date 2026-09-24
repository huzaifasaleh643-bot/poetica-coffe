import { useState } from "react";
import beanBag from "@/assets/bean-bag.jpg";
import bulkBag from "@/assets/bulk-bag.jpg";
import { Plus, Check } from "lucide-react";
import { toast } from "sonner";
import { usePoetica } from "./store";

type Item = { name: string; price: string; desc?: string; signature?: boolean };

const tabs: Record<string, Item[]> = {
  Signature: [
    { name: "The Poética", price: "5.25", desc: "Handcrafted signature blend, hand-poured", signature: true },
    { name: "Honey Cardamom Latte", price: "5.50", desc: "Wildflower honey, green cardamom, oat milk" },
    { name: "Iced Poetica", price: "7.08", desc: "Cold-extracted, served over a single rock" },
    { name: "Blooming Matcha", price: "6.00", desc: "Organic ceremonial-grade, whisked to order" },
    { name: "London Fog", price: "4.20", desc: "Earl Grey, vanilla bean, steamed milk" },
  ],
  Coffee: [
    { name: "Espresso", price: "3.25" },
    { name: "Cortado", price: "4.46" },
    { name: "Cappuccino", price: "5.14" },
    { name: "Flat White", price: "4.98" },
    { name: "Cafe Latte", price: "5.51" },
    { name: "Drip Coffee", price: "3.41" },
  ],
  Bakery: [
    { name: "Chocolate Croissant", price: "4.46", desc: "Twice-baked, 72-hour ferment" },
    { name: "Breakfast Sandwich", price: "8.75", desc: "Farm egg, gruyère, brioche" },
    { name: "Artisanal Cookies", price: "3.95", desc: "Brown butter, sea salt" },
    { name: "Premium Yogurt Bowl", price: "6.24", desc: "Greek yogurt, seasonal fruit, granola" },
  ],
};

type TabKey = keyof typeof tabs;

const retail = [
  { name: "Poetica House Blend", weight: "12 oz Whole Bean", price: "18.36", img: beanBag },
  { name: "Bulk House Blend", weight: "5 lb Bag", price: "96.51", img: bulkBag },
];

export function Menu() {
  const [tab, setTab] = useState<TabKey>("Signature");
  const [justAdded, setJustAdded] = useState<string | null>(null);
  const { addToCart } = usePoetica();

  const handleAdd = (name: string, price: string) => {
    addToCart(name, price);
    setJustAdded(name);
    toast.success(`Added to cart`, { description: `${name} — $${price}` });
    setTimeout(() => setJustAdded((v) => (v === name ? null : v)), 1400);
  };

  return (
    <section id="menu" className="py-24 lg:py-32 bg-secondary/40 border-y border-border/60">
      <div data-reveal className="mx-auto max-w-7xl px-6 lg:px-10 reveal-sequence">
        <div className="max-w-3xl mb-14">
          <div className="editorial-eyebrow text-muted-foreground mb-4">03 — The Literary Menu</div>
          <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
            Every cup, a stanza. Every plate, a <em className="text-gold">verse</em>.
          </h2>
        </div>

        <div className="flex flex-wrap gap-1 mb-10 border-b border-border">
          {(Object.keys(tabs) as TabKey[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative px-6 py-4 text-xs uppercase tracking-widest font-medium transition-colors ${
                tab === t ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t === "Signature" ? "Signature Drinks" : t === "Coffee" ? "Standard Coffee" : "Bakery & Bites"}
              <span
                className={`absolute left-0 right-0 -bottom-px h-px bg-gold transition-transform duration-500 origin-left ${
                  tab === t ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          ))}
        </div>

        <div key={tab} className="grid md:grid-cols-2 gap-x-16 gap-y-8 animate-fade-up">
          {tabs[tab].map((item) => (
            <div key={item.name} className="flex items-baseline gap-4 group">
              <div className="flex-1">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-serif text-xl">
                    {item.name}
                    {item.signature && (
                      <span className="ml-2 align-middle text-[10px] tracking-widest uppercase text-gold border border-gold/60 px-1.5 py-0.5">
                        Signature
                      </span>
                    )}
                  </h3>
                  <span className="flex-1 border-b border-dashed border-border translate-y-[-4px] group-hover:border-foreground/60 transition-colors" />
                  <span className="font-serif text-lg tabular-nums">${item.price}</span>
                </div>
                {item.desc && (
                  <p className="mt-1.5 text-sm text-muted-foreground max-w-md">{item.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Retail */}
        <div className="mt-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="editorial-eyebrow text-muted-foreground mb-3">Take Us Home</div>
              <h3 className="font-serif text-3xl">Retail Beans Shop</h3>
            </div>
            <a href="#order" className="hidden sm:inline-block text-xs uppercase tracking-widest link-underline">
              Shop All Beans →
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {retail.map((p) => (
              <article key={p.name} className="group bg-background border border-border overflow-hidden">
                <div className="grid grid-cols-5">
                  <div className="col-span-2 aspect-square overflow-hidden bg-accent">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      width={800}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="col-span-3 p-7 flex flex-col justify-between">
                    <div>
                      <div className="editorial-eyebrow text-muted-foreground mb-3">Single Origin</div>
                      <h4 className="font-serif text-2xl leading-tight">{p.name}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{p.weight}</p>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="font-serif text-2xl tabular-nums">${p.price}</span>
                      <button
                        type="button"
                        onClick={() => handleAdd(p.name, p.price)}
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[11px] uppercase tracking-widest transition-colors ${
                          justAdded === p.name
                            ? "bg-gold text-gold-foreground"
                            : "bg-foreground text-background hover:bg-gold hover:text-gold-foreground"
                        }`}
                      >
                        {justAdded === p.name ? (
                          <><Check className="h-3.5 w-3.5" /> Added</>
                        ) : (
                          <><Plus className="h-3.5 w-3.5" /> Add to Cart</>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
