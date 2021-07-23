import React, { useEffect } from "react";
import styled from "styled-components";

import IntroPost from "./IntroPost";

import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import Spinner from "../elements/Spinner";

import ModalVedio from "../components/ModalVideo";

const PostList = (props) => {
  const list = useSelector((state) => state.post.list);
  const is_loading = useSelector((state) => state.post.is_loading);

  return (
    <Container>
      {is_loading ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <ModalVedio />
          <IntroPost />
          {list?.map((l) => (
            <Post key={l._id} {...l} />
          ))}
        </>
      )}
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
