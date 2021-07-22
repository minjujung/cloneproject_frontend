import { createAction, handleActions } from "redux-actions";
import React, {useRef, useState} from "react";
import produce from "immer";
import axios from "axios";
import instance from "../../shared/api";
import io from "socket.io-client";

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const CURRENT = "CURRENT";
const OUT = "OUT";

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const currentUser = createAction(CURRENT, (current_user) => ({current_user}))
const out = createAction(OUT, (email) => ({email}));

const socketRef = useRef

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  profile_url: "",
  userId: "",
  is_login: false,
  current_user_list: [],
};

const signUpDB = (
  firstName,
  lastName,
  email,
  pwd,
  profile_url,
  handleClose
) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://13.124.107.195/api/signup", //연결 후 설정
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: pwd,
        profilePic: profile_url,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          dispatch(setUser({ email, pwd, profile_url }));
          console.log("회원가입 성공");
          window.alert("회원가입이 완료되었습니다!");
          handleClose();
        }
      })
      .catch((err) => {
        console.log(err);
        window.alert("이메일이 중복되었습니다!");
      });
  };
};

const loginDB = (email, pwd) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://13.124.107.195/api/login",
      data: {
        userId: email,
        password: pwd,
      },
    })
      .then((res) => {
        console.log(res);
        console.log(res.data.token); //201 에러 200 정상 (로그인 시)
        if (res.status === 200) {
          const firstName = res.data.userInfo.fistName;
          const lastName = res.data.userInfo.lastName;
          const profile_url = res.data.userInfo.profilePic;
          document.cookie = `MY_COOKIE=${res.data.token};`;
          dispatch(setUser({ email, firstName, lastName, profile_url }));
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
        window.alert("아이디 또는 비밀번호가 잘못되었습니다!");
      });
  };
};

const _logOut = () => {
  return function (dispatch, getState, { history }) {
    const userInfo = getState().user
    document.cookie = `MY_COOKIE=; expires=${new Date(
      "2020-12-12"
    ).toUTCString()}`;
    dispatch(logOut());
    dispatch(out(userInfo.email));
    history.replace("/login");
  };
};

const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/api/me`)
      .then((res) => {
        console.log(res.data.userInfo);
        const userInfo = res.data.userInfo;
        const firstName = res.data.userInfo.firstName;
        const lastName = res.data.userInfo.lastName;
        const userId = res.data.userInfo.userId;
        const email = res.data.userInfo.email;
        const profile_url = res.data.userInfo.profilePic;
        dispatch(setUser({ userId, email, firstName, lastName, profile_url }));
        socketRef.current = io.connect("http://13.124.107.195:3000");
        socketRef.current.emit("user", {userInfo})
        socketRef.current.on("user", (data) => {
          console.log(data);
          dispatch(currentUser(data.userInfo))
        });
      })
      .catch((error) => console.log(error));
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.userId = action.payload.user.userId;
        draft.email = action.payload.user.email;
        draft.firstName = action.payload.user.firstName;
        draft.lastName = action.payload.user.lastName;
        draft.profile_url = action.payload.user.profile_url;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.email = null;
        draft.user_name = null;
        draft.profile_url = null;
        draft.is_login = false;
      }),
    [CURRENT]: (state, action) =>
    produce(state, (draft) => {
      draft.current_user_list.push(action.payload.current_user);
    }),
    [OUT]: (state, action) =>
    produce(state, (draft) => {
      const out_index = draft.current_user_list.findIndex(l => 
        l.email === action.payload.email )
        draft.current_user_list.splice(out_index, 1)
    
    })
    
  },
  initialState
);

const actionCreators = {
  signUpDB,
  loginDB,
  // duplicate,
  _logOut,
  loginCheckDB,
};

export { actionCreators };
