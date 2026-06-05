export const siteConfig = {
  name: "Periafter",
  domain: "periafter.com",
  tagline: "Périménopause Performance 38-48 ans",
  description:
    "Traversez la périménopause debout. Témoignages, protocoles et ressources pour les femmes cadres et solopreneures de 38 à 48 ans, par Katia.",
  author: "Katia",
  authorBio: "Katia, 47 ans, cadre supérieure. Traverse la périménopause depuis 5 ans. Partage ce qu'elle a appris, sans hormones, sans phyto, sans bullshit.",
  locale: "fr",
  social: {
    tiktok: "https://tiktok.com/@periafter",
    pinterest: "https://pinterest.com/periafter",
  },
  // Stripe price IDs
  stripe: {
    flagshipPriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_FLAGSHIP,
  },
  // Lead magnet Brevo list ID
  brevo: {
    listId: process.env.BREVO_LIST_ID,
  },
  nav: [
    { label: "Accueil", href: "/" },
    { label: "Guide périménopause", href: "/guide" },
    { label: "Blog", href: "/blog" },
    { label: "Protocole 21 Jours", href: "/protocole-21-jours" },
    { label: "À propos", href: "/a-propos" },
  ],
  legal: [
    { label: "Mentions légales", href: "/legal/mentions-legales" },
    { label: "Confidentialité", href: "/legal/confidentialite" },
    { label: "CGV", href: "/legal/cgv" },
  ],
};
