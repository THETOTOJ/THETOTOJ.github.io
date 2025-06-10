import React from "react";
import Message from "../Messages";
import ChannelLayout from "../Layout/ChannelLayout";
// Import your skills data here
// import { SkillsData } from "../../Data/skills";

const Skills = () => {
  return (
    <ChannelLayout channelName="Skills & Technologies">
      {/* Add your skills-related messages here */}
      <Message
        text="My technical skills and expertise"
        username="TechExpert"
        avatarUrl="https://cdn.discordapp.com/embed/avatars/3.png"
        timestamp="Today at 4:30 PM"
      />
    </ChannelLayout>
  );
};

export default Skills;