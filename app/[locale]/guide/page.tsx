import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { JsonLd } from "@/components/shared/json-ld";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide complet de la périménopause",
  description:
    "Tout ce que j'aurais voulu savoir à 42 ans sur la périménopause. Symptômes, diagnostic, gestion sans hormones. Par Katia, 47 ans.",
};

export default function GuidePage() {
  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Guide périménopause", href: "/guide" },
  ];

  const medicalWebPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Guide complet de la périménopause — Periafter",
    description:
      "Guide sur la périménopause pour les femmes de 38-48 ans : symptômes, diagnostic, gestion sans hormones, sport, alimentation, sommeil.",
    author: {
      "@type": "Person",
      name: siteConfig.author,
      url: `https://${siteConfig.domain}/a-propos`,
    },
    publisher: {
      "@type": "Organization",
      name: "esq.group",
    },
    about: {
      "@type": "MedicalCondition",
      name: "Périménopause",
    },
    datePublished: "2026-06-01",
    specialty: "Périménopause",
  };

  return (
    <>
      <JsonLd data={medicalWebPageJsonLd} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl mt-6">
            <p className="font-sans text-sm uppercase tracking-widest text-periafter-vert mb-4">
              Guide complet
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-periafter-anthracite leading-tight mb-6">
              Périménopause : le guide complet pour les femmes 38-48 ans
            </h1>
            <p className="font-serif text-xl text-periafter-anthracite/70 mb-6 leading-relaxed">
              Symptômes, diagnostic, gestion sans hormones. Ce que la science dit, ce que
              j&apos;ai vécu, ce que j&apos;aurais aimé savoir à 42 ans.
            </p>
            <div className="flex items-center gap-3 font-sans text-sm text-meta-gray">
              <span>Par {siteConfig.author}</span>
              <span>·</span>
              <span>~12 min de lecture</span>
              <span>·</span>
              <span>Mis à jour juin 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <div className="container mx-auto max-w-3xl px-4 pb-20">
        <div className="prose-periafter">
          <h2>Qu&apos;est-ce que la périménopause ?</h2>
          <p>
            La périménopause est la période de transition qui précède la ménopause. Elle
            commence généralement entre 40 et 50 ans et dure en moyenne 4 à 8 ans. Pendant
            cette période, les ovaires commencent à produire moins d&apos;œstrogènes, de
            façon irrégulière. C&apos;est cette fluctuation hormonale, plus que la baisse
            elle-même, qui provoque la plupart des symptômes.
          </p>
          <p>
            La ménopause, elle, est officiellement déclarée après 12 mois consécutifs sans
            règles. L&apos;âge moyen en France est de 51 ans. Mais la périménopause peut
            commencer bien avant — parfois dès 38-40 ans. C&apos;est ce que j&apos;ai vécu.
          </p>
          <p>
            <strong>Sources :</strong> Inserm, dossier Ménopause ; Ameli, Périménopause et
            préménopause.
          </p>

          <h2>Les symptômes de la périménopause</h2>
          <p>
            La périménopause ne se résume pas aux bouffées de chaleur. Voici les signes
            que j&apos;ai observés sur moi, et que la littérature confirme :
          </p>
          <ul>
            <li>
              <strong>Cycles irréguliers</strong> : règles plus rapprochées ou plus
              espacées, flux plus abondant ou plus léger.
            </li>
            <li>
              <strong>Troubles du sommeil</strong> : réveils nocturnes (souvent entre 2h
              et 4h), difficulté d&apos;endormissement, sommeil non réparateur.
            </li>
            <li>
              <strong>Prise de poids</strong> : surtout au niveau du ventre, même sans
              changement alimentaire. Le métabolisme basal ralentit, la composition
              corporelle change.
            </li>
            <li>
              <strong>Brouillard mental</strong> : difficultés de concentration, trous de
              mémoire, lenteur cognitive. Ce n&apos;est pas « dans votre tête » — la chute
              des œstrogènes impacte le cortex préfrontal.
            </li>
            <li>
              <strong>Bouffées de chaleur et sueurs nocturnes</strong> : le symptôme le
              plus connu, mais pas le seul.
            </li>
            <li>
              <strong>Baisse de libido</strong> : sécheresse vaginale, baisse du désir,
              parfois douleurs.
            </li>
            <li>
              <strong>Chute de cheveux</strong> : les œstrogènes protègent le follicule
              pileux. Leur chute entraîne une perte diffuse.
            </li>
            <li>
              <strong>Changements d&apos;humeur</strong> : irritabilité, anxiété, parfois
              symptômes dépressifs.
            </li>
          </ul>
          <p>
            <strong>Sources :</strong> Davis et al. (Cell, 2023, PMID 37678251) ; Duralde
            et al. (BMJ, 2023, PMID 37553173).
          </p>

          <h2>Comment savoir si je suis en périménopause ?</h2>
          <p>
            Le diagnostic est avant tout clinique — basé sur les symptômes et l&apos;âge.
            Il n&apos;existe pas de test sanguin unique qui dise « vous êtes en
            périménopause ». Les dosages hormonaux (FSH, œstradiol) peuvent être utiles
            mais sont très variables d&apos;un cycle à l&apos;autre en périménopause.
          </p>
          <p>
            Si vous avez entre 38 et 50 ans et que vous observez une combinaison de
            plusieurs symptômes ci-dessus, parlez-en à votre gynécologue. Demandez
            explicitement : « Pensez-vous que je pourrais être en périménopause ? »
          </p>
          <p>
            <strong>Sources :</strong> HAS, bilan hormonal et THM ; Inserm, C&apos;est
            quoi la préménopause.
          </p>

          <h2>La périménopause sans hormones</h2>
          <p>
            Le traitement hormonal de la ménopause (THM) est une option valide pour
            beaucoup de femmes, et le rapport bénéfice-risque a été redéfini depuis 2020.
            Mais ce n&apos;est pas la seule option, et ce n&apos;est pas celle que
            j&apos;ai choisie.
          </p>
          <p>
            Voici les 4 leviers que j&apos;ai actionnés — et qui ont fait la différence
            pour moi :
          </p>
          <ul>
            <li>
              <strong>Musculation lourde</strong> 2×/semaine pour contrer la sarcopénie.
            </li>
            <li>
              <strong>Alimentation</strong> : 1,4 g de protéines/kg, pas de restriction,
              pas de jeûne.
            </li>
            <li>
              <strong>Sommeil</strong> : couvre-feu écrans, chambre froide, magnésium.
            </li>
            <li>
              <strong>Focus</strong> : deep work avant 11h, plus de réunion stratégique
              l&apos;après-midi.
            </li>
          </ul>
          <p>
            Ce n&apos;est pas un remplacement du THM. C&apos;est une option pour celles
            qui ne veulent ou ne peuvent pas prendre d&apos;hormones. Parlez-en à votre
            médecin.
          </p>

          <div className="mt-12 p-6 bg-periafter-anthracite/3 rounded-lg border border-periafter-anthracite/10">
            <p className="font-sans text-sm text-meta-gray leading-relaxed">
              <strong>Avertissement :</strong> Ce guide est un témoignage personnel,
              fictionnalisé pour préserver l&apos;anonymat des proches. Il ne remplace pas
              un avis médical. Pour toute décision concernant un traitement (notamment
              hormonal), consultez votre médecin traitant ou un gynécologue formé à la
              ménopause. Periafter ne vend aucun complément alimentaire, médicament, ou
              dispositif médical.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Protocole */}
      <section className="py-16 bg-periafter-vert/10">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-3xl font-semibold text-periafter-anthracite mb-4">
            Prête à passer à l&apos;action ?
          </h2>
          <p className="font-serif text-lg text-meta-gray mb-6">
            Mon Protocole 21 Jours structure ces 4 piliers en un programme jour par jour.
            29 €. 90 pages. Satisfait ou remboursé 14 jours.
          </p>
          <Link href="/protocole-21-jours">
            <Button size="lg" className="font-sans">
              Voir le Protocole 21 Jours <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
