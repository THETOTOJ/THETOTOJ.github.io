import React from 'react';
import './index.css';

const Everyone: React.FC = () => {
  return (
    <div className="border-l-4 border-tagged-border flex flex-col space-y-2 bg-tagged hover:bg-tagged-hovered transition-colors">
      <div className="flex items-center space-x-3 pl-2">
        <img
          src="https://cdn.discordapp.com/embed/avatars/0.png"
          alt="Totoj's avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col w-full">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Totoj</span>
            <span className="text-sm text-gray-400">Today at 3:45 PM</span>
          </div><div className="rounded-lg text-black bg-opacity-70">
            <p className="text-sm">
              <span className="bg-tagged-message text-white px-1 rounded"> @everyone</span>,
              Welcome to my <s>discord server</s> <i>portfolio</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Everyone;
