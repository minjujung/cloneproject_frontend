import React, { useState } from "react";
import styled from "styled-components";

import Grid from "../elements/Grid";
import Profile from "../elements/Profile";
import Input from "../elements/Input";
import profile from "../images/profile.jpg";

import { useDispatch } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import CommentMenu from "./CommentMenu";

const CommentList = ({ comments, postId }) => {
  const dispatch = useDispatch();

  const [cmtText, setCmtText] = useState("");

  const writeCmt = (e) => {
    setCmtText(e.target.value);
  };

  const addCmt = (e) => {
    if (e.key === "Enter") {
      dispatch(commentActions.addCommentDB(postId, cmtText));
    }
  };

  return (
    <>
      <Grid is_flex padding="1em">
        <Profile src={profile} margin="0 0.5em 0 0" />
        <Input
          value={cmtText}
          placeholder="댓글을 입력하세요..."
          _onChange={writeCmt}
          _onKeyPress={addCmt}
        />
      </Grid>
      {comments.map((c) => (
        <Grid is_flex padding="1em" key={c.commentId}>
          <Profile
            src={c.profilePic}
            margin="0 0.5em 0 0"
            alignSelf="flex-start"
          />
          <Grid>
            <Grid is_flex>
              <CommentBox>
                <Commenter>{c.userName}</Commenter>
                <Comment>{c.commentText}</Comment>
              </CommentBox>
              <CommentMenu cmtId={c.commentId} postId={postId} />
            </Grid>
            <Time>{c.commentCreatedAt}</Time>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default CommentList;

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
