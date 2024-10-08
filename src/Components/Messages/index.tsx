import React, { useState } from 'react';
import ProfileModal from '../Modal';

interface MessageProps {
  text: string;
  username: string;
  avatarUrl: string;
  timestamp: string;
}

const Message: React.FC<MessageProps> = ({ text, username, avatarUrl, timestamp }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAvatarClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="border-l-4 border-default hover:border-default-hovered flex flex-col space-y-2 hover:bg-default-hovered transition-colors">
        <div className="flex items-center space-x-3 pl-2">
          <img
            src={avatarUrl}
            alt={`${username}'s avatar`}
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={handleAvatarClick}
          />
          <div className="flex flex-col w-full">
            <div className="flex items-center space-x-2">
              <span className="font-semibold cursor-pointer">{username}</span>
              <span className="text-sm text-gray-400">{timestamp}</span>
            </div>
            <div className="rounded-lg px-1">
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      <ProfileModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        username={username}
        avatarUrl={avatarUrl}
      />
    </div>
  );
};

export default Message;
