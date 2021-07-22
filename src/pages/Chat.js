import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { actionCreators as chatActions } from "../redux/modules/chat";


const Chat = (props) => {
  const [chat, setChat] = useState([]);
  const [chats, setChats] = useState([]);
  const socketRef = useRef();

  React.useEffect(() => {
    chatActions.socket.connect(); // 연결
    return () => {
    chatActions.socket.disconnect(); // 종료 시 연결 헤제
    }
  },[])

  return (
      <>
      <div>
          
      </div>
      </>
  );
};

export default Chat;

