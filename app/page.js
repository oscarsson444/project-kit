"use client";
import { DigitalClock } from "@/components/DigitalClock";
import Quote from "@/components/Quote";
import SpeechRecognition from "@/components/SpeechRecognition";

export default function Home() {
  return (
    <main>
      <div>
        <DigitalClock />
        <Quote />
        <SpeechRecognition />
      </div>
    </main>
  );
}
