import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import instance from "../../shared/api";
import profile from "../../images/profile.jpg";

import { actionCreators as postActions } from "./post";

const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";

const setComment = createAction(SET_COMMENT, (postId, comment_list) => ({
  postId,
  comment_list,
}));

const initialState = {
  list: {
    1: [
      {
        writerInfo: {
          name: "댓글러",
          profile,
        },
        commentId: 1,
        commentText: "blah blah",
        commentCreatedAt: " 1min ago",
      },
    ],
  },
};

const addCommentDB =
  (post_id, comment) =>
  (dispatch, getState, { history }) => {
    let new_comment = {
      postId: post_id,
      commentText: comment,
    };

    instance.post("/api/comments", new_comment).then((res) => {
      const post_list = getState().post.list;

      const post_idx = post_list.findIndex((p) => p._id === post_id);
      const _post = post_list[post_idx];

      const user_info = getState().user;

      const _comment = {
        _id: res.data.potato.commentId,
        commentId: res.data.potato.commentId,
        commentText: comment,
        userId: res.data.potato.userId,
        userName: user_info.firstName + user_info.lastName,
        profilePic: user_info.profile_url,
        commentCreatedAt: res.data.commentCreatedAt,
      };

      const new_post = { ..._post, comments: [_comment, ..._post.comments] };

      dispatch(postActions.editPost(post_id, new_post));
    });
  };

const deleteCommentDB =
  (commentId, postId) =>
  (dispatch, getState, { history }) => {
    instance
      .delete(`/api/comments/${commentId}`)
      .then((res) => {

        const post_list = getState().post.list;
        const post_idx = post_list.findIndex((p) => p._id === postId);
        const _post = post_list[post_idx];

        const cmt_idx = _post.comments.findIndex(
          (cmt) => cmt._id === commentId
        );

        const new_list = _post.comments.filter((cmt, idx) => idx !== cmt_idx);

        const new_post = { ..._post, comments: new_list };
        dispatch(postActions.editPost(postId, new_post));
      })
      .catch((error) => console.log(error));
  };

const editCommentDB =
  (postId, commentId, comment) =>
  (dispatch, getState, { history }) => {
    instance
      .put(`/api/comments/${commentId}`, { commentId, commentText: comment })
      .then((res) => {

        const post_list = getState().post.list;
        const post_idx = post_list.findIndex((p) => p._id === postId);
        const _post = post_list[post_idx];

        const cmt_idx = _post.comments.findIndex(
          (cmt) => cmt._id === commentId
        );

        const new_list = _post.comments.map((cmt, idx) =>
          idx === cmt_idx ? { ...cmt, commentText: comment } : cmt
        );

        const new_post = { ..._post, comments: new_list };

        dispatch(postActions.editPost(postId, new_post));
      })
      .catch((error) => console.log(error));
  };

export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.postId] = action.payload.comment_list;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.postId].unshift(action.payload.comment);
      }),
    [DELETE_COMMENT]: (state, action) => produce(state, (draft) => {}),
    [EDIT_COMMENT]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

export const actionCreators = {
  setComment,
  addCommentDB,
  deleteCommentDB,
  editCommentDB,
};
