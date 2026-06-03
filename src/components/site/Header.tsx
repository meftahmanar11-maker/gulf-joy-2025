import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/i18n/LanguageProvider";

export function Header() {
  const { t } = useI18n();
  const nav = [
    { to: "/", label: t.nav.home },
    { to: "/services", label: t.nav.products },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <header className="sticky top-0 z-50 bg-brand/95 backdrop-blur supports-[backdrop-filter]:bg-brand/80 text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8 py-5 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-accent text-brand-deep font-display font-bold">
              GJ
            </span>
            <span className="font-display text-xl font-bold tracking-tight">
              Gulf Joy
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
              <Link to="/contact">{t.nav.quote}</Link>
            </Button>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-1 sm:gap-2 border-t border-white/10 pt-3">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-display text-sm uppercase tracking-wider font-semibold px-3 py-1.5 rounded-md text-primary-foreground/75 hover:text-secondary hover:bg-white/5 transition-colors"
              activeProps={{ className: "text-secondary bg-white/10" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
