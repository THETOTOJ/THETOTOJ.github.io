import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';
import {
  FaGithub, FaLinkedin, FaGlobe, FaTwitter, FaInstagram, FaUser,
  FaRegCommentDots, FaPhoneAlt, FaEllipsisH
} from 'react-icons/fa';
import { useTheme } from '../../Contexts/ThemeContexts';
import { developerData, ConnectedAccount } from '../../Data/developer';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  username: string;
  avatarUrl: string;
  roles?: string[];
  about?: string;
  isMainDeveloper?: boolean;
  connectedAccounts?: ConnectedAccount[];
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  username,
  avatarUrl,
  roles = [],
  about,
  isMainDeveloper = false,
  connectedAccounts = []
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    setImageError(false);
  }, [isOpen, avatarUrl]);

  const handleImageError = () => setImageError(true);

  const getAvatarGradient = () => {
    switch (theme) {
      case 'pink': return 'bg-gradient-to-br from-blue-600 to-pink-600';
      case 'light-blue': return 'bg-gradient-to-br from-blue-600 to-sky-700';
      case 'alina': return 'bg-gradient-to-br from-pink-600 to-pink-800';
      case 'light-purple': return 'bg-gradient-to-br from-purple-600 to-indigo-600';
      case 'dark-purple': return 'bg-gradient-to-br from-indigo-500 to-purple-600';
      default: return 'bg-gradient-to-br from-indigo-500 to-purple-600';
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github': return <FaGithub className="w-4 h-4 text-black" />;
      case 'linkedin': return <FaLinkedin className="w-4 h-4 text-blue-500" />;
      case 'twitter': return <FaTwitter className="w-4 h-4 text-sky-400" />;
      case 'instagram': return <FaInstagram className="w-4 h-4 text-rose-500" />;
      case 'website':
      case 'portfolio':
      case 'personal': return <FaGlobe className="w-4 h-4 text-emerald-500" />;
      default: return <FaGlobe className="w-4 h-4 text-gray-500" />;
    }
  };

  // THEME HELPERS FOR BADGES AND ACTION BUTTONS
  const getThemeColors = () => {
    switch (theme) {
      case 'dark-gray':
        return {
          modal: 'bg-gray-800',
          header: 'bg-gray-700',
          card: 'bg-gray-750',
          text: 'text-gray-100',
          textSecondary: 'text-gray-400',
          border: 'border-gray-600',
          badgePrimary: 'bg-blue-600 text-white',
          badgeSecondary: 'bg-gray-600 text-gray-200',
          btnBg: 'bg-gray-700',
          btnHover: 'hover:bg-gray-600',
          btnIcon: 'text-white',
          accentColor: 'text-blue-400',
        };
      case 'dark-purple':
        return {
          modal: 'bg-slate-800',
          header: 'bg-slate-700',
          card: 'bg-slate-750',
          text: 'text-slate-100',
          textSecondary: 'text-slate-400',
          border: 'border-slate-600',
          badgePrimary: 'bg-indigo-600 text-white',
          badgeSecondary: 'bg-slate-600 text-slate-200',
          btnBg: 'bg-slate-700',
          btnHover: 'hover:bg-slate-600',
          btnIcon: 'text-white',
          accentColor: 'text-indigo-400',
        };
      case 'light-purple':
        return {
          modal: 'bg-white',
          header: 'bg-purple-50',
          card: 'bg-slate-50',
          text: 'text-slate-800',
          textSecondary: 'text-slate-700',
          border: 'border-slate-200',
          badgePrimary: 'bg-purple-600 text-white',
          badgeSecondary: 'bg-slate-200 text-slate-700',
          btnBg: 'bg-slate-200',
          btnHover: 'hover:bg-slate-300',
          btnIcon: 'text-slate-900',
          accentColor: 'text-purple-600',
        };
      case 'pink':
        return {
          modal: 'bg-blue-50',
          header: 'bg-blue-100',
          card: 'bg-pink-50',
          text: 'text-pink-800',
          textSecondary: 'text-pink-700',
          border: 'border-pink-300',
          badgePrimary: 'bg-pink-600 text-white',
          badgeSecondary: 'bg-pink-100 text-pink-700',
          btnBg: 'bg-pink-200',
          btnHover: 'hover:bg-pink-300',
          btnIcon: 'text-pink-800',
          accentColor: 'text-pink-600',
        };
      case 'alina':
        return {
          modal: 'bg-pink-50',
          header: 'bg-pink-100',
          card: 'bg-white',
          text: 'text-gray-900',
          textSecondary: 'text-gray-800',
          border: 'border-pink-300',
          badgePrimary: 'bg-pink-600 text-white',
          badgeSecondary: 'bg-gray-200 text-gray-700',
          btnBg: 'bg-gray-200',
          btnHover: 'hover:bg-gray-300',
          btnIcon: 'text-gray-700',
          accentColor: 'text-pink-600',
        };
      case 'light-blue':
        return {
          modal: 'bg-blue-100',
          header: 'bg-blue-200',
          card: 'bg-blue-50',
          text: 'text-blue-900',
          textSecondary: 'text-blue-800',
          border: 'border-blue-400',
          badgePrimary: 'bg-blue-600 text-white',
          badgeSecondary: 'bg-blue-200 text-blue-900', // Now a visible slightly darker blue
          btnBg: 'bg-blue-200',
          btnHover: 'hover:bg-blue-300',
          btnIcon: 'text-blue-900',
          accentColor: 'text-blue-600',
        };
      default:
        return {
          modal: 'bg-gray-800',
          header: 'bg-gray-700',
          card: 'bg-gray-750',
          text: 'text-gray-100',
          textSecondary: 'text-gray-400',
          border: 'border-gray-600',
          badgePrimary: 'bg-blue-600 text-white',
          badgeSecondary: 'bg-gray-600 text-gray-200',
          btnBg: 'bg-gray-700',
          btnHover: 'hover:bg-gray-600',
          btnIcon: 'text-white',
          accentColor: 'text-blue-400',
        };
    }
  };

  const t = getThemeColors();
  const isLightTheme = ['light-purple', 'pink', 'light-blue', 'alina'].includes(theme);

  const displayName: string = isMainDeveloper ? developerData.name : username;
  const displayAvatar: string = isMainDeveloper ? developerData.avatarUrl : avatarUrl;
  const displayRoles: string[] = isMainDeveloper ? developerData.roles : (roles || []);
  const displayAbout: string = isMainDeveloper ? developerData.about.description : (about || "No additional information available.");
  const memberInfo: { date: string; subtitle: string } = isMainDeveloper ? developerData.portfolio.memberSince : { date: "N/A", subtitle: "External profile" };
  const displayConnectedAccounts: ConnectedAccount[] = isMainDeveloper ? developerData.connectedAccounts : connectedAccounts;

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black bg-opacity-85"></div>
      <div
        ref={modalRef}
        className={`${t.modal} rounded-lg shadow-2xl w-80 max-w-full max-h-full overflow-y-auto relative border ${t.border} z-10`}
      >
        <div className={`${t.header} h-16 relative`}>
          <button
            onClick={onClose}
            className={`absolute top-2 right-2 ${t.textSecondary} hover:text-opacity-80 transition-colors duration-200 p-1 rounded`}
          >
            <HiXMark className="w-4 h-4" />
          </button>
        </div>
        <div className="px-4 pb-4 -mt-8">
          <div className="flex justify-between items-end mb-4">
            <div className="relative">
              {!imageError && displayAvatar ? (
                <img
                  src={displayAvatar}
                  alt={`${displayName}'s avatar`}
                  className={`w-20 h-20 rounded-full border-4 ${isLightTheme ? 'border-white' : 'border-gray-800'} shadow-lg`}
                  onError={handleImageError}
                />
              ) : (
                <div className={`w-20 h-20 ${getAvatarGradient()} rounded-full border-4 ${isLightTheme ? 'border-white' : 'border-gray-800'} shadow-lg flex items-center justify-center`}>
                  <FaUser className="text-white text-lg" />
                </div>
              )}
              <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-400 border-4 ${isLightTheme ? 'border-white' : 'border-gray-800'} rounded-full`}></div>
            </div>
            <div className="flex space-x-2">
              <button className={`${t.btnBg} ${t.btnHover} ${t.btnIcon} p-2 rounded flex items-center justify-center transition-colors duration-200`}>
                <FaRegCommentDots className="w-5 h-5" />
              </button>
              <button className={`${t.btnBg} ${t.btnHover} ${t.btnIcon} p-2 rounded flex items-center justify-center transition-colors duration-200`}>
                <FaPhoneAlt className="w-5 h-5" />
              </button>
              <button className={`${t.btnBg} ${t.btnHover} ${t.btnIcon} p-2 rounded flex items-center justify-center transition-colors duration-200`}>
                <FaEllipsisH className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <h2 className={`text-xl font-bold ${t.text} mb-1`}>{displayName}</h2>
            <p className={`text-sm ${t.textSecondary}`}>
              {isMainDeveloper ? developerData.discriminator : "#0000"}
            </p>
          </div>
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {displayRoles.map((role: string, index: number) => (
                <span
                  key={index}
                  className={`${index === 0 ? t.badgePrimary : t.badgeSecondary} text-xs px-2 py-1 rounded font-medium`}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
          <div className={`${t.card} rounded-lg p-3 mb-4 border ${t.border}`}>
            <h3 className={`text-sm font-semibold ${t.text} mb-2`}>ABOUT ME</h3>
            <p className={`text-sm ${t.textSecondary} leading-relaxed`}>
              {displayAbout}
            </p>
          </div>
          <div className={`${t.card} rounded-lg p-3 mb-4 border ${t.border}`}>
            <h3 className={`text-sm font-semibold ${t.text} mb-3`}>
              CONNECTED ACCOUNTS ({displayConnectedAccounts.length})
            </h3>
            {displayConnectedAccounts && displayConnectedAccounts.length > 0 ? (
              <div className="space-y-3">
                {displayConnectedAccounts.map((account: ConnectedAccount, index: number) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 ${t.btnBg} rounded flex items-center justify-center`}>
                        {getPlatformIcon(account.platform)}
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${t.text}`}>{account.platform}</p>
                        <p className={`text-xs ${t.textSecondary}`}>{account.username}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {account.verified && (
                        <span className="text-emerald-500 text-xs font-bold">✓</span>
                      )}
                      <button
                        onClick={() => window.open(account.url, '_blank')}
                        className={`text-xs ${t.accentColor} hover:underline font-medium px-2 py-1 rounded ${t.btnHover}`}
                      >
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={`text-center py-4 ${t.textSecondary}`}>
                <p className="text-xs">
                  No connected accounts available
                </p>
                <p className="text-xs mt-1">
                  {isMainDeveloper ? '(Developer profile)' : '(External profile)'}
                </p>
              </div>
            )}
          </div>
          <div className={`${t.card} rounded-lg p-3 mb-4 border ${t.border}`}>
            <h3 className={`text-sm font-semibold ${t.text} mb-2`}>
              {isMainDeveloper ? "PORTFOLIO MEMBER SINCE" : "COMPANY INFO"}
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-lg">📅</span>
              <div>
                <p className={`text-sm ${t.text} font-medium`}>{memberInfo.date}</p>
                <p className={`text-xs ${t.textSecondary}`}>{memberInfo.subtitle}</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className={`text-xs font-semibold ${t.textSecondary} uppercase tracking-wider mb-2`}>NOTE</h3>
            <textarea
              placeholder="Click to add a note"
              className={`w-full h-16 bg-white border ${t.border} rounded p-2 text-sm text-gray-800 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-opacity-50 ${t.accentColor.replace('text-', 'focus:ring-')} placeholder-opacity-50`}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProfileModal;