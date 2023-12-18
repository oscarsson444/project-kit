"use client";
import { useEffect, useState } from "react";
import { quotes } from "../public/data/quotes"

function getRandomQuoteObj(obj) {
  const keys = Object.keys(obj);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const randomValue = obj[randomKey];
  return randomValue;
}

export default function Home() {
  const [quote, setQuote] = useState();
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  let recognition = null;

  useEffect(() => {
    setQuote(getRandomQuoteObj(quotes));
  }, []);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
      setTranscript(transcript);
    };

    if (isListening) {
      recognition.start();
    } else {
      if (recognition) recognition.stop();
      setTranscript("");
    }
  }, [isListening]);

  const toggleListening = () => {
    setIsListening(prevState => !prevState);
  };

  const handleTextToSpeech = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(transcript);
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.lang = "en-US";
    synth.speak(utterance);
  }

  return (
    <main>
      <p className="text-white">{quote?.quote}</p>
      <p className="text-white">{transcript}</p>
      <button onClick={handleTextToSpeech} className="bg-white text-black">Play</button>
      <br />
      <button onClick={toggleListening} className="bg-white text-black">{isListening ? "Stop" : "Start"}</button>
    </main>
  )
}
