import { Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n/LanguageProvider";
import logo from "@/assets/gulf-joy-logo.jpg.asset.json";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-brand-deep text-primary-foreground mt-24">
      <div className="container mx-auto px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Gulf Joy Import Export logo" className="h-12 w-12 rounded-md bg-white object-contain p-1" />
            <div className="font-display text-2xl font-bold text-secondary">Gulf Joy</div>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold mb-4 uppercase tracking-wider">{t.footer.company}</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-secondary">{t.footer.links.about}</Link></li>
            <li><Link to="/services" className="hover:text-secondary">{t.footer.links.products}</Link></li>
            <li><Link to="/contact" className="hover:text-secondary">{t.footer.links.contact}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold mb-4 uppercase tracking-wider">{t.footer.products}</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {t.products.map((p) => <li key={p.title}>{p.title}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold mb-4 uppercase tracking-wider">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70 whitespace-pre-line">
            <li>{t.contact.address}</li>
            <li dir="ltr">golfjoy01@gmail.com</li>
            <li dir="ltr">+216 70 287 161</li>
            <li className="pt-2">{t.contact.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8 py-6 text-xs text-primary-foreground/50 text-center">
          © {new Date().getFullYear()} Gulf Joy. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
