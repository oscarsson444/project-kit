import { useState, useEffect } from 'react';
import {quotes} from '@/public/data/quotes';

function getRandomQuoteObj(obj) {
    const keys = Object.keys(obj);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const randomValue = obj[randomKey];
    return randomValue;
  }

export default function Quote () {
    const [quote, setQuote] = useState();

    useEffect(() => {
        setQuote(getRandomQuoteObj(quotes));
      }, []);

    const handleTextToSpeech = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(quote?.quote);
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.lang = "en-US";
    synth.speak(utterance);
    }

    return (
        <main>
        <p className="text-white">{quote?.quote}</p>
        <button onClick={handleTextToSpeech} className="bg-white text-black">Play</button>
      </main>
    )

};