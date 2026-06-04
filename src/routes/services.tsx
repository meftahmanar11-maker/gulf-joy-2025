import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/LanguageProvider";
import banana1 from "@/assets/banana-1.jpeg.asset.json";
import banana2 from "@/assets/banana-2.jpeg.asset.json";
import onion1 from "@/assets/onion-1.jpeg.asset.json";
import onion2 from "@/assets/onion-2.jpeg.asset.json";

const productImages: Record<number, { src: string; alt: string }[]> = {
  0: [
    { src: banana1.url, alt: "Premium green bananas in export packaging" },
    { src: banana2.url, alt: "Fresh banana clusters ready for shipment" },
  ],
  1: [
    { src: onion1.url, alt: "Fresh onions in red mesh export sack" },
    { src: onion2.url, alt: "Harvested onions ready for sorting" },
  ],
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Products — Gulf Joy" },
      { name: "description", content: "Premium imported bananas, onions, cantaloupes, peppers, grapes and watermelons from Gulf Joy." },
      { property: "og:title", content: "Products — Gulf Joy" },
      { property: "og:description", content: "Explore the fresh produce we import." },
    ],
  }),
  component: ProductsPage,
});

const emojis = ["🍌", "🧅", "🍈", "🫑", "🍇", "🍉"];

function ProductsPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-secondary font-semibold mb-3">{t.productsPage.eyebrow}</p>
          <h1 className="text-5xl font-display font-bold text-balance mb-5">{t.productsPage.title}</h1>
          <p className="text-lg text-primary-foreground/80">{t.productsPage.lede}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.productsPage.list.map((p, i) => (
              <article key={p.title} className="p-8 bg-card text-card-foreground rounded-2xl border border-border hover:shadow-elegant transition-shadow">
                {productImages[i] ? (
                  <div className={`mb-5 grid gap-2 ${productImages[i].length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                    {productImages[i].map((img) => (
                      <img
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full h-40 object-cover rounded-xl"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="h-16 w-16 rounded-xl bg-brand/10 flex items-center justify-center mb-5 text-4xl">
                    {emojis[i]}
                  </div>
                )}
                <h2 className="text-2xl font-display font-bold mb-3">{p.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2 text-sm">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> {pt}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="default" size="lg">
              <Link to="/contact">{t.productsPage.cta}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
