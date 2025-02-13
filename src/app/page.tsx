"use client";
import { motion } from "framer-motion";
import "./globals.css";

export default function Home() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.75 } }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="container"
    >
      <motion.h3
        whileHover={{
          scale: 0.9,
          transition: { duration: 0.8 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        Hello World
      </motion.h3>
    </motion.div>
  );
}
