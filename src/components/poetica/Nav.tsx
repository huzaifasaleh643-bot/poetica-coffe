import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { usePoetica } from "./store";


const links = [
  { href: "#home", label: "Home" },
  { href: "#locations", label: "Locations" },
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our Story" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { cart, openOrderModal } = usePoetica();


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#home" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl tracking-tight">Poetica</span>
          <span className="editorial-eyebrow text-muted-foreground group-hover:text-gold transition-colors">
            Coffee
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-foreground/80 hover:text-foreground link-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={`Cart, ${cart} items`}
            onClick={openOrderModal}
            className="relative inline-flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-widest text-foreground/80 hover:text-foreground transition-colors"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="tabular-nums">Cart ({cart})</span>
            {cart > 0 && (
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-gold animate-pulse" />
            )}
          </button>
          <button
            type="button"
            onClick={openOrderModal}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-xs tracking-widest uppercase font-medium hover:bg-gold hover:text-gold-foreground transition-colors duration-300"
          >
            Order Direct & Save
          </button>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-10 w-10 grid place-items-center border border-border rounded-full"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="space-y-1.5">
              <span className="block h-px w-4 bg-foreground" />
              <span className="block h-px w-4 bg-foreground" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-up">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
