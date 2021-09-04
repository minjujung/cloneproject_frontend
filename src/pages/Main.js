import React, { useRef, useState } from "react";
import styled from "styled-components";
import CurrentUser from "../components/CurrentUser";
import Header from "../components/Header";
import PostList from "../components/PostList";
import SideMenus from "../components/SideMenus";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as UserActions } from "../redux/modules/user";

const Main = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(UserActions.loginCheckDB());
  }, []);

  const is_token = document.cookie.split("=")[1];

  // if (is_token===undefined) {
  //   history.replace("/login");
  // }
  return (
    <Container>
      <Header />
      <Sections>
        <SideMenus />
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
