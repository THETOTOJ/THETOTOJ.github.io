import React from "react";
import { motion } from "framer-motion";
import Message from "../Messages";
import ChannelLayout from "../Layout/ChannelLayout";
import { SchoolData } from "../../Data/school";

// Animation variants for container and message
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const messageVariants = {
  hidden: { opacity: 0, x: 50 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.4 } 
  },
};

const School = () => {
  return (
    <ChannelLayout channelName="Education">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full overflow-x-clip"
      >
        {SchoolData.map((school, index) => (
          <motion.div key={index} variants={messageVariants}>
            <Message
              text={school.title}
              username={school.name}
              avatarUrl={school.companyLogo}
              timestamp={school.date}
              roles={school.roles}
              about={school.about}
              connectedAccounts={school.connectedAccounts}
            />
          </motion.div>
        ))}
      </motion.div>
    </ChannelLayout>
  );
};

export default School;
