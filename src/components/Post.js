import React, { useEffect, useState } from "react";
import styled from "styled-components";

import {
  ThumbUpAltOutlined,
  ChatBubbleOutlineRounded,
  ShareRounded,
  ThumbUp,
} from "@material-ui/icons";

import likeIcon from "../images/like.png";
import PostCard from "../elements/PostCard";
import Grid from "../elements/Grid";
import Profile from "../elements/Profile";
import CommentList from "./CommentList";
import EditMenu from "./EditMenu";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as likeActions } from "../redux/modules/like";

const Post = (props) => {
  const { _id, userInfo, content, comments, like } = props;

  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user);

  const [showCmt, setShowCmt] = useState(false);
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    const like_check = like.userList.filter(
      (user) => user.userId === user_info.userId
    );
    console.log(like_check);
    if (like_check.length !== 0) {
      return setIsLike(true);
    }
  }, []);

  const clickLike = () => {
    dispatch(likeActions.setLikeDB(_id));
    setIsLike(!isLike);
  };

  const openCmt = () => {
    setShowCmt(true);
  };

  return (
    <PostCard padding="0 0 1em 0">
      <Grid padding="1em 1em 0 1em">
        <Grid is_flex space_between>
          <p style={{ margin: "0", textAlign: "left" }}>
            땡땡님이 댓글을 남겼습니다.
          </p>
          {user_info.userId === parseInt(userInfo.userId) ? (
            <EditMenu {...props} />
          ) : null}
        </Grid>
        <Line />
      </Grid>
      <Grid padding="0 1em" is_flex>
        <Profile src={userInfo.profilePic} margin="0 0.5em 0 0" />
        <Grid>
          <Name>{userInfo.firstName + userInfo.lastName}</Name>
          <Date>{content.createdAt}</Date>
        </Grid>
      </Grid>
      <Grid padding="0 1em">
        <Text>{content.text}</Text>
      </Grid>
      {!content.picture ? null : (
        <img
          src={content.picture}
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
        <CommentCnt>댓글 {comments.length}개</CommentCnt>
      </Grid>
      <Grid padding="0 1em">
        <Line />
        <Grid is_flex>
          <BtnContainer>
            <MenuButton onClick={clickLike}>
              {isLike ? (
                <ThumbUp />
              ) : (
                <ThumbUpAltOutlined
                  style={{ fontSize: "1.5em", marginRight: "0.5em" }}
                />
              )}{" "}
              좋아요
            </MenuButton>
            <MenuButton onClick={openCmt}>
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
      {showCmt ? <CommentList postId={_id} comments={comments} /> : null}
    </PostCard>
  );
};

Post.defaultProps = {
  postId: "",
  userInfo: {
    userEmail: "",
    firstName: "",
    profile: "",
  },
  content: {
    picture: [],
    text: "",
    createdAt: "",
  },
  comments: [
    {
      writerInfo: {
        name: "",
        profile: "",
      },
      commentId: 1,
      commentText: "",
      commentCreatedAt: "",
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
