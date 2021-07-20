import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import instance from "../../shared/api";

import { actionCreators as postActions } from "./post";

const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";

const setComment = createAction(SET_COMMENT, (postId, comment_list) => ({
  postId,
  comment_list,
}));

const addComment = createAction(ADD_COMMENT, (postId, comment) => ({
  postId,
  comment,
}));

const deleteComment = createAction(DELETE_COMMENT, (comment_id) => ({
  comment_id,
}));
const editComment = createAction(EDIT_COMMENT, (comment_id, comment) => ({
  comment_id,
  comment,
}));

const initialState = {
  list: {},
};

const addCommentDB =
  (postId, content) =>
  (dispatch, getState, { history }) => {
    let comment = {
      commentText: content,
    };

    instance.post("/api/comments", comment).then((res) => {
      console.log(comment);
      const post_idx = getState().post.list.findIndex(
        (p) => p.postId === postId
      );
      const _post = getState().post.list[post_idx];
      console.log(res);
      const user_info = getState().user.user;

      const new_comment = {
        ...comment,
        userInfo: {
          firstName: user_info?.firstName || "test@test.com",
          lastName: user_info?.lasName || "test user name",
          profilePic: user_info?.profilePic || "../../images/profile.jpg",
        },
      };
      console.log(postId, new_comment);
      dispatch(addComment(postId, new_comment));

      let comment_list = [];
      comment_list.push(new_comment);

      dispatch(
        postActions.editPost(postId, { ..._post, comment: comment_list })
      );
    });
  };

const deleteCommentDB =
  (commentId) =>
  (dispatch, getState, { history }) => {
    instance
      .delete(`/api/comments/${commentId}`)
      .then((res) => {
        console.log(res);
        dispatch(deleteComment(commentId));
      })
      .catch((error) => console.log(error));
  };

const editCommentDB =
  (postId, comment) =>
  (dispatch, getState, { history }) => {};

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
};
