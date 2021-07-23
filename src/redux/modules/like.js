import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import instance from "../../shared/api";

import { actionCreators as postActions } from "./post";

const SET_LIKE = "SET_LIKE";
const SET_CLICK = "SET_CLICK";

const setLike = createAction(SET_LIKE, (email, postIdList) => ({
  email,
  postIdList,
})); //payload 에서 변수를 나타냄
const setClick = createAction(SET_CLICK, () => {});
// const initialState = {
//   list:{userInfo.email: [postId1, postId2..]}
// }

const initialState = {
  list: {},
  is_clicked: false,
};

const setLikeDB =
  (postId) =>
  (dispatch, getState, { history }) => {
    instance
      .put(`/api/posts/${postId}/like`)
      .then((res) => {
        console.log(res);
        const user_info = getState().user;

        const post_list = getState().post.list;
        const post_idx = post_list.findIndex((p) => p._id === postId);
        const _post = post_list[post_idx];

        const user_list = _post.like.userList;
        console.log(user_list);
        let new_post = {};
        let new_list = [];

        const user_idx = user_list.findIndex(
          (user) => user.userId === user_info.userId
        );

        if (user_idx !== -1) {
          new_list = user_list.filter(
            (user) => user.userId !== user_info.userId
          );
          new_post = {
            ..._post,
            like: { userList: new_list, likeCnt: _post.like.likeCnt - 1 },
          };
        } else {
          new_list = [
            ...user_list,
            { userId: user_info.userId, userName: user_info.user_name },
          ];
          new_post = {
            ..._post,
            like: { userList: new_list, likeCnt: _post.like.likeCnt + 1 },
          };
        }

        dispatch(postActions.editPost(postId, new_post));
      })
      .catch((error) => console.log(error));
  };

export default handleActions(
  {
    [SET_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.email] = action.payload.postIdList;
        // draft.user_name = action.payload.user_name;
      }),
  },
  initialState
);

const actionCreators = {
  setLikeDB,
};

export { actionCreators };
