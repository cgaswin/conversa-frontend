import React,{useState,useEffect} from 'react'

const ChatBoxLeft = (props) => {
  const [utterance, setUtterance] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(props.text);

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [props.text]);

  useEffect(() => {
    if (utterance) {
      const synth = window.speechSynthesis;
      synth.speak(utterance);
    }
  }, [utterance]);

  return (
    <div className='bg-black  text-white w-fit py-2 rounded-r-2xl rounded-bl-2xl  ml-10 mt-10 px-10'>{props.text}</div>
  )
}

export default ChatBoxLeft