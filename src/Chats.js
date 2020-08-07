import React from "react";

import Chat from "./Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Steve Jobs"
        message="Yo what's up"
        timestamp="40 seconds ago"
        profilePic=".."
      />
      <Chat
        name="Jeff Bezos"
        message="Yo what's up"
        timestamp="3 days ago"
        profilePic=".."
      />
      <Chat
        name="Elon Musk"
        message="HOLA!"
        timestamp="1 week ago"
        profilePic=".."
      />
    </div>
  );
};

export default Chats;
