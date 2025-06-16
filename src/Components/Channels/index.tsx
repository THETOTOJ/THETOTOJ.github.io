import { motion } from 'framer-motion';
import Message from "../Messages";
import ChannelLayout from "../Layout/ChannelLayout";
import { developerData } from "../../Data/developer";
import Everyone from "../Messages/everyone";

// Animation variants
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
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const Channel = () => {
  return (
    <ChannelLayout channelName="about-me">
      {/* Prevent scrollbars and apply stagger animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full overflow-x-clip"
      >
        <motion.div variants={messageVariants}>
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
        </motion.div>

        <motion.div variants={messageVariants}>
          <Message
            text="Feel free to explore my work experience, education, and projects through the different channels!"
            username={developerData.username}
            avatarUrl={developerData.avatarUrl}
            timestamp="Today at 12:01 PM"
            roles={developerData.roles}
            isMainDeveloper={true}
            connectedAccounts={developerData.connectedAccounts}
          />
        </motion.div>
      </motion.div>
    </ChannelLayout>
  );
};

export default Channel;
