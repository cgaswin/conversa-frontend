import React,{useState,useEffect} from 'react'

const ChatBoxLeft = ({text}) => {
  const [utterance, setUtterance] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);

  useEffect(() => {
    if (utterance) {
      const synth = window.speechSynthesis;
      synth.speak(utterance);
    }
  }, [utterance]);

  return (
    <div className='bg-black flex  left-0 mt-10  text-white w-fit py-2 rounded-r-2xl rounded-bl-2xl    px-10'>{text}</div>
  )
}

export default ChatBoxLeft