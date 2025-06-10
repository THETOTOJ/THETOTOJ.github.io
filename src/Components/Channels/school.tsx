import React from "react";
import Message from "../Messages";
import ChannelLayout from "../Layout/ChannelLayout";
import { SchoolData } from "../../Data/school";

const School = () => {
  return (
    <ChannelLayout channelName="Education">
      {SchoolData.map((school, index) => (
        <Message
          key={index}
          text={school.title}
          username={school.name}
          avatarUrl={school.companyLogo}
          timestamp={school.date}
          roles={school.roles}
          about={school.about}
          connectedAccounts={school.connectedAccounts}
        />
      ))}
    </ChannelLayout>
  );
};

export default School;