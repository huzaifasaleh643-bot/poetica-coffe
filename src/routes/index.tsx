import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/poetica/Nav";
import { Hero } from "@/components/poetica/Hero";
import { Locations } from "@/components/poetica/Locations";
import { Menu } from "@/components/poetica/Menu";
import { Story } from "@/components/poetica/Story";
import { OrderBand } from "@/components/poetica/OrderBand";
import { Footer } from "@/components/poetica/Footer";
import { PoeticaProvider } from "@/components/poetica/store";
import { OrderModal } from "@/components/poetica/OrderModal";
import { ScrollReveal } from "@/components/poetica/ScrollReveal";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poetica Coffee — Radical Hospitality in New York" },
      {
        name: "description",
        content: "Discover Poetica Coffee locations, literary menus, direct ordering, and radical hospitality across Brooklyn and Manhattan.",
      },
      { property: "og:title", content: "Poetica Coffee — Radical Hospitality in New York" },
      {
        property: "og:description",
        content: "Independent specialty coffee, community, and direct ordering across Brooklyn and Manhattan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PoeticaProvider>
      <div className="min-h-screen bg-background text-foreground">
        <ScrollReveal />
        <Nav />
        <main>
          <Hero />
          <Locations />
          <Menu />
          <Story />
          <OrderBand />
        </main>
        <Footer />
        <OrderModal />
        <Toaster position="top-center" />
      </div>
    </PoeticaProvider>
  );
}
