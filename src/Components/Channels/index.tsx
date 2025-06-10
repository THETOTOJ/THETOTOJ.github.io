import Message from "../Messages";
import ChannelLayout from "../Layout/ChannelLayout";
import { developerData } from "../../Data/developer";
import Everyone from "../Messages/everyone";

const Channel = () => {
  return (
    <ChannelLayout channelName="about-me">
      {/* Everyone message from developer */}
      <Everyone
        text="Welcome to my portfolio!"
        username={developerData.username}
        avatarUrl={developerData.avatarUrl}
        timestamp="Today at 12:00 PM"
        roles={developerData.roles}
        about={developerData.about.description}
        isMainDeveloper={true}
        connectedAccounts={developerData.connectedAccounts}
      />
      
      {/* You can add more messages here */}
      <Message
        text="Feel free to explore my work experience, education, and projects through the different channels!"
        username={developerData.username}
        avatarUrl={developerData.avatarUrl}
        timestamp="Today at 12:01 PM"
        roles={developerData.roles}
        isMainDeveloper={true}
        connectedAccounts={developerData.connectedAccounts}
      />
    </ChannelLayout>
  );
};

export default Channel;