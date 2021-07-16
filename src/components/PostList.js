import React from "react";
import styled from "styled-components";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import VideoCallRoundedIcon from "@material-ui/icons/VideoCallRounded";
import PhotoLibraryRoundedIcon from "@material-ui/icons/PhotoLibraryRounded";
import MoodRoundedIcon from "@material-ui/icons/MoodRounded";

import Post from "./Post";
import Grid from "../elements/Grid";
import Input from "../elements/Input";

const PostList = (props) => {
  return (
    <Container>
      <Post>
        <Grid is_flex padding="1em">
          <Button>
            <AddRoundedIcon style={{ color: "#1877F2", fontSize: "30px" }} />
          </Button>
          <Contents>
            <Title>스토리 만들기</Title>
            <SubTitle>사진을 공유하거나 글을 남겨보세요</SubTitle>
          </Contents>
        </Grid>
      </Post>
      <Post>
        <Grid padding="1em">
          <Grid is_flex>
            {props.userInfo.profile ? (
              <img src={props.profile} alt="profile" />
            ) : (
              <AccountCircleRoundedIcon
                style={{
                  fontSize: "2.6em",
                  marginRight: "5px",
                }}
              />
            )}
            <PostButton>
              {props.userInfo.firstName}님, 무슨 생각을 하고 계신가요?
            </PostButton>
            <Grid />
          </Grid>
          <hr
            style={{
              color: "#f0f2f5",
              width: "100%",
              border: "1px solid #f0f2f5",
            }}
          />
          <BtnContainer>
            <MenuButton>
              <VideoCallRoundedIcon style={{ color: "red", fontSize: "2em" }} />{" "}
              라이브 방송
            </MenuButton>
            <MenuButton>
              <PhotoLibraryRoundedIcon
                style={{ color: "#00a400", fontSize: "1.8em" }}
              />{" "}
              사진/동영상
            </MenuButton>
            <MenuButton>
              <MoodRoundedIcon
                style={{ color: "#f1c40f", fontSize: "1.8em" }}
              />{" "}
              기분/활동
            </MenuButton>
          </BtnContainer>
        </Grid>
      </Post>
      <Post>
        <Grid is_flex padding="1em">
          <Input placeholder="댓글을 입력하세요..." />
        </Grid>
      </Post>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4.5em;
`;

const Button = styled.button`
  border-radius: 50%;
  border: none;
  background-color: #e7f3ff;
  width: 3em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  margin-left: 1em;
`;

const Title = styled.h3`
  text-align: left;
  margin: 0 0 5px 0;
`;

const SubTitle = styled.p`
  margin: 0;
`;

const PostButton = styled.button`
  border: none;
  width: 100%;
  font-size: 16px;
  padding: 0.6em;
  border-radius: 30px;
  background-color: #f0f2f5;
  color: #606266;
  text-align: left;
  &:hover {
    background-color: #e4e6e8;
  }
`;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const MenuButton = styled.button`
  width: 100%;
  height: 2.7em;
  font-size: 16px;
  font-weight: bold;
  color: #606266;
  border: none;
  border-radius: 9px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  &:hover {
    background-color: #f0f2f5;
  }
`;
