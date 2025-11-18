import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessage = useSelector((store) => store.chat.message);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      // API POLLING
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(25) + "🧑‍💻",
        })
      );
    }, 2000);

    return () => clearInterval(intervalTimer);
  }, []);

  return (
    <>
      <div className="h-[450px] ml-2 p-2 bg-slate-100 rounded-lg w-full border border-black overflow-y-scroll flex flex-col-reverse">
        {chatMessage.map((msg, i) => (
          <ChatMessage key={i} name={msg.name} message={msg.message} />
        ))}
      </div>
      <div className="w-full p-2 ml-2 border border-black">
        <form
          onSubmit={(e) => {
            dispatch(
              addMessage({
                name: "YOU",
                message: liveMessage,
              })
            );
            e.preventDefault();
            console.log(liveMessage);
          }}
        >
          <input
            className="w-90 p-2"
            type="text"
            value={liveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button className="px-2 mx-2 py-2 bg-green-100">Send</button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
