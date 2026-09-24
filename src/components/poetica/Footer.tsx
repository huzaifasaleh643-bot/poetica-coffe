import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-background">
      <div data-reveal className="mx-auto max-w-7xl px-6 lg:px-10 py-20 reveal-sequence">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl">Poetica</span>
              <span className="editorial-eyebrow text-muted-foreground">Coffee</span>
            </div>
            <p className="mt-6 max-w-md font-serif italic text-xl leading-snug">
              "Skip the aggregators. Order directly from us to support
              independent coffee and radical hospitality."
            </p>
            <a
              href="https://www.instagram.com/poeticacoffee/"
              className="mt-8 inline-flex items-center gap-3 text-sm link-underline"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="h-4 w-4" /> @poeticacoffee
            </a>
          </div>

          <div className="lg:col-span-2">
            <div className="editorial-eyebrow text-muted-foreground mb-5">Visit</div>
            <ul className="space-y-3 text-sm">
              {["Carroll Gardens", "East Village", "Williamsburg", "Windsor Terrace", "Park Slope", "Caton Ave", "Truck"].map((l) => (
                <li key={l}><a href="#locations" className="link-underline">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="editorial-eyebrow text-muted-foreground mb-5">Hours</div>
            <p className="text-sm leading-relaxed">
              Daily<br />
              <span className="text-muted-foreground">7:00 AM – 7:00 PM</span>
            </p>
            <p className="text-sm leading-relaxed mt-4">
              Truck Weekends<br />
              <span className="text-muted-foreground">8:00 AM – 5:00 PM</span>
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="editorial-eyebrow text-muted-foreground mb-5">Stay in the Pour</div>
            <p className="text-sm text-muted-foreground mb-4">
              New blends, new shelves, new neighborhoods. Slow letters, never spam.
            </p>
            <form className="flex border border-border focus-within:border-foreground transition-colors">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-4 py-3 text-sm outline-none"
              />
              <button className="px-5 text-xs uppercase tracking-widest bg-foreground text-background hover:bg-gold hover:text-gold-foreground transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Poetica Coffee · Brooklyn & Manhattan</p>
          <p className="tracking-widest uppercase">Radical Hospitality · Coffee as Art</p>
        </div>
      </div>
    </footer>
  );
}
