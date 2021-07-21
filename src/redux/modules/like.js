import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

const SET_LIKE = "SET_LIKE";
const SET_CLICK = "SET_CLICK";

const setLike = createAction(SET_LIKE, (user) => ({ user })); //payload 에서 변수를 나타냄
const setClick = createAction(SET_CLICK, () => {});
// const initialState = {
//   list:{postId: [userName1, userName2..]}
// }

const initialState = {
  list: {},
  is_clicked: false,
};

const setLikeDB =
  (postId, userEmail) =>
  (dispatch, getState, { history }) => {};

export default handleActions(
  {
    [SET_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.like_cnt = action.payload.like_cnt;
        // draft.user_name = action.payload.user_name;
      }),
  },
  initialState
);

const actionCreators = {
  setLike,
};

export { actionCreators };
