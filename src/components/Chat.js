import React, { useEffect, useState } from "react";
import styled from "styled-components";

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

import io from "socket.io-client";
let socket;
const CONNECTION_PORT = "";

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

  const [width, setWidth] = useState();

  //after login
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([
    { writer: "minju", message: "hello" },
  ]);

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, []);

  const chatting = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    let msgContent = {
      writer: userInfo.firstName + userInfo.lastName,
      message,
    };
    socket.emit("chat message", msgContent);
    setMessageList([...messageList, msgContent.writer, msgContent.message]);
    setMessage("");
  };

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
          <CloseRounded />
        </RightBtns>
      </HeaderBar>
      <Messages>
        {messageList.map((val, key) => {
          return (
            <h1>
              {val.writer} {val.message}
            </h1>
          );
        })}
      </Messages>
      <BottomMenu>
        <AddCircleRounded />
        {message ? (
          <>
            <InputField>
              <Input
                width="15em"
                placeholder="Aa"
                value={message}
                _onChange={chatting}
              />{" "}
              <EmojiEmotionsRounded style={emojiStyle} />
            </InputField>
            <SendRounded onClick={sendMessage} />
          </>
        ) : (
          <>
            <PhotoLibraryRounded />
            <InsertDriveFileRounded />
            <GifRounded
              style={{
                backgroundColor: "#1877f2",
                color: "white",
                borderRadius: "0.3em",
              }}
            />
            <InputField>
              <Input
                width="9em"
                placeholder="Aa"
                value={message}
                _onChange={chatting}
              />
              <EmojiEmotionsRounded style={emojiStyle} />
            </InputField>
            <ThumbUpAltRounded />
          </>
        )}
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
  transition: all 3s linear;
`;

const InputField = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.5s;
`;

const emojiStyle = {
  position: "absolute",
  right: "0.3em",
};

const Messages = styled.div``;
