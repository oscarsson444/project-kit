import { useEffect, useState } from "react";

export default function SpeechRecognition() {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  let recognition = null;

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
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
