import React, { useState } from "react";
import styled from "styled-components";

import profile from "../images/profile.jpg";
import Profile from "../elements/Profile";

import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import Chat from "./Chat";


const styles = (theme) => ({
  customBadge: {
    backgroundColor: "green",
    color: "white",
    marginRright: "1em",
    zIndex: "0",
  },
});

const CurrentUser = (props) => {
  const users_length = [1, 2, 3, 4, 5, 6, 7];
  const { classes } = props;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <Users line padding="4.5em 0 0.6em 0" margin="0">
        <Title>연락처</Title>
        {users_length.map((user, idx) => (
          <User key={idx} onClick={handleOpen}>
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
              <Profile src={props.profile ? props.profile : profile} />
            </Badge>
            <Name>{props.userInfo.firstName}</Name>
          </User>
        ))}
      </Users>
      {open ? <Chat handleOpen={handleOpen} /> : null}
      <Users padding="1em 0 0em 0">
        <Title>그룹대화</Title>
        <User>
          <SupervisedUserCircleIcon
            style={{
              color: "#C4C5C9",
              fontSize: "2.5em",
              borderRadius: "50%",
            }}
          />
        </User>
        <User>
          <Button>
            <AddRoundedIcon style={{ color: "#606266", fontSize: "2.2em" }} />
          </Button>
          <Name>새 그룹 만들기</Name>
        </User>
      </Users>
    </Container>
  );
};

CurrentUser.defaultProps = {
  userInfo: {
    userEmail: "test@test.com",
    firstName: "사용자",
    profile: { profile },
  },
};

export default withStyles(styles)(CurrentUser);

const Container = styled.div`
  width: 45%;
  height: 100%;
`;

const Users = styled.ul`
  list-style-type: none;
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(2em, 1fr));
  ${(props) => (props.line ? `border-bottom: 1px solid #bec3c9;` : null)}
  ${(props) => (props.padding ? `padding: ${props.padding};` : null)}
  ${(props) => (props.margin ? `margin: ${props.margin};` : null)}
`;

const Title = styled.h2`
  text-align: left;
  font-size: 1.05em;
  color: #606266;
  margin: 0 0 0 0.5em;
  place-self: center start;
  ${(props) => (props.padding ? `padding: ${props.padding};` : null)}
`;

const User = styled.li`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  padding: 0.5em;
  border-radius: 0.5em;
  &:hover {
    background-color: #e4e6e8;
  }
`;

const Name = styled.p`
  margin: 0 0 0 0.7em;
`;

const Button = styled.button`
  border-radius: 50%;
  border: none;
  background-color: #dadde1;
  width: 2.6em;
  height: 2.6em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
