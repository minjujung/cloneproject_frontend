import React from "react";
import styled from "styled-components";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";

import Post from "./Post";
import Grid from "../elements/Grid";
import Input from "../elements/Input";
import profile from "../images/profile.jpg";
import like from "../images/like.png";
import { data } from "../data";
import IntroPost from "./IntroPost";
import Profile from "../elements/Profile";

const PostList = (props) => {
  return (
    <Container>
      <IntroPost />
      {data.map((d) => (
        <Post key={d.postId}>
          <Grid padding="1em 1em 0 1em">
            <p style={{ margin: "0", textAlign: "left" }}>
              땡땡님이 댓글을 남겼습니다.
            </p>
            <Line />
          </Grid>
          <Grid padding="0 1em" is_flex>
            <Profile
              src={props.profile ? props.profile : profile}
              margin="0 0.5em 0 0"
            />
            <Grid>
              <Name>{d.userInfo.firstName}</Name>
              <Date>{d.content.createdAt}</Date>
            </Grid>
          </Grid>
          <Grid padding="0 1em">
            <Text>{d.content.text}</Text>
          </Grid>
          <img
            src={d.content.picture[0]}
            style={{ width: "100%", height: "100%" }}
            alt="article"
          />
          <Grid is_flex space_between padding="0 1em">
            <LikeBtn>
              <img
                src={like}
                alt="like"
                style={{ width: "2em", height: "2em" }}
              />{" "}
              {d.like.likeCnt}
            </LikeBtn>
            <CommentCnt>댓글 {d.comment.length}개</CommentCnt>
          </Grid>
          <Grid padding="0 1em">
            <Line />
            <Grid is_flex>
              <BtnContainer>
                <MenuButton>
                  <ThumbUpAltOutlinedIcon
                    style={{ fontSize: "1.5em", marginRight: "0.5em" }}
                  />{" "}
                  좋아요
                </MenuButton>
                <MenuButton>
                  <ChatBubbleOutlineRoundedIcon
                    style={{ fontSize: "1.5em", marginRight: "0.5em" }}
                  />{" "}
                  댓글 달기
                </MenuButton>
                <MenuButton>
                  <ShareRoundedIcon
                    style={{ fontSize: "1.5em", marginRight: "0.5em" }}
                  />{" "}
                  공유하기
                </MenuButton>
              </BtnContainer>
            </Grid>
            <Line />
          </Grid>
          <Grid is_flex padding="1em">
            <Profile
              src={props.profile ? props.profile : profile}
              margin="0 0.5em 0 0"
            />
            <Input placeholder="댓글을 입력하세요..." />
          </Grid>
          {d.comment.map((c) => (
            <Grid is_flex padding="1em" key={c.commentId}>
              <Profile
                src={props.profile ? props.profile : profile}
                margin="0 0.5em 0 0"
                alignSelf="flex-start"
              />
              <Grid>
                <CommentBox>
                  <Commenter>{c.writerInfo.name}</Commenter>
                  <Comment>{c.commentText}</Comment>
                </CommentBox>
                <Time>{c.commentCreatedAt}</Time>
              </Grid>
            </Grid>
          ))}
        </Post>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4.5em;
`;

const Name = styled.p`
  margin: 0;
  text-align: left;
  font-weight: 600;
  margin-bottom: 0.3em;
`;

const Date = styled.p`
  margin: 0;
  font-size: 13px;
`;

const Text = styled.p`
  margin: 0.5em 0;
  text-align: left;
`;

const LikeBtn = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const CommentCnt = styled.span`
  font-size: 0.9em;
`;

const Line = styled.hr`
  color: #f0f2f5;
  width: 100%;
  border: 1px solid #f0f2f5;
`;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const MenuButton = styled.button`
  width: 100%;
  height: 2.2em;
  font-size: 14px;
  font-weight: bold;
  color: #606266;
  border: none;
  border-radius: 5px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #f0f2f5;
  }
`;

const CommentBox = styled.div`
  background-color: #f0f2f5;
  border-radius: 1.3em;
  box-sizing: border-box;
  padding: 0.5em;
`;

const Commenter = styled.p`
  margin: 0.3em 0;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
`;

const Comment = styled.p`
  margin: 0;
  text-align: left;
  font-size: 17px;
`;

const Time = styled.p`
  margin: 0 0 0 0.6em;
  text-align: left;
  font-size: 13px;
`;
