import { ConnectedAccount } from "./developer";

export interface SchoolItem {
  title: string;
  name: string;
  date: string;
  companyLogo: string;
  roles: string[];
  about?: string;
  connectedAccounts?: ConnectedAccount[];
}

export const SchoolData: SchoolItem[] = [
  {
    title: "Baccalauréat Scientifique",
    name: "Lycée Français International D'Agadir",
    date: "Juin 2019",
    companyLogo: "https://imgur.com/dWs7MUB.png",
    roles: ["Lycée"],
    about: "French international high school in Agadir, providing high-quality French education with an international perspective.",
    connectedAccounts: [
      {
        platform: "LinkedIn",
        username: "Lycée Français International D'Agadir",
        url: "https://linkedin.com/school/lycee-francais-agadir",
        verified: true,
      }
    ]
  },
  {
    title: "Bachelor en développement Web Et Mobile",
    name: "Epitech Digital School",
    date: "Juin 2023",
    companyLogo: "https://imgur.com/xxx5WAp.png",
    roles: ["Bachelor"],
    about: "Leading digital school specializing in web and mobile development, part of the prestigious Epitech network.",
    connectedAccounts: [
      {
        platform: "GitHub",
        username: "Epitech",
        url: "https://github.com/Epitech",
        verified: true,
      },
      {
        platform: "LinkedIn",
        username: "Epitech Digital",
        url: "https://linkedin.com/school/epitech-digital",
        verified: true,
      }
    ]
  },
  {
    title: "Master en Ingénierie Web et Innovations Digitales",
    name: "IIM Digital School",
    date: "Août 2025",
    roles: ["Master", "Pôle DeVinci"],
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOMkSCt2syX_zEPBmGTlmik94d8bR1xsfMwtblrzhzP9UhZlY4ZdpxJ_FM4f3YlqazWw&usqp=CAU",
    about: "Premier institute for digital innovation and web engineering, part of the Pôle Léonard de Vinci group.",
    connectedAccounts: [
      {
        platform: "GitHub",
        username: "IIM-Digital",
        url: "https://github.com/iim-digital",
        verified: true,
      },
      {
        platform: "LinkedIn",
        username: "IIM Digital School",
        url: "https://linkedin.com/school/iim-digital-school",
        verified: true,
      }
    ]
  },
];