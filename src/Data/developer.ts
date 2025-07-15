export interface ConnectedAccount {
  platform: string;
  username: string;
  url: string;
  verified: boolean;
}

export interface DeveloperData {
  name: string;
  username: string;
  displayName?: string;
  discriminator: string;
  city?: string;
  avatarUrl: string;
  about: {
    description: string;
  };
  portfolio: {
    serverName: string;
    serverDescription: string;
    createdDate: string;
    memberSince: {
      date: string;
      subtitle: string;
    };
  };
  roles: string[];
  connectedAccounts: ConnectedAccount[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
    website: string;
    phone?: string;
  };
  status: {
    online: boolean;
    statusText: string;
  };
}

export const developerData: DeveloperData = {
  name: "Taha TAHIRI JOTEY",
  username: "Taha TAHIRI JOTEY",
  discriminator: "THETOTOJ",
  avatarUrl: "https://i.imgur.com/bHFaohy.jpeg",
  displayName: "Taha TAHIRI",
  city: "Courbevoie, France",
  about: {
    description: "Welcome to my portfolio! I'm a passionate developer creating amazing digital experiences. I specialize in full-stack development with expertise in React, TypeScript, Symfony, and modern web technologies.",
  },
  portfolio: {
    serverName: "My Portfolio",
    serverDescription: "Professional Discord Server",
    createdDate: "December 2024",
    memberSince: {
      date: "December 2024",
      subtitle: "Professional journey starts here"
    }
  },
  
  roles: ["Portfolio Owner", "Developer"],
  
  connectedAccounts: [
    {
      platform: "GitHub",
      username: "THETOTOJ",
      url: "https://github.com/THETOTOJ",
      verified: true
    },
    {
      platform: "LinkedIn",
      username: "Taha TAHIRI JOTEY",
      url: "https://www.linkedin.com/in/tahatj/",
      verified: true
    },
    {
      platform: "Website",
      username: "Personal Portfolio",
      url: "totoj.netlify.app",
      verified: true
    }
  ],
  
  contact: {
    phone: "+33 6 66 17 39 49",
    email: "tahirijoteytaha@gmail.com",
    github: "https://github.com/THETOTOJ",
    linkedin: "https://www.linkedin.com/in/tahatj/",
    website: "https://totoj.netlify.app/"
  },
  
  status: {
    online: true,
    statusText: "Building amazing things"
  }
};
