import React, { useEffect } from "react";
import styled from "styled-components";

import IntroPost from "./IntroPost";

import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";

const PostList = (props) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.post.list);

  useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  return (
    <Container>
      <IntroPost />
      {list?.map((l) => (
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
