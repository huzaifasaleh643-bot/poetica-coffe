import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { MapPin, ArrowUpRight, X, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { usePoetica } from "./store";

const branches = [
  { name: "Carroll Gardens", street: "Smith Street" },
  { name: "East Village", street: "2nd Avenue" },
  { name: "Williamsburg", street: "Lorimer Street" },
];

export function OrderModal() {
  const { modalOpen, setModalOpen, cart, cartItems } = usePoetica();

  const handlePick = (name: string) => {
    toast.success("Redirecting to secure direct checkout...", {
      description: `${name} — Direct order initiated.`,
    });
    setTimeout(() => setModalOpen(false), 400);
  };

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogContent
        className="sm:max-w-lg bg-background border-border p-0 overflow-hidden sm:rounded-none [&>button]:hidden"
      >
        <div className="relative p-8 sm:p-10">
          <button
            type="button"
            aria-label="Close"
            onClick={() => setModalOpen(false)}
            className="absolute top-4 right-4 h-9 w-9 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="text-left space-y-3">
            <div className="editorial-eyebrow text-gold">Order Direct & Save</div>
            <DialogTitle className="font-serif text-3xl font-medium leading-tight">
              Select Your Neighborhood Branch
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
              Skip third-party commission fees — order directly from our kitchen.
            </DialogDescription>
          </div>

          <div className="mt-7 border-y border-border py-5">
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                <ShoppingBag className="h-4 w-4 text-gold" /> Your Order
              </span>
              <span className="font-serif text-lg tabular-nums">
                {cart} {cart === 1 ? "item" : "items"}
              </span>
            </div>
            {cartItems.length > 0 ? (
              <div className="mt-4 space-y-3">
                {cartItems.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-4 text-sm">
                    <span>
                      <span className="font-medium">{item.name}</span>
                      <span className="ml-2 text-muted-foreground">× {item.quantity}</span>
                    </span>
                    <span className="font-serif tabular-nums">
                      ${(Number(item.price) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-sm italic text-muted-foreground">
                Your cart is empty — choose a branch to browse direct ordering.
              </p>
            )}
          </div>

          <div className="mt-6 space-y-2">
            {branches.map((b) => (
              <button
                key={b.name}
                type="button"
                onClick={() => handlePick(b.name)}
                className="group w-full flex items-center justify-between gap-4 border border-border px-5 py-4 text-left hover:border-foreground hover:bg-accent/40 transition-all"
              >
                <span className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gold" />
                  <span>
                    <span className="block font-serif text-lg leading-tight">{b.name}</span>
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground mt-0.5">
                      {b.street}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            ))}
          </div>

          <p className="mt-6 text-[11px] uppercase tracking-widest text-muted-foreground text-center">
            100% of your order stays in the neighborhood
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
