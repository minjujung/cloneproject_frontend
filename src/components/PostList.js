import React from "react";
import styled from "styled-components";

import IntroPost from "./IntroPost";

import { useSelector } from "react-redux";
import Post from "./Post";

const PostList = (props) => {
  const list = useSelector((state) => state.post.list);

  return (
    <Container>
      <IntroPost />
      {list.map((l) => (
        <Post key={l.postId} {...l} />
      ))}
    </Container>
  );
};

PostList.defaultProps = {
  userInfo: {
    userEmail: "test@test.com",
    firstName: "사용자",
    profile: null,
  },
};

export default PostList;

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4.5em;
`;
