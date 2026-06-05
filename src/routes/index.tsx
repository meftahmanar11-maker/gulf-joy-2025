import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Leaf, ShieldCheck, Snowflake } from "lucide-react";
import heroImg from "@/assets/hero-produce.jpg";
import { useI18n } from "@/i18n/LanguageProvider";
import banana1 from "@/assets/banana-1.jpeg.asset.json";
import banana2 from "@/assets/banana-2.jpeg.asset.json";
import onion1 from "@/assets/onion-1.jpeg.asset.json";
import onion2 from "@/assets/onion-2.jpeg.asset.json";
import apple1 from "@/assets/apple-1.jpeg.asset.json";
import apple2 from "@/assets/apple-2.mp4.asset.json";

type ProductMedia = { type: "image" | "video"; src: string; alt: string };

const productImages: Record<number, ProductMedia[]> = {
  0: [
    { type: "image", src: banana1.url, alt: "Premium green bananas in export packaging" },
    { type: "image", src: banana2.url, alt: "Fresh banana clusters ready for shipment" },
  ],
  1: [
    { type: "image", src: onion1.url, alt: "Fresh onions in red mesh export sack" },
    { type: "image", src: onion2.url, alt: "Harvested onions ready for sorting" },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gulf Joy — Premium Fresh Produce Importer" },
      { name: "description", content: "Gulf Joy imports premium-quality bananas, onions, cantaloupes, peppers, grapes and watermelons from trusted growers worldwide." },
      { property: "og:title", content: "Gulf Joy — Premium Fresh Produce Importer" },
      { property: "og:description", content: "Premium fresh fruits and vegetables, delivered straight from the world's best growers." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const productEmojis = ["🍌", "🧅", "🍈", "🫑", "🍇", "🍉"];
const whyIcons = [Leaf, Snowflake, ShieldCheck];

function HomePage() {
  const { t } = useI18n();
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,oklch(0.85_0.16_85_/_0.4),transparent_50%)]" />
        <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                {t.hero.badge}
              </span>
              <h1 className="text-5xl lg:text-6xl font-display font-bold leading-[1.05] text-balance">
                {t.hero.title1} <span className="text-secondary">{t.hero.titleAccent}</span> {t.hero.title2}
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-xl leading-relaxed">{t.hero.desc}</p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild variant="hero" size="lg">
                  <Link to="/services">{t.hero.ctaProducts}</Link>
                </Button>
                <Button asChild variant="outlineLight" size="lg">
                  <Link to="/contact">{t.hero.ctaContact}</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full rounded-2xl bg-secondary/30" />
              <img
                src={heroImg}
                alt={t.hero.imgAlt}
                width={1600}
                height={1200}
                className="relative rounded-2xl w-full aspect-[4/3] object-cover shadow-elegant"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10">
            {t.stats.map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl lg:text-4xl font-bold text-secondary">{s.v}</div>
                <div className="text-sm text-primary-foreground/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-sm uppercase tracking-wider text-brand font-semibold mb-3">{t.productsSection.eyebrow}</p>
            <h2 className="text-4xl font-display font-bold text-balance">{t.productsSection.title}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.products.map((p, i) => (
              <div key={p.title} className="group p-7 bg-card text-card-foreground rounded-2xl border border-border hover:border-brand/30 hover:shadow-elegant transition-all">
                <div className="h-14 w-14 rounded-xl bg-brand/10 flex items-center justify-center mb-5 text-3xl">
                  {productEmojis[i]}
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm uppercase tracking-wider text-brand font-semibold mb-3">{t.why.eyebrow}</p>
            <h2 className="text-4xl font-display font-bold text-balance mb-5">{t.why.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.why.desc}</p>
            <Button asChild className="mt-8" variant="default" size="lg">
              <Link to="/about">{t.why.cta}</Link>
            </Button>
          </div>
          <div className="space-y-6">
            {t.why.items.map((w, i) => {
              const Icon = whyIcons[i];
              return (
                <div key={w.title} className="flex gap-5">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-secondary/20 text-brand flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-1">{w.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="bg-gradient-hero text-primary-foreground rounded-3xl p-12 lg:p-16 text-center shadow-elegant">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 text-balance">{t.cta.title}</h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">{t.cta.desc}</p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">{t.cta.button}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
