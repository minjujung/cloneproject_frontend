import React from "react";
import styled from "styled-components";

import Profile from "../elements/Profile";
import Badge from "@material-ui/core/Badge";
import profile from "../images/profile.jpg";

import {
  Videocam,
  Call,
  CloseRounded,
  RemoveRounded,
} from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  customBadge: {
    backgroundColor: "green",
    color: "white",
    marginRright: "1em",
    zIndex: "0",
  },
});

const Chat = (props) => {
  const { handleOpen } = props;
  const { classes } = props;

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
              src={props.profile ? props.profile : profile}
              width="2.1em"
              height="2.1em"
            />
          </Badge>
          <Name>
            {props.userInfo?.firstName ? props.userInfo.firstName : "사용자"}
          </Name>
          <p>현재 활동 중</p>
        </User>
        <RightBtns>
          <Videocam />
          <Call />
          <RemoveRounded />
          <CloseRounded onClick={handleOpen} />
        </RightBtns>
      </HeaderBar>
    </Container>
  );
};

export default withStyles(styles)(Chat);

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 5em;
  z-index: 100;
  width: 20.5em;
  height: 28em;
  background-color: white;
  border-radius: 7px;
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

const User = styled.li`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  /* & p {
    font-size: 1em;
  } */
`;

const Name = styled.p`
  margin: 0 0 0 0.7em;
`;

const RightBtns = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #1877f2;
`;
