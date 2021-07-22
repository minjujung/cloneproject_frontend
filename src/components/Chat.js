import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import io from "socket.io-client";

import Profile from "../elements/Profile";
import Input from "../elements/Input";
import Badge from "@material-ui/core/Badge";
import profile from "../images/profile.jpg";

import {
  Videocam,
  Call,
  CloseRounded,
  RemoveRounded,
  AddCircleRounded,
  PhotoLibraryRounded,
  InsertDriveFileRounded,
  GifRounded,
  EmojiEmotionsRounded,
  ThumbUpAltRounded,
  SendRounded,
} from "@material-ui/icons";

import { withStyles } from "@material-ui/core/styles";

import { useSelector } from "react-redux";

// let socket;
// const CONNECTION_PORT = "";

const styles = (theme) => ({
  customBadge: {
    backgroundColor: "green",
    color: "white",
    marginRright: "1em",
    zIndex: "0",
  },
});

const Chat = (props) => {
  const userInfo = useSelector((state) => state.user);
  const { classes } = props;

  const [chat, setChat] = useState();
  const [chats, setChats] = useState([]);
  const socketRef = useRef();
  const scrollRef = useRef();
  
  const scrollToBottom = () => {
  const {scrollHeight, clientHeight} = scrollRef.current;
  console.log(scrollHeight, clientHeight)
  scrollRef.current.scrollTop = scrollHeight - clientHeight;
}
  const name = userInfo.firstName + userInfo.lastName;

  console.log(userInfo)
  const sendChat = () => {
    socketRef.current.emit("chat message", { chat, name });
    setChat(" ");
  };

  const enterChat = (e) => {
    if (e.key === "Enter") {
      sendChat();
    }
  };

  React.useEffect(() => {
    socketRef.current = io.connect("http://13.124.107.195:3000");
    socketRef.current.emit("user", {userInfo})
    socketRef.current.on("user", (data) => {
      console.log(data);
    });
  },[]);

  useEffect(() => {
    socketRef.current = io.connect("http://13.124.107.195:3000");
    socketRef.current.on("chat message", (chat) => {
      setChats([...chats, chat]);
      scrollToBottom();
    });

    return () => socketRef.current.disconnect();
  }, [chats]);

  return (
    <Container>
      <HeaderBar>
        <User>
          <Badge
            overlap="circular"
            badgeContent=" "
            variant="dot"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            classes={{ badge: classes.customBadge }}
          >
            <Profile
              src={userInfo.profile_url ? userInfo.profile_url : profile}
              width="2.1em"
              height="2.1em"
            />
          </Badge>
          <UserInfo>
            <Name>{userInfo.firstName + userInfo.lastName}</Name>
            <Status>현재 활동 중</Status>
          </UserInfo>
        </User>
        <RightBtns>
          <Videocam />
          <Call />
          <RemoveRounded />
          <CloseRounded onClick={props.connectToRoom} />
        </RightBtns>
      </HeaderBar>
      <Messages ref={scrollRef}>
        {chats.map((chat, idx) => (
          <MsgLine key={idx}>
            {chat.name} :{" "}
            <MsgText nameCheck={name === chat.name ? true : false}>
              {chat.chat}
            </MsgText>
          </MsgLine>
        ))}
      </Messages>
      <BottomMenu>
        <AddCircleRounded />
        {chat ? null : (
          <>
            {" "}
            <PhotoLibraryRounded />
            <InsertDriveFileRounded />
            <GifRounded
              style={{
                backgroundColor: "#1877f2",
                color: "white",
                borderRadius: "0.3em",
              }}
            />
          </>
        )}

        <InputField>
          <Input
            width={chat ? "15em" : "9em"}
            placeholder="Aa"
            value={chat}
            _onChange={(e) => {
              setChat(e.target.value);
            }}
            _onKeyPress={enterChat}
          />{" "}
          <EmojiEmotionsRounded style={emojiStyle} />
        </InputField>
        {chat ? <SendRounded onClick={sendChat} /> : <ThumbUpAltRounded />}
      </BottomMenu>
    </Container>
  );
};

export default withStyles(styles)(Chat);

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 5em;
  z-index: 100;
  width: 20.3em;
  height: 28em;
  background-color: white;
  border-radius: 7px 7px 0 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

const HeaderBar = styled.div`
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  padding: 0.5em;
  box-sizing: border-box;
`;

const User = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  box-sizing: border-box;
`;

const UserInfo = styled.div`
  margin-left: 0.5em;
`;

const Name = styled.p`
  margin: 0 0 0.2em 0;
  text-align: left;
`;

const Status = styled.p`
  margin: 0;
  font-size: 0.8em;
  word-spacing: -0.3em;
`;

const RightBtns = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #1877f2;
`;

const BottomMenu = styled.div`
  height: 3.5em;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0.3em;
  color: #1877f2;
`;

const InputField = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const emojiStyle = {
  position: "absolute",
  right: "0.3em",
};

const Messages = styled.div`
  height: 20.5em;
  width: 100%;
  overflow-y: auto;
  padding: 0.5em;
  box-sizing: border-box;
`;

const MsgLine = styled.p`
  margin: 2em 0;
  word-break: break-all;
`;

const MsgText = styled.span`
  height: 30em;
  background-color: ${(props) => (props.nameCheck ? "#0084ff" : "#e4e6eb")};
  color: ${(props) => (props.nameCheck ? "white" : "black")};
  padding: 0.7em;
  border-radius: 0.8em;
  box-sizing: border-box;
`;
