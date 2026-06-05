import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { JsonLd } from "@/components/shared/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description: `Rencontrez ${siteConfig.author}, la fondatrice de Periafter. Cadre supérieure de 47 ans, elle partage ce qu'elle a appris sur la périménopause.`,
};

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/a-propos" },
  ];

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    description: siteConfig.authorBio,
    url: `https://${siteConfig.domain}/a-propos`,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  return (
    <>
      <JsonLd data={personJsonLd} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-periafter-anthracite mt-6 mb-8">
          À propos de {siteConfig.author}
        </h1>

        {/* Photo placeholder */}
        <div className="float-right ml-8 mb-6 w-48 h-64 bg-periafter-anthracite/5 rounded-lg border border-periafter-anthracite/10 hidden sm:flex items-center justify-center">
          <p className="font-serif text-periafter-anthracite/30 text-sm">Photo Katia</p>
        </div>

        <div className="prose-periafter">
          <p>
            Je m&apos;appelle Katia. J&apos;ai 47 ans. J&apos;ai grandi dans la banlieue
            lyonnaise, première de ma famille à passer le bac, première à aller à
            l&apos;université. Sciences éco à Lyon 2, master en management à l&apos;EM Lyon.
          </p>

          <p>
            Aujourd&apos;hui, je suis directrice des opérations dans une scale-up tech de
            800 personnes. Je dirige une équipe de 60. Je suis mariée, j&apos;ai deux ados
            — Léa 16 ans, Sacha 13 ans. Je vis dans une grande métropole française.
          </p>

          <h2>Le déclic — 42 ans</h2>

          <p>
            Tout a glissé en quelques mois. D&apos;abord les nuits : réveils à 3h, 4h,
            5h, impossible de se rendormir. Puis les kilos, sans rien changer à mon
            assiette. Quatre kilos en huit mois, posés sur le ventre. Le brouillard
            mental : perdre le fil en réunion COMEX, oublier le prénom du client de la
            veille. La libido qui s&apos;éteint, lentement. Les cheveux qui tombent dans
            le siphon.
          </p>

          <p>
            Mon généraliste m&apos;a dit : « Madame, c&apos;est l&apos;âge. » Quatre mots.
            Vingt-cinq euros. J&apos;ai pleuré dans ma voiture — pas de tristesse, de
            rage. Cette phrase ne m&apos;expliquait rien. Elle me disait juste de me taire
            et d&apos;attendre.
          </p>

          <h2>Ce que j&apos;ai fait</h2>

          <p>
            Pendant 18 mois, j&apos;ai lu. L&apos;Inserm, la Mayo Clinic, la North
            American Menopause Society, des dizaines d&apos;études PubMed avec un
            dictionnaire médical à côté. Une gynécologue m&apos;a posé le mot :
            périménopause. Elle m&apos;a expliqué les fluctuations
            œstrogène/progestérone, le rôle du cortisol, l&apos;impact des œstrogènes sur
            le cortex préfrontal.
          </p>

          <p>
            J&apos;ai construit mon protocole en quatre piliers : musculation,
            alimentation, sommeil, focus. Pas un truc magique. Quatre piliers que j&apos;ai
            tenus pendant 18 mois. Aujourd&apos;hui, je dors 7 heures, je soulève des
            barres, je protège mes matinées comme un trésor. Je ne suis pas guérie — la
            périménopause n&apos;est pas une maladie qu&apos;on guérit. Mais je la traverse
            debout.
          </p>

          <h2>Pourquoi Periafter</h2>

          <p>
            Periafter est né de cette colère et de ce protocole. Pas une marque de
            coaching. Pas une marque de compléments. Un site qui dit ce que personne ne
            m&apos;a dit en 2021, à des femmes comme moi, qui n&apos;ont pas le luxe de
            subir six mois.
          </p>

          <div className="mt-8 p-6 bg-periafter-anthracite/3 rounded-lg border border-periafter-anthracite/10">
            <p className="font-sans text-sm text-meta-gray leading-relaxed">
              <strong>Note :</strong> Les noms, dates, lieux et détails ont été
              fictionnalisés pour préserver l&apos;anonymat des proches, des collègues et
              des médecins qui apparaissent dans ce témoignage. Ce que vous lisez vient
              d&apos;une vie réelle de femme cadre traversant une périménopause précoce,
              mais cette vie n&apos;est pas un protocole, ne se prescrit pas, et ne se
              calque pas sur la vôtre sans précaution. Je ne suis pas médecin.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
