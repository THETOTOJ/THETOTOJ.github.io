import React, { useEffect, useRef } from "react";
import Message from "../Messages";
import Everyone from "../Messages/everyone";
import { FaHashtag } from "react-icons/fa6";
const Channel: React.FC = () => {
  const messageEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom of the chat on load
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="flex flex-col h-screen bg-default text-white">
      <div className="p-4 bg-default text-xl font-semibold border-b border-channels-border flex items-center space-x-2 text-channels-white">
        <FaHashtag className="text-channels-text" />
        <span>About Me</span>
      </div>


      {/* Chat Area */}
      <div className="pb-2 flex-1 overflow-y-auto flex flex-col-reverse space-y-4">
        {/* Message Bubbles */}
        <div ref={messageEndRef}></div>

        <Message
          text="Hi! This looks like a Discord chat!"
          username="AnotherUser"
          avatarUrl="https://cdn.discordapp.com/embed/avatars/1.png"
          timestamp="Today at 3:50 PM"
        />
        <Everyone
          text="Hi! This looks like a Discord chat!"
          username="Totoj"
          avatarUrl="https://cdn.discordapp.com/embed/avatars/0.png"
          timestamp="Today at 3:50 PM" />
      </div>
      <div className="bg-default p-4 pointer-events-auto cursor:not-allowed">
        <input
          type="text"
          disabled
          placeholder="You do not have permission to send messages in this channel"
          className="w-full p-2 rounded-md bg-default-message text-white focus:outline-none cursor-not-allowed border-none"
        />
      </div>
    </div>
  );
};

export default Channel;
