import React, { useState } from "react";
import styled from "styled-components";

import Grid from "../elements/Grid";
import Profile from "../elements/Profile";
import Input from "../elements/Input";
import profile from "../images/profile.jpg";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import CommentMenu from "./CommentMenu";

const CommentList = ({ comments, postId }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);

  const [cmtText, setCmtText] = useState("");
  const [cmtId, setCmtId] = useState("");
  const [editText, setEditText] = useState("");

  const writeCmt = (e) => {
    setCmtText(e.target.value);
  };

  const addCmt = (e) => {
    if (e.key === "Enter") {
      dispatch(commentActions.addCommentDB(postId, cmtText));
      setCmtText("");
    }
  };

  const selectCmt = (id) => {
    setCmtId(id);
  };

  const editCmt = (e) => {
    if (e.key === "Enter") {
      dispatch(commentActions.editCommentDB(postId, cmtId, editText));
      setCmtId("");
    }
  };

  return (
    <>
      <Grid is_flex padding="1em 1em 0.2em 1em">
        <Profile
          src={userInfo.profile_url ? userInfo.profile_url : profile}
          margin="0 0.5em 0 0"
        />
        <Input
          value={cmtText}
          placeholder="댓글을 입력하세요..."
          _onChange={writeCmt}
          _onKeyPress={addCmt}
        />
      </Grid>
      {comments.map((c) => (
        <Grid is_flex padding="0.2em 1em" key={c.commentId}>
          <Profile
            src={c.profilePic}
            margin="0 0.5em 0 0"
            alignSelf="flex-start"
          />
          <Grid>
            <Grid is_flex>
              {cmtId === c.commentId ? (
                <Grid relative>
                  <Input
                    width="33em"
                    placeholder={c.commentText}
                    value={editText}
                    _onChange={(e) => setEditText(e.target.value)}
                    _onKeyPress={editCmt}
                  />
                  <Button onClick={() => setCmtId("")}>취소</Button>
                </Grid>
              ) : (
                <>
                  <CommentBox>
                    <Commenter>{c.userName}</Commenter>
                    <Comment>{c.commentText}</Comment>
                  </CommentBox>
                  <CommentMenu
                    cmtId={c.commentId}
                    postId={postId}
                    cmtText={cmtText}
                    selectCmt={selectCmt}
                  />
                </>
              )}
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
  padding: 0.5em 0.7em;
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
  font-size: 0.95em;
`;

const Time = styled.p`
  margin: 0 0 0 0.6em;
  text-align: left;
  font-size: 13px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 0.8em;
  position: absolute;
  left: 0;
  bottom: -1.4em;
  padding: 0 0.2em;
`;
