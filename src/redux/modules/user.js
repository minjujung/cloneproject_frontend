import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const SET_USER = "SET_USER";

const setUser = createAction(SET_USER, (uploading) => ({uploading}));

const initialState = {
    user_name: '',
    user_id: false,
}

const signUpDB = (profile) => {
    return function (dispatch, getState, {history}){
    }
}

export default handleActions({
    [SET_USER]: (state, action) => produce(state, (draft) => {
        draft.user_id = action.payload.user_id;
        draft.email = action.payload.email;
    }),
}, initialState);

const actionCreators = {
    signUpDB,
}

export {actionCreators};