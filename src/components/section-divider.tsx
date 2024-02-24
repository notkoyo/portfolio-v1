"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.125 }} className="my-24 hidden h-16 w-1 rounded-full bg-gray-200 sm:block"></motion.div>
  );
}
