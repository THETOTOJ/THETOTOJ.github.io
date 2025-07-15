import React from "react";
import { motion } from "framer-motion";
import ChannelLayout from "../Layout/ChannelLayout";
import { SkillsData } from "../../Data/skills";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

const Skills = () => {
  return (
    <ChannelLayout channelName="Skills & Technologies">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full flex flex-col gap-8 pt-8"
      >
        <h2 className="text-2xl font-bold text-white mb-2 px-4">My technical skills and expertise</h2>
        {SkillsData.map((category, idx) => (
          <motion.div key={category.type} variants={categoryVariants}>
            <h3 className="text-lg font-semibold text-indigo-300 px-4 mb-2">{category.type}</h3>
            <div className="flex flex-wrap gap-6 px-4">
              {category.list.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  className="flex flex-col items-center bg-[#23272A] rounded-lg p-4 shadow-lg min-w-[100px]"
                >
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                  <span className="text-white text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ChannelLayout>
  );
};

export default Skills;