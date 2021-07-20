import React from "react";
import styled from "styled-components";
import CurrentUser from "../components/CurrentUser";
import Header from "../components/Header";
import PostList from "../components/PostList";
import SideMenus from "../components/SideMenus";

const Main = (props) => {
  const is_token = document.cookie;
  console.log(is_token==="MY_COOKIE=")
  const goLogin = () => {
    window.location.href = '/login';
  }
  return (
    <div>{is_token==="MY_COOKIE="?
    <div>로그인 후 이용해주세요!<button onClick={goLogin}>로그인</button></div>
    :
    <Container>
    <Header />
    <Sections>
      <SideMenus />
      <PostList />
      <CurrentUser />
    </Sections>
  </Container>
    }</div>

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
