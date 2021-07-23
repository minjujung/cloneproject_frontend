import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import socketIOClient from "socket.io-client";
import axios from "axios";

const GET_MSG = "GET_MSG";
const SET_MSG = "SET_MSG";

const getMsg = createAction(GET_MSG, (msg) => ({ msg })); // 채팅방 입장 시
const setMsg = createAction(SET_MSG, (msg) => ({ msg })); // 채팅 입력 시

const initialState = {
    chat_list: [],
    users: ["test@test", "qwe@qwe"] // 유저 2명
};

const socket = socketIOClient(`http://13.124.107.195:3000`); // 수정해야 함
const globalSocket = socketIOClient(`http://13.124.107.195:3000`);

const getMsgDB = () => {
  return function (dispatch, getState, { history }) {
    socket.connect("http://13.124.107.195:3000");
    socket.on("chat message", (res) => {
        dispatch(getMsg(res))
    });
  };
};

const sendMsgDB = () => {
    return function (dispatch) {
      socket.emit("chat message", (res) => {
        dispatch(setMsg(res));
      });
    };
  };

export default handleActions(
  {
    [GET_MSG]: (state, action) =>
      produce(state, (draft) => {
        draft.chat_list = action.payload.msg;
      }),
    [SET_MSG]: (state, action) =>
      produce(state, (draft) => {
        draft.chat_list = [...draft.chat_list, action.payload.msg];
    }),
  },
  initialState
);

const actionCreators = {
    getMsgDB,
    sendMsgDB,
};

export { actionCreators };
