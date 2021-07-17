import React from "react";
import styled from "styled-components";

import profile from "../images/profile.jpg";
import Profile from "../elements/Profile";

import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  customBadge: {
    backgroundColor: "green",
    color: "white",
    marginRright: "1em",
  },
});

const CurrentUser = (props) => {
  const users_length = [1, 2, 3, 4, 5, 6, 7];

  const { classes } = props;

  return (
    <Container>
      <Users>
        <Title>연락처</Title>
        {users_length.map((user, idx) => (
          <User>
            <Badge
              key={idx}
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
  width: 100%;
  height: 100%;
`;

const Users = styled.div`
  width: 100%;
  display: grid;
  gap: 0.9em;
  grid-template-rows: repeat(auto-fill, minmax(2em, 1fr));
  flex-direction: column;
  padding-top: 4.5em;
  padding-bottom: 0.9em;
  height: 100%;
  border-bottom: 1px solid #bec3c9;
`;

const Title = styled.h2`
  text-align: left;
  font-size: 1.05em;
  color: #606266;
  margin: 0;
  place-self: end start;
`;
const User = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
`;

const Name = styled.p`
  margin: 0 0 0 0.7em;
`;

const Line = styled.hr`
  color: #cccccc;
  width: 90%;
  border: 1px solid #cccccc;
`;
