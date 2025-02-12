"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.75 } }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="w-full flex justify-center items-center"
    >
      <motion.h3
        whileHover={{
          scale: 0.9,
          transition: { duration: 0.8 },
        }}
        whileTap={{ scale: 0.9 }}
        className="md:text-lg text-sm cursor-pointer font-medium md:font-bold"
      >
        Hello World
      </motion.h3>
    </motion.div>
  );
}
