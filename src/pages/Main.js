import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import PostList from "../components/PostList";

const Main = (props) => {
  return (
    <Container>
      <Header />
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
