import React from "react";
import styled from "styled-components";

import { ClearRounded } from "@material-ui/icons";

import profile from "../images/profile.jpg";
import Profile from "../elements/Profile";
import Grid from "../elements/Grid";

const CreatePost = (props) => {
  return (
    <Container>
      <Title>게시물 만들기</Title>
      <Button>
        <ClearRounded
          style={{ color: "#606266", fontSize: "2.2em" }}
          onClick={props.handleClose}
        />
      </Button>
      <Grid is_flex padding="1em">
        <Profile src={profile} alt="profile" />
        <Name>{props.userInfo.firstName}</Name>
      </Grid>
    </Container>
  );
};

CreatePost.defaultProps = {
  userInfo: {
    userEmail: "test@test.com",
    firstName: "사용자",
    profile: null,
  },
};

export default CreatePost;

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.3em;
  border-bottom: 1px solid #c4c5c9;
  box-sizing: border-box;
  padding: 1em 0;
  margin: 0;
`;

const Name = styled.p`
  margin: 0;
  text-align: left;
  font-weight: 600;
  margin-left: 0.5em;
`;

const Button = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
  border-radius: 50%;
  border: none;
  background-color: #dadde1;
  width: 2.6em;
  height: 2.6em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
