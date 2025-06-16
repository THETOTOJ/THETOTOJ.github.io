import React from "react";
import { motion } from "framer-motion";
import Message from "../Messages";
import ChannelLayout from "../Layout/ChannelLayout";
import { WorkData } from "../../Data/work";

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
    transition: { duration: 0.4 },
  },
};

const Work = () => {
  return (
    <ChannelLayout channelName="Work Experience">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full overflow-x-clip"
      >
        {WorkData.map((work, index) => (
          <motion.div key={index} variants={messageVariants}>
            <Message
              text={work.designation}
              username={work.company}
              avatarUrl={work.companyLogo}
              timestamp={work.date}
              roles={work.roles}
              about={work.about}
              connectedAccounts={work.connectedAccounts}
            />
          </motion.div>
        ))}
      </motion.div>
    </ChannelLayout>
  );
};

export default Work;
