import React, { useState } from 'react';
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

const Message: React.FC<MessageProps> = ({
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

  // Theme-specific styles - Updated to only show border on hover
  const getMessageStyles = () => {
    switch (theme) {
      case 'dark-gray':
        return {
          border: 'border-l-4 border-transparent hover:border-gray-500',
          background: 'hover:bg-gray-600',
          usernameText: 'text-gray-100',
          messageText: 'text-gray-200',
          timestampText: 'text-gray-400',
        };
      case 'dark-purple':
        return {
          border: 'border-l-4 border-transparent hover:border-slate-500',
          background: 'hover:bg-slate-700',
          usernameText: 'text-slate-100',
          messageText: 'text-slate-200',
          timestampText: 'text-slate-400',
        };
      case 'light-purple':
        return {
          border: 'border-l-4 border-transparent hover:border-purple-300',
          background: 'hover:bg-purple-50',
          usernameText: 'text-slate-800',
          messageText: 'text-slate-700',
          timestampText: 'text-slate-500',
        };
      case 'pink':
        return {
          border: 'border-l-4 border-transparent hover:border-blue-500',
          background: 'hover:bg-blue-50',
          usernameText: 'text-blue-900',
          messageText: 'text-blue-800',
          timestampText: 'text-blue-600',
        };
      case 'alina':
        return {
          border: 'border-l-4 border-transparent hover:border-pink-600',
          background: 'hover:bg-pink-200',
          usernameText: 'text-gray-900',
          messageText: 'text-gray-800',
          timestampText: 'text-gray-600',
        };
      case 'light-blue':
        return {
          border: 'border-l-4 border-transparent hover:border-blue-400',
          background: 'hover:bg-blue-50',
          usernameText: 'text-blue-900',
          messageText: 'text-blue-700',
          timestampText: 'text-blue-500',
        };
      default:
        return {
          border: 'border-l-4 border-transparent hover:border-gray-500',
          background: 'hover:bg-gray-600',
          usernameText: 'text-gray-100',
          messageText: 'text-gray-200',
          timestampText: 'text-gray-400',
        };
    }
  };

  const styles = getMessageStyles();

  return (
    <div>
      <div className={`${styles.border} flex flex-col space-y-2 ${styles.background} transition-all duration-200 py-2 px-1 rounded-r-md`}>
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
            <div className="flex items-baseline space-x-2 mb-1">
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
              <p dangerouslySetInnerHTML={{ __html: text }} />
            </div>
          </div>
        </div>
      </div>

      {/* Profile Modal - Pass all props including connected accounts */}
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

export default Message;