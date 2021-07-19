import React from "react";
import styled from "styled-components";

import {
  ThumbUpAltOutlined,
  ChatBubbleOutlineRounded,
  ShareRounded,
} from "@material-ui/icons";

import PostCard from "../elements/PostCard";
import Grid from "../elements/Grid";
import Profile from "../elements/Profile";
import Input from "../elements/Input";
import likeIcon from "../images/like.png";
import profile from "../images/profile.jpg";
import EditMenu from "./EditMenu";

import moment from "moment";

const Post = (props) => {
  const { postId, userInfo, content, comment, like } = props;
  return (
    <PostCard>
      <Grid padding="1em 1em 0 1em">
        <Grid is_flex space_between>
          <p style={{ margin: "0", textAlign: "left" }}>
            땡땡님이 댓글을 남겼습니다.
          </p>
          <EditMenu {...props} />
        </Grid>
        <Line />
      </Grid>
      <Grid padding="0 1em" is_flex>
        <Profile src={profile} margin="0 0.5em 0 0" />
        <Grid>
          <Name>{userInfo.firstName}</Name>
          <Date>{content.createdAt}</Date>
        </Grid>
      </Grid>
      <Grid padding="0 1em">
        <Text>{content.text}</Text>
      </Grid>
      {content.picture?.length === 0 ? null : (
        <img
          src={content.picture[0]}
          style={{ width: "100%", height: "100%" }}
          alt="article"
        />
      )}

      <Grid is_flex space_between padding="0 1em">
        <LikeBtn>
          <img
            src={likeIcon}
            alt="like"
            style={{ width: "2em", height: "2em" }}
          />{" "}
          {like.likeCnt}
        </LikeBtn>
        <CommentCnt>댓글 {comment.length}개</CommentCnt>
      </Grid>
      <Grid padding="0 1em">
        <Line />
        <Grid is_flex>
          <BtnContainer>
            <MenuButton>
              <ThumbUpAltOutlined
                style={{ fontSize: "1.5em", marginRight: "0.5em" }}
              />{" "}
              좋아요
            </MenuButton>
            <MenuButton>
              <ChatBubbleOutlineRounded
                style={{ fontSize: "1.5em", marginRight: "0.5em" }}
              />{" "}
              댓글 달기
            </MenuButton>
            <MenuButton>
              <ShareRounded
                style={{ fontSize: "1.5em", marginRight: "0.5em" }}
              />{" "}
              공유하기
            </MenuButton>
          </BtnContainer>
        </Grid>
        <Line />
      </Grid>
      <Grid is_flex padding="1em">
        <Profile src={profile} margin="0 0.5em 0 0" />
        <Input placeholder="댓글을 입력하세요..." />
      </Grid>
      {comment.map((c) => (
        <Grid is_flex padding="1em" key={c.commentId}>
          <Profile src={profile} margin="0 0.5em 0 0" alignSelf="flex-start" />
          <Grid>
            <CommentBox>
              <Commenter>{c.writerInfo.name}</Commenter>
              <Comment>{c.commentText}</Comment>
            </CommentBox>
            <Time>{c.commentCreatedAt}</Time>
          </Grid>
        </Grid>
      ))}
    </PostCard>
  );
};

Post.defaultProps = {
  postId: moment().format("YYYY-MM-DD hh:mm:ss"),
  userInfo: {
    userEmail: "test@test.com",
    firstName: "test user name",
    profile: "",
  },
  content: {
    picture: [],
    text: "test text",
    createdAt: "2021 07 13 08 47 13 pm",
  },

  comment: [
    {
      writerInfo: {
        name: "댓글러",
        profile: `${profile}`,
      },
      commentId: 1,
      commentText: "blah blah",
      commentCreatedAt: " 1min ago",
    },
  ],

  like: {
    userList: [],
    likeCnt: 0,
  },
};

export default Post;

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
  word-break: break-all;
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
