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
  };
  status: {
    online: boolean;
    statusText: string;
  };
}

export const developerData: DeveloperData = {
  name: "Your Name",
  username: "Taha TAHIRI JOTEY",
  discriminator: "THETOTOJ",
  avatarUrl: "https://via.placeholder.com/150", 
  displayName: "Taha TAHIRI",
  
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
    email: "your.email@example.com",
    github: "your-github-username",
    linkedin: "your-linkedin-profile",
    website: "https://your-website.com"
  },
  
  status: {
    online: true,
    statusText: "Building amazing things"
  }
};