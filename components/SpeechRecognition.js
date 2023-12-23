import { useEffect, useState, useRef } from "react";

export default function SpeechRecognition() {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  let recognition = null;
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.interimResults = true;
    recognitionRef.current.continuous = true;

    recognitionRef.current.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      setTranscript(transcript);
    };
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current.stop();
      setTranscript("");
    } else {
      recognitionRef.current.start();
    }

    setIsListening((prevState) => !prevState);
  };

  return (
    <main>
      <p className="text-white">{transcript}</p>
      <button onClick={toggleListening} className="bg-white text-black">
        {isListening ? "Stop" : "Start"}
      </button>
    </main>
  );
}
