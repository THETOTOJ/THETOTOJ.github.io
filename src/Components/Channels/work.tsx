import React from "react";
import Message from "../Messages";
import ChannelLayout from "../Layout/ChannelLayout";
import { WorkData } from "../../Data/work";

const Work = () => {
  return (
    <ChannelLayout channelName="Work Experience">
      {WorkData.map((work, index) => (
        <Message
          key={index}
          text={work.designation}
          username={work.company}
          avatarUrl={work.companyLogo}
          timestamp={work.date}
          roles={work.roles}
          about={work.about}
          connectedAccounts={work.connectedAccounts}
        />
      ))}
    </ChannelLayout>
  );
};

export default Work;