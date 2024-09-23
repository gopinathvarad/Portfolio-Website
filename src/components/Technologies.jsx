// src/Technologies.js
import { RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si"; // Next.js icon
import { SiMongodb } from "react-icons/si"; // MongoDB icon
import { SiExpress } from "react-icons/si"; // Express icon
import { SiMysql } from "react-icons/si"; // SQL icon
import { SiJavascript } from "react-icons/si"; // JavaScript icon
import { SiPython } from "react-icons/si"; // Python icon
import { SiFirebase } from "react-icons/si"; // Firebase icon
import { FaNodeJs } from "react-icons/fa"; // Node.js icon
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl "
      >
        Skills
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-black shadow-lg transition-transform transform hover:scale-105"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-black shadow-lg transition-transform transform hover:scale-105"
        >
          <SiNextdotjs className="text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-black shadow-lg transition-transform transform hover:scale-105"
        >
          <FaNodeJs className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-green-600 shadow-lg transition-transform transform hover:scale-105"
        >
          <SiMongodb className="text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-gray-900 shadow-lg transition-transform transform hover:scale-105"
        >
          <SiExpress className="text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-blue-800 shadow-lg transition-transform transform hover:scale-105"
        >
          <SiMysql className="text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-yellow-500 shadow-lg transition-transform transform hover:scale-105"
        >
          <SiJavascript className="text-7xl text-black" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-yellow-300 shadow-lg transition-transform transform hover:scale-105"
        >
          <SiPython className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-red-500 shadow-lg transition-transform transform hover:scale-105"
        >
          <SiFirebase className="text-7xl text-yellow-300" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
