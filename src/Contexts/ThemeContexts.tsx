import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'dark-gray' | 'dark-purple' | 'light-purple' | 'pink' | 'light-blue' | 'alina';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeConfig: ThemeConfig;
  isLoading: boolean;
}

interface ThemeConfig {
  sidebar: {
    background: string;
    headerBg: string;
    text: string;
    textSecondary: string;
    border: string;
    hover: string;
    active: string;
    activeText: string;
    userPanel: string;
  };
  modal: {
    background: string;
    headerBg: string;
    text: string;
    textSecondary: string;
    border: string;
  };
}

const themes: Record<Theme, ThemeConfig> = {
  // ... your existing themes (keep them exactly as they are)
  'dark-gray': {
    sidebar: {
      background: 'bg-gray-800',
      headerBg: 'bg-gray-750',
      text: 'text-gray-300',
      textSecondary: 'text-gray-400',
      border: 'border-gray-500',
      hover: 'hover:bg-gray-700',
      active: 'bg-gray-600',
      activeText: 'text-white',
      userPanel: 'bg-gray-750',
    },
    modal: {
      background: 'bg-gray-700',
      headerBg: 'bg-blue-600',
      text: 'text-gray-200',
      textSecondary: 'text-gray-400',
      border: 'border-gray-500',
    },
  },
  'dark-purple': {
    sidebar: {
      background: 'bg-slate-900',
      headerBg: 'bg-slate-800',
      text: 'text-slate-300',
      textSecondary: 'text-slate-400',
      border: 'border-slate-500',
      hover: 'hover:bg-slate-700',
      active: 'bg-indigo-600',
      activeText: 'text-white',
      userPanel: 'bg-slate-800',
    },
    modal: {
      background: 'bg-slate-800',
      headerBg: 'bg-gradient-to-r from-indigo-600 to-purple-600',
      text: 'text-slate-200',
      textSecondary: 'text-slate-400',
      border: 'border-slate-500',
    },
  },
  'light-purple': {
    sidebar: {
      background: 'bg-slate-50',
      headerBg: 'bg-white',
      text: 'text-slate-700',
      textSecondary: 'text-slate-500',
      border: 'border-slate-200',
      hover: 'hover:bg-slate-100',
      active: 'bg-purple-100 border-purple-200',
      activeText: 'text-purple-800',
      userPanel: 'bg-white',
    },
    modal: {
      background: 'bg-white',
      headerBg: 'bg-gradient-to-r from-purple-600 to-indigo-600',
      text: 'text-slate-700',
      textSecondary: 'text-slate-500',
      border: 'border-slate-200',
    },
  },
  'pink': {
    sidebar: {
      background: 'bg-pink-100',
      headerBg: 'bg-pink-200',
      text: 'text-blue-900',
      textSecondary: 'text-blue-800',
      border: 'border-blue-400',
      hover: 'hover:bg-pink-200',
      active: 'bg-blue-200 border-blue-500',
      activeText: 'text-blue-950',
      userPanel: 'bg-pink-200',
    },
    modal: {
      background: 'bg-pink-100',
      headerBg: 'bg-gradient-to-r from-pink-600 to-rose-600',
      text: 'text-blue-900',
      textSecondary: 'text-blue-800',
      border: 'border-blue-400',
    },
  },
  'light-blue': {
    sidebar: {
      background: 'bg-blue-100',
      headerBg: 'bg-blue-200',
      text: 'text-blue-900',
      textSecondary: 'text-blue-800',
      border: 'border-blue-400',
      hover: 'hover:bg-blue-200',
      active: 'bg-blue-300 border-blue-500',
      activeText: 'text-blue-950',
      userPanel: 'bg-blue-200',
    },
    modal: {
      background: 'bg-blue-100',
      headerBg: 'bg-gradient-to-r from-blue-600 to-sky-600',
      text: 'text-blue-900',
      textSecondary: 'text-blue-800',
      border: 'border-blue-400',
    },
  },
  'alina': {
    sidebar: {
      background: 'bg-pink-200',
      headerBg: 'bg-pink-300',
      text: 'text-gray-900',
      textSecondary: 'text-gray-700',
      border: 'border-pink-500',
      hover: 'hover:bg-pink-300',
      active: 'bg-pink-400 border-pink-600',
      activeText: 'text-gray-900',
      userPanel: 'bg-pink-300',
    },
    modal: {
      background: 'bg-pink-200',
      headerBg: 'bg-gradient-to-r from-pink-600 to-pink-700',
      text: 'text-gray-900',
      textSecondary: 'text-gray-700',
      border: 'border-pink-500',
    },
  },
};

const STORAGE_KEY = 'portfolio-theme';

// Helper functions for localStorage
const loadThemeFromStorage = (): Theme | null => {
  try {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem(STORAGE_KEY);
    
    if (saved && Object.keys(themes).includes(saved)) {
      return saved as Theme;
    }
    return null;
  } catch (error) {
    console.error('Error loading theme:', error);
    return null;
  }
};

const saveThemeToStorage = (theme: Theme): void => {
  try {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (error) {
    console.error('Error saving theme:', error);
  }
};

// Simple Subtle Loading Component
const SubtleLoadingScreen: React.FC<{ theme: Theme }> = ({ theme }) => {
  const getLoadingColors = () => {
    switch (theme) {
      case 'dark-gray':
        return { background: 'bg-gray-900', spinner: 'border-blue-500' };
      case 'dark-purple':
        return { background: 'bg-slate-900', spinner: 'border-purple-500' };
      case 'light-purple':
        return { background: 'bg-slate-50', spinner: 'border-purple-500' };
      case 'pink':
        return { background: 'bg-pink-50', spinner: 'border-pink-500' };
      case 'light-blue':
        return { background: 'bg-blue-50', spinner: 'border-blue-500' };
      case 'alina':
        return { background: 'bg-pink-100', spinner: 'border-pink-500' };
      default:
        return { background: 'bg-gray-900', spinner: 'border-blue-500' };
    }
  };

  const { background, spinner } = getLoadingColors();

  return (
    <div className={`fixed inset-0 ${background} flex items-center justify-center`}>
      <div className={`w-8 h-8 border-2 border-gray-300 ${spinner} border-t-transparent rounded-full animate-spin`}></div>
    </div>
  );
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<Theme>('dark-gray');

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = loadThemeFromStorage();
    if (savedTheme) {
      setTheme(savedTheme);
    }
    
    // Short loading time - just enough for theme to load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // 300ms - very quick

    return () => clearTimeout(timer);
  }, []);

  // Save theme whenever it changes (but not on initial load)
  useEffect(() => {
    if (!isLoading) {
      saveThemeToStorage(theme);
    }
  }, [theme, isLoading]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  const themeConfig = themes[theme];

  // Show subtle loading screen
  if (isLoading) {
    return <SubtleLoadingScreen theme={theme} />;
  }

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      setTheme: handleSetTheme, 
      themeConfig,
      isLoading 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};