import React from "react";
import { motion } from "framer-motion";
import Message from "../Messages";
import ChannelLayout from "../Layout/ChannelLayout";
import { developerData } from "../../Data/developer";

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

const Contact = () => {
  return (
    <ChannelLayout channelName="Contact">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full overflow-x-clip"
      >
        <motion.div variants={messageVariants}>
          <Message
            text={`
              <span>
                👋 Salut, c'est <strong>${developerData.name}</strong>! Si vous voulez me joindre veuillez utiliser les coordonnées ci-dessous<br/>
                                ✉️ <strong>Email:</strong> <a href="mailto:${developerData.contact.email}" class="underline text-blue-500">${developerData.contact.email}</a><br/>
                📞 <strong>Numéro:</strong> <a href="tel:${developerData.contact.phone}" class="underline text-blue-500">${developerData.contact.phone}</a><br/>
                🏠 <strong>Addresse:</strong> ${developerData.city}<br/>
                💼 <strong>LinkedIn:</strong>
                <a
                  href="${developerData.contact.linkedin}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline text-blue-500"
                >
                  ${developerData.contact.linkedin.replace("https://", "")}
                </a><br/>
                👨‍💻<strong>GitHub:</strong>
                <a
                  href="${developerData.contact.github}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline text-blue-500"
                >
                  ${developerData.contact.github.replace("https://", "")}
                </a>
              </span>
            `}
            username={developerData.name}
            avatarUrl={`${developerData.avatarUrl}`}
            timestamp="Now"
          />
        </motion.div>
      </motion.div>
    </ChannelLayout>
  );
};

export default Contact;