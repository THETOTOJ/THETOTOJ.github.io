import { ConnectedAccount } from "./developer";

export interface WorkItem {
  company: string;
  designation: string;
  date: string;
  companyLogo: string;
  work: string;
  roles: string[];
  about?: string;
  connectedAccounts?: ConnectedAccount[];
}

export const WorkData: WorkItem[] = [
  {
    company: "Camarage",
    designation: "Stage <strong>Développeur Symfony Front</strong> de 2 mois",
    date: "juin 2020 - Aout 2020",
    companyLogo: "https://i.tracxn.com/logo/company/camarage.fr_Logo_9e8b3a04-5cf7-42b3-8854-3d7c09ac5852.jpg?height=120&width=120",
    work: "Création d'un dashboard administrateur afin de modérer les utilisateurs et éditer leurs profils",
    roles: ["Symfony", "PHP", "MySQL"],
    about: "Leading French company specializing in digital transformation and web development solutions.",
    connectedAccounts: [
      {
        platform: "LinkedIn",
        username: "Camarage",
        url: "https://linkedin.com/company/camarage",
        verified: true,
      }
    ]
  },
  {
    company: "Tic Tac Trading",
    designation: "Stage <strong>Développeur Web FullStack</strong> de 4 mois",
    date: "Avril 2022 - Aout 2022",
    companyLogo: "https://i.imgur.com/UYnRFJr.jpg",
    work: "Création d'un outil pour stocker les produits exportés et les paiement reçus afin de générer des factures.",
    roles: ["Symfony", "PHP", "MySQL"],
    about: "International trading company focused on efficient export-import management systems.",
    connectedAccounts: [
      {
        platform: "GitHub",
        username: "tictactrading",
        url: "https://github.com/tictactrading",
        verified: false,
      }
    ]
  },
  {
    company: "SESAMMm",
    designation: "Stage <strong>Développeur Web FullStack</strong> de 6 mois",
    date: "Janvier 2023 - Juillet 2023",
    companyLogo: "https://i.imgur.com/bUlKHeS.jpg",
    work: "Développement de nouvelles fonctionnalitées Front ainsi que la création d'une nouvelle WebApp interne.",
    roles: ["React", "Typescript", "TailwindCSS"],
    about: "Innovative tech company developing cutting-edge social media analytics and monitoring tools.",
    connectedAccounts: [
      {
        platform: "GitHub",
        username: "SESAMMm",
        url: "https://github.com/SESAMMm",
        verified: true,
      },
      {
        platform: "LinkedIn",
        username: "SESAMMm",
        url: "https://linkedin.com/company/sesammm",
        verified: true,
      }
    ]
  },
  {
    company: "HeyBilly",
    designation: "Alternance <strong>Développeur Web FullStack</strong>",
    date: "Novembre 2023 - Décembre 2024",
    companyLogo: "https://i.imgur.com/JwLXP9Y.png",
    work: "Développement de nouvelles fonctionnalitées Front ainsi que la création d'une nouvelle WebApp interne.",
    roles: ["React", "Typescript", "TailwindCSS"],
    about: "Modern fintech startup revolutionizing personal finance management through intuitive mobile applications.",
    connectedAccounts: [
      {
        platform: "GitHub",
        username: "heybilly",
        url: "https://github.com/heybilly",
        verified: true,
      }
    ]
  },
  {
    company: "Pennylane",
    designation: "Alternance <strong>Software Engineer</strong>",
    date: "Janvier 2025 - Présent",
    companyLogo: "https://media.licdn.com/dms/image/v2/D4E0BAQGQQjOU2i3HcA/company-logo_200_200/B4EZXTwNvaGYAg-/0/1743014387529/pennylaneaccounting_logo?e=2147483647&v=beta&t=3RNCiI1iJjjThfJnhr-4KeqplnRDTrcWO0SkhskaJm4",
    work: "Développement de nouvelles fonctionnalitées Front ainsi que la création d'une nouvelle WebApp interne.",
    roles: ["React", "Typescript", "TailwindCSS"],
    about: "Leading European accounting software company providing automated financial solutions for SMEs.",
    connectedAccounts: [
      {
        platform: "GitHub",
        username: "pennylane-hq",
        url: "https://github.com/pennylane-hq",
        verified: true,
      },
      {
        platform: "LinkedIn",
        username: "Pennylane",
        url: "https://linkedin.com/company/pennylane",
        verified: true,
      }
    ]
  },
];