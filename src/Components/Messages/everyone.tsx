import React, { useState } from 'react';
import './index.css';
import ProfileModal from '../Modal';

interface MessageProps {
  text: string;
  username: string;
  avatarUrl: string;
  timestamp: string;
}
const Everyone: React.FC<MessageProps> = ({ text, username, avatarUrl, timestamp }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAvatarClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="border-l-4 border-tagged-border flex flex-col space-y-2 bg-tagged hover:bg-tagged-hovered transition-colors">
      <div className="flex items-center space-x-3 pl-2">
        <img
          src={avatarUrl} alt={`${username}'s avatar`}
          className="w-10 h-10 rounded-full cursor-pointer"
          onClick={handleAvatarClick}
        />
        <div className="flex flex-col w-full">
          <div className="flex items-center space-x-2">
            <span className="font-semibold cursor-pointer">{username}</span>
            <span className="text-sm text-gray-400">{timestamp}</span>
          </div><div className="rounded-lg bg-opacity-70">
            <p className="text-sm">
              <span className="bg-tagged-message text-white px-1 rounded cursor-pointer"> @everyone</span>,
              Welcome to my <s>discord server</s> <i>portfolio</i>
            </p>
          </div>
        </div>
      </div>
      <ProfileModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        username={username}
        avatarUrl={avatarUrl}
      />
    </div>
  );
};

export default Everyone;
