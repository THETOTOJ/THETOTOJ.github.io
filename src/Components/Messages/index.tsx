import React from 'react';

interface MessageProps {
  text: string;
  username: string;
  avatarUrl: string; // Adding an avatar URL as a prop for flexibility
  timestamp: string; // Adding a timestamp prop for flexibility
}

const Message: React.FC<MessageProps> = ({ text, username, avatarUrl, timestamp }) => {
  return (
    <div className="flex flex-col space-y-2 hover:bg-default-hovered transition-colors">
      <div className="flex items-center space-x-3 pl-2">
        <img
          src={avatarUrl}
          alt={`${username}'s avatar`}
          className="w-10 h-10 rounded-full"
        />
          <div className="rounded-lg text-black bg-opacity-70">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">{username}</span>
            <span className="text-sm text-gray-400">{timestamp}</span>
          </div>
          <div className=" rounded-lg">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
