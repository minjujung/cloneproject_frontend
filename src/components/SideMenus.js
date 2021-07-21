import React from "react";
import styled from "styled-components";

import {
  BusinessCenter,
  Flag,
  Bookmark,
  Event,
  History,
  PeopleAlt,
  LocalHospital,
  ExpandMoreRounded,
  GroupWork,
  OndemandVideo,
} from "@material-ui/icons";

import profile from "../images/profile.jpg";
import Profile from "../elements/Profile";

import { useSelector } from "react-redux";

const SideMenus = (props) => {
  const userInfo = useSelector((state) => state.user);
  return (
    <Container>
      <Users line padding="4.5em 0 0.6em 0" margin="0 0 0 0.8em">
        <User>
          <Profile
            src={userInfo.profile_url ? userInfo.profile_url : profile}
          />
          <Name bold>{userInfo.user_name}</Name>
        </User>
        <User>
          <LocalHospital style={{ color: "purple", fontSize: "2.2em" }} />
          <Name>코로나 정보 센터</Name>
        </User>
        <User>
          <PeopleAlt style={{ color: "#1a7ef3", fontSize: "2.2em" }} />
          <Name>친구</Name>
        </User>
        <User>
          <GroupWork style={{ color: "#24aefd", fontSize: "2.2em" }} />
          <Name>그룹</Name>
        </User>
        <User>
          <OndemandVideo style={{ color: "#3ec6c4", fontSize: "2.2em" }} />
          <Name>Watch</Name>
        </User>
        <User>
          <Event style={{ color: "#e82c4c", fontSize: "2.2em" }} />
          <Name>이벤트</Name>
        </User>
        <User>
          <History style={{ color: "#176bd3", fontSize: "2.2em" }} />
          <Name>과거의 오늘</Name>
        </User>
        <User>
          <Bookmark style={{ color: "#b534b8", fontSize: "2.2em" }} />
          <Name>저장됨</Name>
        </User>
        <User>
          <Flag style={{ color: "#eb592a", fontSize: "2.2em" }} />
          <Name>페이지</Name>
        </User>
        <User>
          <BusinessCenter style={{ color: "#c16b00", fontSize: "2.2em" }} />
          <Name>채용 정보</Name>
        </User>
        <User>
          <Button>
            <ExpandMoreRounded
              style={{ color: "#25272a", fontSize: "1.5em" }}
            />
          </Button>
          <Name>더보기</Name>
        </User>
      </Users>
      <Users padding="1em 0 0em 0" margin="0 0 0 0.8em">
        <Title>내 바로가기</Title>
        <User>
          <GroupWork style={{ color: "grey", fontSize: "2.2em" }} />
          <Name>그룹</Name>
        </User>
      </Users>
    </Container>
  );
};

SideMenus.defaultProps = {
  userInfo: {
    userEmail: "test@test.com",
    firstName: "사용자",
    profile: { profile },
  },
};

export default SideMenus;

const Container = styled.div`
  width: 45%;
  height: 100%;
`;

const Users = styled.ul`
  list-style-type: none;
  width: 100%;
  display: grid;
  box-sizing: border-box;
  grid-template-rows: repeat(auto-fill, minmax(2em, 1fr));
  height: 100%;
  ${(props) => (props.line ? `border-bottom: 1px solid #bec3c9;` : null)}
  ${(props) => (props.padding ? `padding: ${props.padding};` : null)}
  ${(props) => (props.margin ? `margin: ${props.margin};` : null)}
`;

const User = styled.li`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  padding: 0.5em;
  border-radius: 0.5em;
  &:hover {
    background-color: #e4e6e8;
  }
`;

const Name = styled.p`
  margin: 0 0 0 0.7em;
  ${(props) => (props.bold ? "font-weight: 600" : null)}
`;

const Button = styled.button`
  border-radius: 50%;
  border: none;
  background-color: #dadde1;
  width: 2.6em;
  height: 2.6em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  text-align: left;
  font-size: 1.05em;
  color: #606266;
  margin: 0 0 0 0.5em;
  place-self: center start;
  ${(props) => (props.padding ? `padding: ${props.padding};` : null)}
`;
