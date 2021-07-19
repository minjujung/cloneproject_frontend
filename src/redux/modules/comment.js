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
  async (dispatch, getState, { history }) => {
    let comment = {
      commentText: content,
    };
    await instance.post("/api/comments", comment).then((res) => {
      const user_info = getState().user.user;
      const new_comment = {
        ...comment,
        userInfo: {
          firstName: user_info.firstName,
          lastName: user_info.lasName,
          profilePic: user_info.profilePic,
        },
      };
      dispatch(addComment(postId, new_comment));
    });
  };

export default handleActions(
  {
    [SET_COMMENT]: (state, action) => produce(state, (draft) => {}),
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
  addCommentDB,
};
