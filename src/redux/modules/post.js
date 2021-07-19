import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { storage } from "../firebase";

import profile from "../../images/profile.jpg";
import { actionCreators as profileActions } from "./profile";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const LOADING = "LOADING";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: [
    {
      postId: 0,
      userInfo: {
        userEmail: "test@test.com",
        firstName: "test user name",
        profile: { profile },
      },
      content: {
        picture: [
          "https://i.pinimg.com/564x/08/22/5f/08225f0dc79fc03bad5d89cdbd5d354d.jpg",
        ],
        text: "test text",
        createdAt: "2021 07 13 08 47 13 pm",
      },

      comment: [
        {
          writerInfo: {
            name: "댓글러",
            profile: { profile },
          },
          commentId: 1,
          commentText: "blah blah",
          commentCreatedAt: " 1min ago",
        },
      ],

      like: {
        userList: [],
        likeCnt: 0,
      },
    },
  ],
  is_loading: false,
};

const addPostDB = (text = "") => {
  return function (dispatch, getState, { history }) {
    // const _user = getState().user.user
    const userInfo = {
      userEmail: "test@test.com",
      firstName: "test user name",
      profile: { profile },
    };

    const new_post = {
      content: {
        text,
        picture: [],
      },
    };

    const _image = getState().profile.preview;

    if (_image) {
      const _upload = storage
        .ref(`images/${userInfo.userEmail}_${new Date().getTime()}`)
        .putString(_image, "data_url");

      _upload.then((snapshot) => {
        snapshot.ref.getDownloadURL().then((url) => {
          console.log(url);
          let new_pictures = [];

          new_pictures.push(url);

          console.log(new_pictures);
          let post = {
            postId: new Date(),
            content: { ...new_post.content, picture: new_pictures },
          };
          dispatch(addPost(post));
          dispatch(profileActions.setPreview(null));
        });
      });
    }
    console.log("noImage");
    dispatch(addPost({ ...new_post, postId: new Date() }));
  };
};

const deletePostDB = (post_id) => {
  return function (dispatch, getState, { history }) {
    dispatch(deletePost(post_id));
  };
};

const getPostDB = (post_list) => {
  return function (dispatch, getState, { history }) {};
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
    [EDIT_POST]: (state, action) => produce(state, (draft) => {}),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = draft.list.filter(
          (l) => l.postId !== action.payload.post_id
        );
      }),
    [LOADING]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  editPost,
  deletePost,
  addPostDB,
  deletePostDB,
};

export { actionCreators };
