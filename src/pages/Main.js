import React from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import Header from "../components/Header";
import PostList from "../components/PostList";

const Main = (props) => {
  return (
    <Container>
      <Header />
      {/* <Modal width="40%" height="60%">
        <h1>hello</h1>
        <input type="text" />
      </Modal> */}
      <PostList />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
`;
