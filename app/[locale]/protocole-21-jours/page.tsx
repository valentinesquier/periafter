import { getProduct } from "@/lib/products";
import { HeroProduct } from "@/components/product/hero-product";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { JsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protocole 21 Jours — Périménopause Sans Hormones",
  description:
    "Mon programme en 4 piliers pour reprendre la main sur votre périménopause. 90 pages, 29 €. Musculation, alimentation, sommeil, performance mentale.",
};

export default function ProtocolePage() {
  const product = getProduct("protocole-21-jours");

  if (!product) {
    return (
      <div className="container mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="font-serif text-2xl text-periafter-anthracite">Produit non trouvé</h1>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Protocole 21 Jours", href: "/protocole-21-jours" },
  ];

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "esq.group",
      },
    },
  };

  return (
    <>
      <JsonLd data={productJsonLd} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <div className="container mx-auto max-w-6xl px-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <HeroProduct product={product} />

      {/* FAQ */}
      <section className="py-16 bg-periafter-anthracite/3">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-serif text-3xl font-semibold text-center text-periafter-anthracite mb-10">
            Questions fréquentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Est-ce que ce protocole remplace un traitement hormonal (THM) ?",
                a: "Non. Le THM est une décision médicale entre vous et votre gynécologue. Ce protocole raconte ce que j'ai fait sans hormones. Si vous envisagez un THM, parlez-en à votre médecin.",
              },
              {
                q: "Faut-il être sportive pour suivre le programme ?",
                a: "Non. Le programme commence avec des exercices au poids du corps et des haltères légères. Il est conçu pour une femme de 40+ ans qui n'a jamais fait de musculation, ou qui en a fait il y a longtemps.",
              },
              {
                q: "Combien de temps par jour ?",
                a: "Environ 30 à 45 minutes pour le sport (2x/semaine), 10 minutes pour le suivi alimentaire, et des ajustements simples sur le sommeil. Rien qui ne demande de bloquer des demi-journées.",
              },
              {
                q: "Et si ça ne marche pas pour moi ?",
                a: "Vous avez 14 jours pour demander un remboursement intégral, sans justificatif. J'ai testé ce protocole sur moi-même pendant 18 mois — mais chaque corps est différent. Si ça ne vous correspond pas, vous récupérez vos 29 €.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-periafter-creme border border-periafter-anthracite/10 rounded-lg"
              >
                <summary className="font-sans font-medium text-periafter-anthracite p-5 cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-periafter-vert text-lg group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 font-sans text-sm text-meta-gray leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
