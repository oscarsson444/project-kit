"use client";
import { DigitalClock } from "@/components/DigitalClock";
import Quote from "@/components/Quote";
import SpeechRecognition from "@/components/SpeechRecognition";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <DigitalClock />
        <Quote />
        <SpeechRecognition />
      </motion.div>
    </main>
  );
}
