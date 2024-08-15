import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0,transition:{duration:0.5} }}
    >
      this is about page
    </motion.div>
  );
}
