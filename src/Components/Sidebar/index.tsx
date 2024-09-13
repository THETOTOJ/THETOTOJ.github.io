import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  useEffect(() => {
    if (["/school", "/work", "/skills"].includes(location.pathname)) {
      setIsDropdownOpen(true);
    }
  }, [location.pathname]);

  const handleDropdownToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <ul className="mt-4 space-y-2">
        <li>
          <Link to="/channel" className="block px-4 py-2 hover:bg-gray-700">
            Channel
          </Link>
        </li>

        {/* Dropdown Menu */}
        <li className="px-4 py-2 cursor-pointer" onClick={handleDropdownToggle}>
          <div className="flex justify-between items-center hover:bg-gray-700 p-2 rounded-md">
            <span>Text Channels</span>
            <svg
              className={`w-4 h-4 transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </li>

        {isDropdownOpen && (
          <ul className="mt-2 space-y-1 pl-4">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-sm hover:bg-gray-700"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/school"
                className="block px-4 py-2 text-sm hover:bg-gray-700"
              >
                School
              </Link>
            </li>
            <li>
              <Link
                to="/work"
                className="block px-4 py-2 text-sm hover:bg-gray-700"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="block px-4 py-2 text-sm hover:bg-gray-700"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="block px-4 py-2 text-sm hover:bg-gray-700"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="block px-4 py-2 text-sm hover:bg-gray-700"
              >
                Coordonnées
              </Link>
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
