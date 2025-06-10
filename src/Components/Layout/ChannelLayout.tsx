import React, { useEffect, useRef, useState } from "react";
import { FaHashtag } from "react-icons/fa6";
import { useTheme } from "../../Contexts/ThemeContexts";

interface ChannelLayoutProps {
  channelName: string;
  children: React.ReactNode;
}

const ChannelLayout: React.FC<ChannelLayoutProps> = ({ channelName, children }) => {
  const messageEndRef = useRef<HTMLDivElement>(null);
  const { theme, themeConfig } = useTheme();

  // Scroll to the bottom of the chat on load
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const [isTransitioning, setIsTransitioning] = useState(false);

  // Trigger transition when channelName changes
  useEffect(() => {
    setIsTransitioning(true);
    const timeout = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timeout);
  }, [channelName]);

  // Theme-specific styles
  const getChannelStyles = () => {
    switch (theme) {
      case 'dark-gray':
        return {
          background: 'bg-gray-700',
          text: 'text-gray-100',
          headerText: 'text-white',
          hashtagColor: 'text-gray-400',
          inputBg: 'bg-gray-800',
          inputText: 'text-gray-300',
          inputPlaceholder: 'placeholder-gray-400',
        };
      case 'dark-purple':
        return {
          background: 'bg-slate-800',
          text: 'text-slate-100',
          headerText: 'text-white',
          hashtagColor: 'text-slate-400',
          inputBg: 'bg-slate-900',
          inputText: 'text-slate-300',
          inputPlaceholder: 'placeholder-slate-400',
        };
      case 'light-purple':
        return {
          background: 'bg-white',
          text: 'text-slate-800',
          headerText: 'text-slate-800',
          hashtagColor: 'text-purple-500',
          inputBg: 'bg-slate-100',
          inputText: 'text-slate-700',
          inputPlaceholder: 'placeholder-slate-500',
        };
      case 'pink':
        return {
          background: 'bg-white',
          text: 'text-blue-900',
          headerText: 'text-blue-950',
          hashtagColor: 'text-blue-600',
          inputBg: 'bg-blue-100',
          inputText: 'text-blue-900',
          inputPlaceholder: 'placeholder-blue-600',
        };
      case 'light-blue':
        return {
          background: 'bg-white',
          text: 'text-blue-900',
          headerText: 'text-blue-950',
          hashtagColor: 'text-blue-600',
          inputBg: 'bg-blue-100',
          inputText: 'text-blue-900',
          inputPlaceholder: 'placeholder-blue-600',
        };
      case 'alina':
        return {
          background: 'bg-white',
          text: 'text-gray-900',
          headerText: 'text-gray-900',
          hashtagColor: 'text-pink-700',
          inputBg: 'bg-pink-50',
          inputText: 'text-gray-900',
          inputPlaceholder: 'placeholder-gray-500',
        };
      default:
        return {
          background: 'bg-gray-700',
          text: 'text-gray-100',
          headerText: 'text-white',
          hashtagColor: 'text-gray-400',
          inputBg: 'bg-gray-800',
          inputText: 'text-gray-300',
          inputPlaceholder: 'placeholder-gray-400',
        };
    }
  };

  const styles = getChannelStyles();
  const isLightTheme = ['light-purple', 'pink', 'light-blue', 'alina'].includes(theme);

  return (
    <div className={`flex flex-col h-screen ${isLightTheme ? themeConfig.sidebar.background : styles.background}`}>
      {/* Channel Header - EXACT same structure and height as sidebar header */}
      <div className={`h-16 p-4 text-base font-semibold border-b ${themeConfig.sidebar.border} flex items-center justify-between ${themeConfig.sidebar.headerBg} shadow-md transition-colors duration-200`}>
        <div className="flex items-center space-x-2">
          <FaHashtag className={styles.hashtagColor} />
          <span className={styles.headerText}>{channelName}</span>
        </div>
        <div></div> {/* Empty div to match sidebar's justify-between structure */}
      </div>

      {/* Chat Area */}
      <div className={`pb-2 flex-1 overflow-y-auto flex flex-col-reverse space-y-4 ${isLightTheme ? themeConfig.sidebar.background : styles.background}`}>
        {/* Message Bubbles */}
        <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
          {children}
          <div ref={messageEndRef} />
        </div>
      </div>

      {/* Message Input - EXACT same structure and height as sidebar user panel */}
      <div className={`h-16 ${themeConfig.sidebar.headerBg} border-t ${themeConfig.sidebar.border} flex items-center`}>
        <div className="p-2 w-full">
          <input
            type="text"
            disabled
            placeholder="You do not have permission to send messages in this channel"
            className={`w-full p-3 rounded-md ${styles.inputBg} ${styles.inputText} focus:outline-none cursor-not-allowed border ${themeConfig.sidebar.border} ${styles.inputPlaceholder}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ChannelLayout;