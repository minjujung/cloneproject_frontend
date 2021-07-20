import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

const SET_LIKE = "SET_LIKE";

const setLike = createAction(SET_LIKE, (like_cnt) => ({like_cnt})); //payload 에서 변수를 나타냄

const initialState = {
    post_id: '',
    like_cnt: 0,
}



export default handleActions({
    [SET_LIKE]: (state, action) => produce(state, (draft) => {
        draft.like_cnt = action.payload.like_cnt;
        // draft.user_name = action.payload.user_name;
    }),

}, initialState);

const actionCreators = {
    setLike
};

export {actionCreators};