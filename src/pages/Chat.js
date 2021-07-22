import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";


const Chat = (props) => {
  const [chat, setChat] = useState([]);
  const [chats, setChats] = useState([]);
  const socketRef = useRef();

const sendChat = () => {
  socketRef.current.emit("chat message", chat);
}

  useEffect(() => {
    socketRef.current = io.connect("http://13.124.107.195:3000");
    socketRef.current.on("chat message", (chat) =>{
      console.log(chat)
      setChats([...chat, {chat}])
      console.log(chats)
    })
    return () => socketRef.current.disconnect();
    
  },[])

  return (
      <>
      <div>
          <input value={chat} onChange={(e) => setChat(e.target.value)}/>
          <button onClick={sendChat}>버튼</button>
      </div>
      </>
  );
};

export default Chat;

