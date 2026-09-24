import { useState } from "react";
import { MapPin, Clock, ArrowUpRight, Truck } from "lucide-react";
import { usePoetica } from "./store";


type Loc = {
  name: string;
  street: string;
  borough: "Brooklyn" | "Manhattan" | "Mobile";
  note?: string;
  hours: string;
  open: boolean;
  truck?: boolean;
};

const locations: Loc[] = [
  { name: "Carroll Gardens", street: "Smith Street", borough: "Brooklyn", note: "The 2020 Original", hours: "Daily · 7:00 AM – 7:00 PM", open: true },
  { name: "East Village", street: "2nd Avenue", borough: "Manhattan", note: "Historic Gem Spa corner", hours: "Daily · 7:00 AM – 7:00 PM", open: true },
  { name: "Williamsburg", street: "Lorimer Street", borough: "Brooklyn", hours: "Daily · 7:00 AM – 7:00 PM", open: true },
  { name: "Windsor Terrace", street: "Prospect Avenue", borough: "Brooklyn", hours: "Daily · 7:00 AM – 7:00 PM", open: true },
  { name: "Prospect Park West", street: "PPW & 9th", borough: "Brooklyn", hours: "Daily · 7:00 AM – 7:00 PM", open: true },
  { name: "7th Avenue", street: "Park Slope", borough: "Brooklyn", hours: "Daily · 7:00 AM – 7:00 PM", open: true },
  { name: "Caton Avenue", street: "Kensington", borough: "Brooklyn", hours: "Daily · 7:00 AM – 7:00 PM", open: false },
  { name: "The Poetica Truck", street: "Prospect Park Entrance", borough: "Mobile", note: "Weather permitting", hours: "Sat–Sun · 8:00 AM – 5:00 PM", open: true, truck: true },
];

const filters = ["All", "Brooklyn", "Manhattan", "Mobile"] as const;

export function Locations() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = locations.filter((l) => filter === "All" || l.borough === filter);
  const { openOrderModal } = usePoetica();

  return (
    <section id="locations" className="py-24 lg:py-32 border-t border-border/60">
      <div data-reveal className="mx-auto max-w-7xl px-6 lg:px-10 reveal-sequence">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="editorial-eyebrow text-muted-foreground mb-4">
              02 — Find Us
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
              Seven neighborhoods. One <em className="text-gold">mobile truck</em>.
              Every corner, a sanctuary.
            </h2>
          </div>
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-xs uppercase tracking-widest rounded-full border transition-all ${
                  filter === f
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/60"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {shown.map((l) => (
            <article
              key={l.name}
              className="group bg-background p-7 flex flex-col justify-between min-h-[260px] hover:bg-accent/40 transition-colors duration-500"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="editorial-eyebrow text-muted-foreground flex items-center gap-2">
                    {l.truck ? <Truck className="h-3.5 w-3.5" /> : <MapPin className="h-3.5 w-3.5" />}
                    {l.borough}
                  </span>
                  <span className="flex items-center gap-2 text-[11px] uppercase tracking-widest">
                    <span className={`h-1.5 w-1.5 rounded-full ${l.open ? "bg-gold" : "bg-muted-foreground"}`} />
                    {l.open ? "Open" : "Closed"}
                  </span>
                </div>
                <h3 className="font-serif text-2xl leading-snug">{l.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{l.street}</p>
                {l.note && (
                  <p className="mt-3 font-serif italic text-sm text-gold">{l.note}</p>
                )}
              </div>

              <div className="mt-6 pt-5 border-t border-border/70">
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <Clock className="h-3 w-3" /> {l.hours}
                </p>
                <button
                  type="button"
                  onClick={openOrderModal}
                  className="mt-4 w-full flex items-center justify-between text-xs uppercase tracking-widest font-medium group-hover:text-gold transition-colors"
                >
                  Select This Branch
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
