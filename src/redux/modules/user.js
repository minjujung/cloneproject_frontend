import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

const SET_USER = "SET_USER";
const GET_USER = "GET_USER";
const LOG_OUT = "LOG_OUT";

const setUser = createAction(SET_USER, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}))

const initialState = {
    user_name: '',
    email: false,
    is_login: false,
}

const signUpDB = (firstName, lastName, email, pwd, profile_url) => {
    return function (dispatch, getState, {history}){
        axios({
            method: "post",
            url: "", //연결 후 설정
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: pwd,
                profilePicture: profile_url,
        }
    }).then((res) => {
        console.log(res)
        //dispatch(setUser({email, pwd}))
    }).catch((err) => {
        console.log(err)
    })
}};

const loginDB = (email, pwd) => {
    return function (dispatch, getState, {history}){
        axios({
            method: "post",
            url: "",
            data: {
                userId: `${email}`,
                password: `${pwd}`,
            },
        })
        .then((res) => {
            console.log(res)
            //토큰 저장하는 부분
            // dispatch(setUser({}))
        }).catch((err) => {
            console.log(err)
        })
    }
};

export default handleActions({
    [SET_USER]: (state, action) => produce(state, (draft) => {
        draft.email = action.payload.email;
        draft.is_login = true;
        draft.user_name = action.payload.user_name;
    }),
    [GET_USER]: (state, action) => produce(state, (draft) => {;
    }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {
        draft.user_id = false;
        draft.is_login = false;
    }),
}, initialState);

const actionCreators = {
    signUpDB,
}

export {actionCreators};