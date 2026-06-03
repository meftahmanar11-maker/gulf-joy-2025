import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Gulf Joy" },
      { name: "description", content: "Gulf Joy is a trusted importer of premium fresh fruits and vegetables." },
      { property: "og:title", content: "About — Gulf Joy" },
      { property: "og:description", content: "Our story, mission and values." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-secondary font-semibold mb-3">{t.about.eyebrow}</p>
          <h1 className="text-5xl font-display font-bold text-balance mb-5">{t.about.title}</h1>
          <p className="text-lg text-primary-foreground/80">{t.about.lede}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-display font-bold mb-5">{t.about.storyTitle}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {t.about.story.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold mb-6">{t.about.valuesTitle}</h3>
            <div className="space-y-6">
              {t.about.values.map((v) => (
                <div key={v.title}>
                  <h4 className="font-semibold mb-1">{v.title}</h4>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-3xl font-display font-bold mb-4">{t.about.ctaTitle}</h2>
          <p className="text-muted-foreground mb-8">{t.about.ctaDesc}</p>
          <Button asChild variant="default" size="lg">
            <Link to="/contact">{t.about.ctaButton}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
