import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-periafter-anthracite/10 bg-periafter-anthracite text-periafter-creme/80 mt-20">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="font-serif text-xl font-semibold text-periafter-creme">
              {siteConfig.name}
            </span>
            <p className="mt-3 font-sans text-sm text-periafter-creme/60 leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans font-medium text-periafter-creme mb-3 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {siteConfig.nav.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-periafter-creme/60 hover:text-periafter-or transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-sans font-medium text-periafter-creme mb-3 text-sm uppercase tracking-wider">
              Légal
            </h4>
            <ul className="space-y-2">
              {siteConfig.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-periafter-creme/60 hover:text-periafter-or transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer médical */}
        <div className="mt-10 pt-8 border-t border-periafter-creme/10">
          <p className="font-sans text-xs text-periafter-creme/40 leading-relaxed">
            <strong className="text-periafter-creme/60">Avertissement médical :</strong>{" "}
            Les informations publiées sur Periafter sont un témoignage personnel, fictionnalisé
            pour préserver l&apos;anonymat des proches. Elles ne remplacent pas un avis
            médical. Pour toute décision concernant un traitement (notamment hormonal),
            consultez votre médecin traitant ou un gynécologue formé à la ménopause.
            Periafter ne vend aucun complément alimentaire, médicament, ou dispositif
            médical. Katia n&apos;est pas médecin.
          </p>
          <p className="mt-3 font-sans text-xs text-periafter-creme/40">
            © {new Date().getFullYear()} {siteConfig.name} — Édité par esq.group. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
