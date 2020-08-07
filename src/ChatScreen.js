import React, { useState } from "react";
import "./ChartScreen.css";
import { Avatar } from "@material-ui/core";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Steve",
      image: "...",
      message: "What up",
    },
    {
      name: "Steve",
      image: "...",
      message: "How is it going",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <h2>Chat Screen</h2>
      <p>You matched with Ellen on 10.08.20</p>

      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Escribe un mensaje"
          className="chatScreen__inputField"
        />
        <button
          type="submit"
          onClick={handleSend}
          className="chatScreen__inputButton"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
