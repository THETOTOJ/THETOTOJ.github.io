import React, { useState, useEffect } from "react";
import { FaHashtag, FaUser, FaXmark, FaPalette } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { IoChevronDownOutline, IoChevronForwardOutline } from "react-icons/io5";
import { HiSpeakerWave, HiMicrophone, HiCog6Tooth } from "react-icons/hi2";
import { useTheme } from "../../Contexts/ThemeContexts";
import ProfileModal from "../Modal";
import { developerData } from "../../Data/developer";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [isServerInfoOpen, setIsServerInfoOpen] = useState(false);
  const [isThemeSwitcherOpen, setIsThemeSwitcherOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const { theme, setTheme, themeConfig } = useTheme();

  useEffect(() => {
    if (["/schools", "/work", "/skills", "/project", "/contact"].includes(location.pathname)) {
      setIsDropdownOpen(true);
    }
  }, [location.pathname]);

  const handleDropdownToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  const handleServerInfoToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsServerInfoOpen((prev) => !prev);
  };

  const handleThemeSwitcherToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsThemeSwitcherOpen((prev) => !prev);
  };

  const handleCloseServerInfo = () => {
    setIsServerInfoOpen(false);
  };

  const handleThemeChange = (newTheme: typeof theme) => {
    setTheme(newTheme);
    setIsThemeSwitcherOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileModalOpen(true);
  };

  const handleCloseProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  // List of all channels
  const channels = [
    { path: "/", name: "about-me" },
    { path: "/schools", name: "education" },
    { path: "/work", name: "experience" },
    { path: "/skills", name: "skills" },
    { path: "/project", name: "projects" },
    { path: "/contact", name: "contact-info" },
  ];

  const getVisibleChannels = () => {
    if (isDropdownOpen) {
      return channels;
    } else {
      return channels.filter(channel => channel.path === location.pathname);
    }
  };

  const visibleChannels = getVisibleChannels();

  const themeOptions = [
    { id: 'dark-gray', name: 'Dark Gray', preview: 'bg-gray-600' },
    { id: 'dark-purple', name: 'Dark Purple', preview: 'bg-slate-700' },
    { id: 'light-purple', name: 'Light Purple', preview: 'bg-purple-200' },
    { id: 'pink', name: 'Pink', preview: 'bg-pink-300' },
    { id: 'light-blue', name: 'Light Blue', preview: 'bg-sky-300' },
    { id: 'alina', name: 'Alina', preview: 'bg-gradient-to-r from-pink-300 to-blue-300' },
  ];

  // Helper function to get theme-specific styles
  const getThemeStyles = () => {
    const isLightTheme = ['light-purple', 'pink', 'light-blue', 'alina'].includes(theme);

    return {
      headerText: isLightTheme
        ? (theme === 'pink' ? 'text-blue-950' :
          theme === 'light-blue' ? 'text-blue-950' :
            theme === 'alina' ? 'text-gray-900' :
              'text-slate-800')
        : 'text-white',

      userPanelBg: isLightTheme
        ? (theme === 'pink' ? 'bg-pink-300' :
          theme === 'light-blue' ? 'bg-blue-300' :
            theme === 'alina' ? 'bg-pink-300' :
              'bg-slate-100')
        : (theme === 'dark-purple' ? 'bg-slate-700' : 'bg-gray-700'),

      userPanelBorder: isLightTheme
        ? (theme === 'pink' ? 'border-blue-500' :
          theme === 'light-blue' ? 'border-blue-500' :
            theme === 'alina' ? 'border-pink-600' :
              'border-slate-200')
        : (theme === 'dark-purple' ? 'border-slate-600' : 'border-gray-600'),

      userPanelHover: isLightTheme
        ? (theme === 'pink' ? 'hover:bg-pink-400' :
          theme === 'light-blue' ? 'hover:bg-blue-400' :
            theme === 'alina' ? 'hover:bg-pink-400' :
              'hover:bg-slate-200')
        : (theme === 'dark-purple' ? 'hover:bg-slate-600' : 'hover:bg-gray-600'),

      userIconBg: theme === 'pink'
        ? 'bg-gradient-to-br from-blue-600 to-pink-600'
        : theme === 'light-blue'
          ? 'bg-gradient-to-br from-blue-600 to-sky-700'
          : theme === 'alina'
            ? 'bg-gradient-to-br from-pink-600 to-pink-800'
            : 'bg-gradient-to-br from-indigo-500 to-purple-600',

      statusBorder: isLightTheme
        ? (theme === 'pink' ? 'border-pink-300' :
          theme === 'light-blue' ? 'border-blue-300' :
            theme === 'alina' ? 'border-pink-200' :
              'border-white')
        : (theme === 'dark-purple' ? 'border-slate-700' : 'border-gray-700'),

      buttonHover: isLightTheme
        ? (theme === 'pink' ? 'hover:bg-pink-400' :
          theme === 'light-blue' ? 'hover:bg-blue-400' :
            theme === 'alina' ? 'hover:bg-pink-400' :
              'hover:bg-slate-300')
        : (theme === 'dark-purple' ? 'hover:bg-slate-600' : 'hover:bg-gray-600'),
    };
  };

  const styles = getThemeStyles();

  return (
    <>
      <div className={`flex w-60 flex-col h-screen ${themeConfig.sidebar.background} ${themeConfig.sidebar.text} ${['light-purple', 'pink', 'light-blue', 'alina'].includes(theme) ? 'border-r' : ''} ${themeConfig.sidebar.border}`}>
        {/* Server/Portfolio Header */}
        <div
          className={`h-16 p-4 text-base font-semibold border-b ${themeConfig.sidebar.border} flex items-center justify-between ${themeConfig.sidebar.headerBg} shadow-md cursor-pointer ${themeConfig.sidebar.hover} transition-colors duration-200`}
          onClick={handleServerInfoToggle}
        >
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-emerald-400 rounded-full shadow-sm"></div>
            <span className={styles.headerText}>{developerData.portfolio.serverName}</span>
          </div>
          <IoChevronDownOutline className={`${themeConfig.sidebar.textSecondary} text-sm`} />
        </div>

        {/* Theme Switcher Button */}
        <div className="p-2 border-b border-opacity-50 relative">
          <button
            onClick={handleThemeSwitcherToggle}
            className={`w-full flex items-center justify-between px-2 py-1.5 text-xs font-semibold ${themeConfig.sidebar.textSecondary} hover:text-opacity-80 cursor-pointer transition-colors duration-200 rounded group ${themeConfig.sidebar.hover}`}
          >
            <div className="flex items-center space-x-2">
              <FaPalette className="text-sm" />
              <span className="uppercase tracking-wider">Theme</span>
            </div>
            <IoChevronDownOutline className={`transition-transform duration-200 ${isThemeSwitcherOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Theme Dropdown */}
          {isThemeSwitcherOpen && (
            <div className={`absolute top-full left-2 right-2 mt-1 ${themeConfig.modal.background} rounded-lg shadow-lg border ${themeConfig.modal.border} z-50 overflow-hidden`}>
              {themeOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleThemeChange(option.id as typeof theme)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 text-sm transition-colors duration-200 ${theme === option.id
                    ? (['light-purple', 'pink', 'light-blue', 'alina'].includes(theme)
                      ? (theme === 'pink' ? 'bg-pink-100 text-pink-800' :
                        theme === 'light-blue' ? 'bg-blue-100 text-blue-800' :
                          theme === 'alina' ? 'bg-pink-100 text-pink-800' :
                            'bg-purple-100 text-purple-800')
                      : 'bg-gray-600 text-white')
                    : `${themeConfig.modal.text} ${['light-purple', 'pink', 'light-blue', 'alina'].includes(theme) ? 'hover:bg-slate-100' : 'hover:bg-gray-600'}`
                    }`}
                >
                  <div className={`w-4 h-4 rounded-full ${option.preview} shadow-sm`}></div>
                  <span className="font-medium">{option.name}</span>
                  {theme === option.id && (
                    <div className="ml-auto w-2 h-2 bg-emerald-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Channels Section */}
        <div className="flex-1 overflow-y-auto p-2">
          {/* Text Channels Dropdown */}
          <div className="mb-2">
            <div
              className={`flex items-center justify-between px-2 py-1 text-xs font-semibold ${themeConfig.sidebar.textSecondary} hover:text-opacity-80 cursor-pointer transition-colors duration-200 rounded group`}
              onClick={handleDropdownToggle}
            >
              <div className="flex items-center space-x-1">
                <div className="transition-transform duration-200">
                  {isDropdownOpen ? <IoChevronDownOutline /> : <IoChevronForwardOutline />}
                </div>
                <span className="uppercase tracking-wider">Text Channels</span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <FaHashtag className={`text-xs ${['light-purple', 'pink', 'light-blue', 'alina'].includes(theme)
                  ? (theme === 'pink' ? 'text-pink-600' :
                    theme === 'light-blue' ? 'text-blue-700' :
                      theme === 'alina' ? 'text-pink-600' :
                        'text-purple-500')
                  : 'text-indigo-400'}`} />
              </div>
            </div>

            {/* Channel List with Animation */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen ? 'max-h-96 opacity-100' : visibleChannels.length > 0 ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'
              }`}>
              <ul className="mt-1 space-y-0.5">
                {visibleChannels.map((channel, index) => (
                  <li
                    key={channel.path}
                    className="transform transition-all duration-200"
                    style={{
                      transitionDelay: isDropdownOpen ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    <Link
                      to={channel.path}
                      className={`flex items-center px-2 py-1.5 rounded text-sm group transition-all duration-200 ${location.pathname === channel.path
                        ? `${themeConfig.sidebar.active} ${themeConfig.sidebar.activeText} ${['light-purple', 'pink', 'light-blue', 'alina'].includes(theme) ? 'border shadow-sm' : 'shadow-lg shadow-indigo-600/20'}`
                        : `${themeConfig.sidebar.text} ${themeConfig.sidebar.hover} hover:text-opacity-90`
                        }`}
                    >
                      <FaHashtag className={`mr-2 text-xs transition-colors duration-200 ${location.pathname === channel.path
                        ? (['light-purple', 'pink', 'light-blue', 'alina'].includes(theme)
                          ? (theme === 'pink' ? "text-pink-600" :
                            theme === 'light-blue' ? "text-blue-600" :
                              theme === 'alina' ? "text-pink-600" :
                                "text-purple-600")
                          : "text-white")
                        : `${themeConfig.sidebar.textSecondary} ${['light-purple', 'pink', 'light-blue', 'alina'].includes(theme)
                          ? (theme === 'pink' ? 'group-hover:text-pink-500' :
                            theme === 'light-blue' ? 'group-hover:text-blue-500' :
                              theme === 'alina' ? 'group-hover:text-pink-500' :
                                'group-hover:text-purple-500')
                          : 'group-hover:text-indigo-400'}`
                        }`} />
                      <span className="font-medium">{channel.name}</span>
                      {location.pathname === channel.path && (
                        <div className="ml-auto">
                          <IoChevronForwardOutline className={`text-sm ${['light-purple', 'pink', 'light-blue', 'alina'].includes(theme)
                            ? (theme === 'pink' ? 'text-pink-700' :
                              theme === 'light-blue' ? 'text-blue-800' :
                                theme === 'alina' ? 'text-pink-700' :
                                  'text-purple-600')
                            : 'text-white'}`} />
                        </div>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Voice Channels Section */}
          <div className="mb-4">
            <div className={`flex items-center justify-between px-2 py-1 text-xs font-semibold ${themeConfig.sidebar.textSecondary} hover:text-opacity-80 cursor-pointer transition-colors duration-200 rounded group`}>
              <div className="flex items-center space-x-1">
                <IoChevronDownOutline />
                <span className="uppercase tracking-wider">Voice Channels</span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <HiSpeakerWave className={`text-xs ${['light-purple', 'pink', 'light-blue', 'alina'].includes(theme)
                  ? (theme === 'pink' ? 'text-pink-600' :
                    theme === 'light-blue' ? 'text-blue-700' :
                      theme === 'alina' ? 'text-pink-600' :
                        'text-purple-500')
                  : 'text-indigo-400'}`} />
              </div>
            </div>
            <div className={`mt-1 px-2 py-1.5 text-sm ${themeConfig.sidebar.textSecondary} italic`}>
              No voice channels available
            </div>
          </div>
        </div>

        {/* User Panel - Clickable with Truncation */}
        {/* User Panel - Clickable with Truncation */}
        <div className={`h-16 ${themeConfig.sidebar.headerBg} border-t ${themeConfig.sidebar.border} flex items-center`}>
          <div className="p-2 w-full">
            <div
              className={`flex items-center justify-between ${styles.userPanelBg} rounded p-2 ${styles.userPanelHover} transition-colors duration-200 cursor-pointer`}
              onClick={handleProfileClick}
            >
              <div className="flex items-center space-x-2 min-w-0 flex-1">
                <div className="relative flex-shrink-0">
                  <div className={`w-8 h-8 ${styles.userIconBg} rounded-full flex items-center justify-center shadow-sm`}>
                    <FaUser className="text-white text-xs" />
                  </div>
                  <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 ${styles.statusBorder} rounded-full shadow-sm`}></div>
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <span
                    className={`${styles.headerText} text-sm font-medium truncate`}
                    title={developerData.username} // Shows full name on hover
                  >
                    {developerData.displayName || developerData.username}
                  </span>
                  <span className={`text-xs ${themeConfig.sidebar.textSecondary} truncate`}>
                    {developerData.discriminator}
                  </span>
                </div>
              </div>
              <div className="flex space-x-1 flex-shrink-0">
                <button className={`p-1 ${themeConfig.sidebar.textSecondary} hover:text-opacity-80 ${styles.buttonHover} rounded transition-colors duration-200`}>
                  <HiMicrophone className="text-sm" />
                </button>
                <button className={`p-1 ${themeConfig.sidebar.textSecondary} hover:text-opacity-80 ${styles.buttonHover} rounded transition-colors duration-200`}>
                  <HiSpeakerWave className="text-sm" />
                </button>
                <button className={`p-1 ${themeConfig.sidebar.textSecondary} hover:text-opacity-80 ${styles.buttonHover} rounded transition-colors duration-200`}>
                  <HiCog6Tooth className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Server Info Modal */}
      {isServerInfoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className={`${themeConfig.modal.background} rounded-lg shadow-2xl w-96 max-w-md mx-4 overflow-hidden ${['light-purple', 'pink', 'light-blue', 'alina'].includes(theme) ? 'border border-slate-200' : ''}`}>
            {/* Modal Header */}
            <div className={`${themeConfig.modal.headerBg} p-4 flex items-center justify-between`}>
              <h2 className="text-white text-lg font-semibold">Server Info</h2>
              <button
                onClick={handleCloseServerInfo}
                className="text-white hover:text-slate-200 transition-colors duration-200"
              >
                <FaXmark />
              </button>
            </div>

            {/* Modal Content */}
            <div className={`p-6 ${themeConfig.modal.text}`}>
              {/* Server Icon and Name */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 ${styles.userIconBg} rounded-full flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-2xl font-bold">MP</span>
                </div>
                <div>
                  <h3 className={`${styles.headerText} text-xl font-semibold`}>{developerData.portfolio.serverName}</h3>
                  <p className={`${themeConfig.modal.textSecondary} text-sm`}>{developerData.portfolio.serverDescription}</p>
                </div>
              </div>

              {/* Server Stats */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className={themeConfig.modal.textSecondary}>Created</span>
                  <span className={`${styles.headerText} font-medium`}>{developerData.portfolio.createdDate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={themeConfig.modal.textSecondary}>Owner</span>
                  <span className={`${styles.headerText} font-medium`}>{developerData.username}{developerData.discriminator}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={themeConfig.modal.textSecondary}>Members</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className={`${styles.headerText} font-medium`}>1 Online</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className={themeConfig.modal.textSecondary}>Text Channels</span>
                  <span className={`${styles.headerText} font-medium`}>{channels.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={themeConfig.modal.textSecondary}>Voice Channels</span>
                  <span className={`${styles.headerText} font-medium`}>0</span>
                </div>
              </div>

              {/* Server Description */}
              <div className={`mt-6 pt-4 border-t ${themeConfig.modal.border}`}>
                <h4 className={`${styles.headerText} font-semibold mb-2`}>About</h4>
                <p className={`${themeConfig.modal.textSecondary} text-sm leading-relaxed`}>
                  Welcome to my portfolio server! Navigate through different channels to learn about my education,
                  work experience, skills, and projects. Each channel contains detailed information about my
                  professional journey.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex space-x-3">
                <button
                  onClick={handleCloseServerInfo}
                  className={`flex-1 ${themeConfig.modal.headerBg} hover:opacity-90 text-white py-2 px-4 rounded transition-all duration-200 shadow-sm font-medium`}
                >
                  Explore Server
                </button>
                <button className={`px-4 py-2 ${['light-purple', 'pink', 'light-blue', 'alina'].includes(theme)
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300'
                  : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'} rounded transition-colors duration-200 font-medium`}>
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Profile Modal for Sidebar */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={handleCloseProfileModal}
        username={developerData.username}
        avatarUrl={developerData.avatarUrl}
        roles={developerData.roles}
        isMainDeveloper={true}
        connectedAccounts={developerData.connectedAccounts}
      />

      {/* Click outside to close theme switcher */}
      {isThemeSwitcherOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsThemeSwitcherOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;