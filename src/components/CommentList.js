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
      setTimeout(() => setCmtId(""), 500);
      setTimeout(() => setEditText(""), 550);
    }
  };


  return (
    <>
      <Grid is_flex padding="1em 1em 0.3em 1em">
        <Profile
          src={userInfo.profile_url ? userInfo.profile_url : profile}
          margin="0 0.5em 0 0"
        />
        <Input
          value={cmtText}
          placeholder="댓글을 입력하세요..."
          _onChange={writeCmt}
          _onKeyPress={addCmt}
          icons
        />
      </Grid>
      {comments.map((c) => (
        <Grid is_flex padding="0.6em 1em" key={c._id}>
          <Profile
            src={c.profilePic ? c.profilePic : profile}
            margin="0 0.5em 0 0"
            alignSelf="flex-start"
          />
          <Grid>
            <Grid is_flex>
              {cmtId === c._id ? (
                <Grid relative>
                  <Input
                    width="25.9"
                    placeholder={c.commentText}
                    value={editText}
                    _onChange={(e) => setEditText(e.target.value)}
                    _onKeyPress={editCmt}
                    icons
                  />
                  <Button onClick={() => setCmtId("")}>
                    <span
                      style={{ color: "#5a5ad9", textDecoration: "underline" }}
                    >
                      취소
                    </span>
                    <Explain>Enter를 눌리면 수정이 됩니다 :)</Explain>
                  </Button>
                </Grid>
              ) : (
                <>
                  <CommentBox>
                    <Commenter>
                      {c.userName ? c.userName : c.firstName + c.lastName}
                    </Commenter>
                    <Comment>{c.commentText}</Comment>
                  </CommentBox>
                  {userInfo.userId === parseInt(c.userId) ? (
                    <CommentMenu
                      cmtId={c._id}
                      postId={postId}
                      cmtText={cmtText}
                      selectCmt={selectCmt}
                    />
                  ) : null}
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
  padding: 0.6em 0.7em;
  word-break: break-all;
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
  font-size: 0.7em;
  position: absolute;
  left: 0;
  bottom: -1.4em;
  padding: 0 0.2em;
`;

const Explain = styled.span`
  font-size: 0.7em;
  margin-left: 1em;
`;
