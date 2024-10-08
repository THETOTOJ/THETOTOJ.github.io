import React, { useState, useEffect } from "react";
import { FaHashtag } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { IoChevronDownOutline, IoChevronForwardOutline } from "react-icons/io5";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  useEffect(() => {
    if (["/school", "/work", "/skills", "/project", "/contact"].includes(location.pathname)) {
      setIsDropdownOpen(true);
    }
  }, [location.pathname]);

  const handleDropdownToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  // List of all channels
  const channels = [
    { path: "/", name: "About Me" },
    { path: "/school", name: "School" },
    { path: "/work", name: "Work" },
    { path: "/skills", name: "Skills" },
    { path: "/project", name: "Project" },
    { path: "/contact", name: "Coordonnées" },
  ];

  return (
    <div className="flex w-48 flex-col h-screen bg-sidebar text-white">
      {/* Server/Portfolio Header */}
      <div className="p-4 text-lg font-semibold border-b border-gray-800 flex items-center space-x-2 text-gray-300">
        <span>My Portfolio</span>
      </div>

      <ul className="mt-4 space-y-2 text-sm">
        {/* Dropdown Toggle */}
        <li className="cursor-pointer">
          <div
            className="flex items-center hover:text-sidebar-hover p-2 rounded-md text-sidebar-text font-bold"
            onClick={handleDropdownToggle}
          >
            {isDropdownOpen ? <IoChevronDownOutline /> : <IoChevronForwardOutline />}
            <span>&nbsp;Text Channels</span>
          </div>
        </li>

        {/* Channel List */}
        <ul className="mt-2 space-y-1">
          {channels.map((channel) => (
            <li key={channel.path}>
              <Link
                to={channel.path}
                className={`flex items-center px-4 py-2 rounded-md text-xs ${
                  location.pathname === channel.path
                    ? "bg-channels-selected text-white" // Always highlight the active channel
                    : isDropdownOpen
                    ? "hover:bg-channels-selected text-channels-name"
                    : "hidden" // Hide non-active channels when dropdown is closed
                }`}
              >
                <FaHashtag className="mr-2" /> {channel.name}
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default Sidebar;
