import React, { useState } from 'react';
import './index.css';
import ProfileModal from '../Modal';
import { useTheme } from '../../Contexts/ThemeContexts';
import { ConnectedAccount } from '../../Data/developer';
import { FaUser } from 'react-icons/fa6';

interface MessageProps {
  text: string;
  username: string;
  avatarUrl: string;
  timestamp: string;
  roles?: string[];
  about?: string;
  isMainDeveloper?: boolean;
  connectedAccounts?: ConnectedAccount[];
}

const Everyone: React.FC<MessageProps> = ({
  text,
  username,
  avatarUrl,
  timestamp,
  roles = [],
  about,
  isMainDeveloper = false,
  connectedAccounts = []
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { theme } = useTheme();

  const handleAvatarClick = () => {
    setModalOpen(true);
  };

  const handleUsernameClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Get the same gradient as sidebar
  const getAvatarGradient = () => {
    switch (theme) {
      case 'pink':
        return 'bg-gradient-to-br from-blue-600 to-pink-600';
      case 'light-blue':
        return 'bg-gradient-to-br from-blue-600 to-sky-700';
      case 'alina':
        return 'bg-gradient-to-br from-pink-600 to-pink-800';
      case 'light-purple':
        return 'bg-gradient-to-br from-purple-600 to-indigo-600';
      case 'dark-purple':
        return 'bg-gradient-to-br from-indigo-500 to-purple-600';
      default:
        return 'bg-gradient-to-br from-indigo-500 to-purple-600';
    }
  };

  // Theme-specific styles with better @everyone tag colors
  // Theme-specific styles with much better dark theme readability
  const getEveryoneStyles = () => {
    switch (theme) {
      case 'dark-gray':
        return {
          border: 'border-blue-400',
          hoverBorder: 'hover:border-blue-300',
          background: 'bg-blue-500 bg-opacity-10 hover:bg-blue-400 hover:bg-opacity-15',
          usernameText: 'text-white',                    // Pure white for max contrast
          messageText: 'text-gray-100',                  // Very light gray
          timestampText: 'text-gray-300',                // Lighter gray
          everyoneTag: 'bg-blue-400 hover:bg-blue-300 text-gray-900 shadow-lg font-semibold',
        };
      case 'dark-purple':
        return {
          border: 'border-purple-400',
          hoverBorder: 'hover:border-purple-300',
          background: 'bg-purple-500 bg-opacity-10 hover:bg-purple-400 hover:bg-opacity-15',
          usernameText: 'text-white',                    // Pure white
          messageText: 'text-slate-100',                 // Very light slate
          timestampText: 'text-slate-300',               // Light slate
          everyoneTag: 'bg-purple-400 hover:bg-purple-300 text-gray-900 shadow-lg font-semibold',
        };
      case 'light-purple':
        return {
          border: 'border-purple-400',
          hoverBorder: 'hover:border-purple-500',
          background: 'bg-purple-100 bg-opacity-50 hover:bg-purple-200 hover:bg-opacity-70',
          usernameText: 'text-slate-900',                // Darker for light theme
          messageText: 'text-slate-800',
          timestampText: 'text-slate-600',
          everyoneTag: 'bg-purple-500 hover:bg-purple-600 text-white shadow-sm font-semibold',
        };
      case 'pink':
        return {
          border: 'border-blue-300',
          hoverBorder: 'hover:border-blue-500',
          background: 'bg-blue-100 bg-opacity-50 hover:bg-blue-200 hover:bg-opacity-70',
          usernameText: 'text-blue-900',
          messageText: 'text-blue-800',
          timestampText: 'text-blue-600',
          everyoneTag: 'bg-blue-500 hover:bg-blue-600 text-white shadow-sm font-semibold',
        };
      case 'alina':
        return {
          border: 'border-pink-400',
          hoverBorder: 'hover:border-pink-600',
          background: 'bg-pink-100 bg-opacity-50 hover:bg-pink-200 hover:bg-opacity-70',
          usernameText: 'text-gray-900',
          messageText: 'text-gray-800',
          timestampText: 'text-gray-600',
          everyoneTag: 'bg-pink-500 hover:bg-pink-600 text-white shadow-sm font-semibold',
        };
      case 'light-blue':
        return {
          border: 'border-blue-400',
          hoverBorder: 'hover:border-blue-500',
          background: 'bg-blue-100 bg-opacity-60 hover:bg-blue-200 hover:bg-opacity-80',
          usernameText: 'text-blue-900',
          messageText: 'text-blue-800',
          timestampText: 'text-blue-600',
          everyoneTag: 'bg-blue-500 hover:bg-blue-600 text-white shadow-sm font-semibold',
        };
      default:
        return {
          border: 'border-blue-400',
          hoverBorder: 'hover:border-blue-300',
          background: 'bg-blue-500 bg-opacity-10 hover:bg-blue-400 hover:bg-opacity-15',
          usernameText: 'text-white',
          messageText: 'text-gray-100',
          timestampText: 'text-gray-300',
          everyoneTag: 'bg-blue-400 hover:bg-blue-300 text-gray-900 shadow-lg font-semibold',
        };
    }
  };

  const styles = getEveryoneStyles();

  return (
    <div>
      <div className={`border-l-4 ${styles.border} ${styles.hoverBorder} flex flex-col ${styles.background} transition-all duration-200 py-3 px-1 rounded-r-md`}>
        <div className="flex items-start space-x-3 pl-2">
          {/* Avatar with fallback */}
          <div className="relative flex-shrink-0 mt-0.5 cursor-pointer" onClick={handleAvatarClick}>
            {!imageError && avatarUrl ? (
              <img
                src={avatarUrl}
                alt={`${username}'s avatar`}
                className="w-10 h-10 rounded-full hover:opacity-80 transition-opacity duration-200"
                onError={handleImageError}
              />
            ) : (
              <div className={`w-10 h-10 ${getAvatarGradient()} rounded-full flex items-center justify-center shadow-sm hover:opacity-80 transition-opacity duration-200`}>
                <FaUser className="text-white text-xs" />
              </div>
            )}
          </div>

          <div className="flex flex-col w-full min-w-0">
            {/* Header with username and timestamp */}
            <div className="flex items-baseline space-x-2 mb-2">
              <span
                className={`font-semibold ${styles.usernameText} cursor-pointer hover:underline transition-all duration-200 text-base`}
                onClick={handleUsernameClick}
              >
                {username}
              </span>
              <span className={`text-xs ${styles.timestampText} font-normal`}>
                {timestamp}
              </span>
            </div>
            {/* Message content */}
            <div className={`${styles.messageText} text-sm leading-relaxed`}>
              <p>
                <span className={`${styles.everyoneTag} text-sm font-medium px-3 py-1 rounded-full cursor-pointer transition-all duration-200 inline-flex items-center`}>
                  @everyone
                </span>
                , Welcome to my <s>discord server</s> <i>portfolio</i>
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProfileModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        username={username}
        avatarUrl={avatarUrl}
        roles={roles}
        about={about}
        isMainDeveloper={isMainDeveloper}
        connectedAccounts={connectedAccounts}
      />
    </div>
  );
};

export default Everyone;