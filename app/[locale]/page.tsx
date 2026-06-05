import Link from "next/link";
import { getLatestArticles } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Dumbbell, Moon, Brain } from "lucide-react";

export default function HomePage() {
  const latestArticles = getLatestArticles(3);

  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <p className="font-sans text-sm uppercase tracking-widest text-periafter-terracotta mb-4">
              Périménopause Performance 38-48 ans
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-periafter-anthracite leading-tight mb-6">
              Reprenez la main sur<br />votre périménopause
            </h1>
            <p className="font-serif text-xl text-periafter-anthracite/70 mb-8 leading-relaxed max-w-2xl">
              Je m&apos;appelle Katia. J&apos;ai 47 ans. Il y a cinq ans, mon généraliste
              m&apos;a dit « c&apos;est l&apos;âge ». Aujourd&apos;hui, je dors 7 heures,
              je soulève des barres, et je dirige une équipe de 60 personnes. Voici ce que
              j&apos;ai appris — sans hormones, sans phyto, sans bullshit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/guide">
                <Button size="lg" className="font-sans">
                  Lire le guide complet
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" size="lg" className="font-sans">
                  Explorer le blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Piliers */}
      <section className="py-16 bg-periafter-anthracite/3">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-serif text-3xl font-semibold text-center text-periafter-anthracite mb-12">
            Les 4 piliers de mon protocole
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Dumbbell,
                title: "Musculation",
                desc: "Deux séances par semaine, vraies barres. Pas de cardio long qui fond la masse musculaire.",
              },
              {
                icon: BookOpen,
                title: "Alimentation",
                desc: "1,4 g de protéines par kilo. Pas de jeûne, pas de restriction. Juste du carburant.",
              },
              {
                icon: Moon,
                title: "Sommeil",
                desc: "Couvre-feu écrans 22h, chambre 18°C, magnésium. 7h de sommeil sans réveil nocturne.",
              },
              {
                icon: Brain,
                title: "Focus",
                desc: "Deep work avant 11h. Plus jamais de réunion stratégique à 16h. Le cerveau a ses heures.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-periafter-creme p-6 rounded-lg border border-periafter-anthracite/10"
              >
                <p.icon size={28} className="text-periafter-vert mb-4" />
                <h3 className="font-sans font-semibold text-periafter-anthracite mb-2">
                  {p.title}
                </h3>
                <p className="font-sans text-sm text-meta-gray leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="bg-periafter-vert/10 border border-periafter-vert/20 rounded-xl p-8 lg:p-12 text-center">
            <p className="font-sans text-sm uppercase tracking-widest text-periafter-vert mb-3">
              Téléchargement gratuit
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-periafter-anthracite mb-4">
              Périménopause à 40 ans : les 12 signes qu&apos;on ne vous dit pas
            </h2>
            <p className="font-serif text-lg text-periafter-anthracite/70 mb-6 max-w-2xl mx-auto">
              Un PDF de 25 pages qui liste les signaux précoces que j&apos;aurais aimé
              connaître à 42 ans. Pas de jargon médical. Juste ce que j&apos;ai vu, dans
              l&apos;ordre.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="flex-1 h-12 px-4 rounded-md border border-periafter-anthracite/20 bg-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-periafter-vert"
                  required
                />
                <Button size="lg" className="font-sans shrink-0">
                  Recevoir le PDF gratuit
                </Button>
              </form>
              <p className="mt-3 font-sans text-xs text-meta-gray">
                Pas de spam. Désabonnement en un clic. Conforme RGPD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest posts */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-3xl font-semibold text-periafter-anthracite">
              Derniers articles
            </h2>
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="font-sans">
                Voir tout le blog <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          {latestArticles.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-periafter-creme border border-periafter-anthracite/10 rounded-lg p-6 hover:border-periafter-vert/30 transition-colors"
                >
                  <p className="font-sans text-xs uppercase tracking-wider text-periafter-terracotta mb-2">
                    {article.category}
                  </p>
                  <h3 className="font-serif text-lg font-semibold text-periafter-anthracite mb-2 group-hover:text-periafter-vert transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-sans text-sm text-meta-gray leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                  <p className="mt-3 font-sans text-xs text-meta-gray">
                    {new Date(article.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}{" "}
                    · {article.readingTime} min
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-periafter-anthracite/10 rounded-lg bg-periafter-anthracite/3">
              <p className="font-serif text-lg text-meta-gray mb-2">
                Les premiers articles arrivent bientôt
              </p>
              <p className="font-sans text-sm text-meta-gray">
                Le contenu SEO est en cours de rédaction. Restez connecté.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
