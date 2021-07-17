import React from "react";
import styled from "styled-components";
import CurrentUser from "../components/CurrentUser";
import Header from "../components/Header";
import PostList from "../components/PostList";

const Main = (props) => {
  return (
    <Container>
      <Header />
      <Sections>
        <PostList />
        <CurrentUser />
      </Sections>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #f0f2f5;
`;

const Sections = styled.div`
  width: 100%;
  display: flex;
`;
