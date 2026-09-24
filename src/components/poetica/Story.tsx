import interior from "@/assets/interior-books.jpg";
import community from "@/assets/community.jpg";
import { BookMarked, Globe2 } from "lucide-react";

export function Story() {
  return (
    <section id="story" className="py-24 lg:py-32">
      <div data-reveal className="mx-auto max-w-7xl px-6 lg:px-10 reveal-sequence">
        <div className="max-w-2xl mb-16">
          <div className="editorial-eyebrow text-muted-foreground mb-4">04 — Our Core Values</div>
          <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
            We are not a coffee shop. We are a <em className="text-gold">sanctuary</em>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <article className="group">
            <div className="aspect-[4/3] overflow-hidden mb-8 bg-accent">
              <img
                src={interior}
                alt="Banned books shelf inside Poetica Coffee"
                loading="lazy"
                width={1400}
                height={1000}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold/70" />
              <span className="editorial-eyebrow text-muted-foreground">The Banned Books Shelf</span>
            </div>
            <h3 className="font-serif text-4xl lg:text-[2.6rem] leading-[1.05] tracking-tight flex items-start gap-4">
              <BookMarked className="h-9 w-9 text-gold shrink-0 mt-1.5" strokeWidth={1.25} />
              <span><em className="not-italic">A free library</em> of <span className="italic text-gold">challenged</span> literature.</span>
            </h3>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-lg pl-[3.25rem]">
              Every Poetica hosts a curated shelf of books that have been banned
              or challenged. Take one. Read it slowly. Leave another behind. The
              right to read is non-negotiable.
            </p>
          </article>

          <article className="group lg:mt-24">
            <div className="aspect-[4/3] overflow-hidden mb-8 bg-accent">
              <img
                src={community}
                alt="Diverse baristas working together"
                loading="lazy"
                width={1400}
                height={1000}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold/70" />
              <span className="editorial-eyebrow text-muted-foreground">Refugee Solidarity</span>
            </div>
            <h3 className="font-serif text-4xl lg:text-[2.6rem] leading-[1.05] tracking-tight flex items-start gap-4">
              <Globe2 className="h-9 w-9 text-gold shrink-0 mt-1.5" strokeWidth={1.25} />
              <span><em className="not-italic">Hospitality</em> is radical. <span className="italic text-gold">Hiring</span> is political.</span>
            </h3>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-lg pl-[3.25rem]">
              Poetica is built by — and built for — immigrants and refugees
              rebuilding their lives in New York. Every cup you order directly
              helps a neighbor write their next chapter.
            </p>
          </article>
        </div>

        <div className="mt-24 border-t border-border pt-16 grid lg:grid-cols-3 gap-10 lg:gap-16 items-start">
          <h3 className="font-serif text-3xl leading-snug lg:col-span-1">
            "Coffee is the <em className="text-gold">excuse</em>. The community is the <em className="text-gold">point</em>."
          </h3>
          <p className="lg:col-span-2 text-muted-foreground leading-relaxed text-lg">
            Since opening our first counter on Smith Street in 2020, we have
            grown into eight neighborhoods across Brooklyn and Manhattan — but
            our philosophy has never changed. Pull every shot like it matters.
            Greet every guest like they belong. And keep the door open for
            anyone who needs a quiet hour and a warm cup.
          </p>
        </div>
      </div>
    </section>
  );
}
