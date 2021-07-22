import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { storage } from "../../shared/firebase";

import profile from "../../images/profile.jpg";
import { actionCreators as profileActions } from "./profile";
import { actionCreators as commentActions } from "./comment";
import instance from "../../shared/api";

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
  list: [],
  is_loading: false,
};

const addPostDB =
  (text = "") =>
  (dispatch, getState, { history }) => {
    const user_info = getState().user;

    const userInfo = {
      firstName: user_info.firstName,
      lastName: user_info.lastName,
      profilePic: user_info.profile_url,
      userId: "",
    };

    const new_post = {
      userInfo: { ...userInfo },
      content: {
        text,
      },
      like: {
        userList: [],
        likeCnt: 0,
      },
      comments: [],
    };
    dispatch(loading(true));

    const _image = getState().profile.preview;

    if (_image) {
      const _upload = storage
        .ref(`images/${userInfo.userEmail}_${new Date().getTime()}`)
        .putString(_image, "data_url");

      _upload.then((snapshot) => {
        snapshot.ref.getDownloadURL().then((url) => {
          console.log(url);
          let _post = {
            ...new_post,
            content: { ...new_post.content, picture: url },
          };
          console.log(_post);
          instance
            .post("/api/posts", _post)
            .then((res) => {
              console.log(res);
              _post = {
                ...new_post,
                userInfo: { ...userInfo, userId: res.data.potato.userId },
                content: { ..._post.content },
                _id: res.data.potato.postId,
              };
              console.log(_post);
              dispatch(addPost(_post));
              dispatch(profileActions.setPreview(null));
            })
            .catch((error) => console.log(error));
        });
      });
    } else {
      instance
        .post("/api/posts", new_post)
        .then((res) => {
          console.log(res);
          dispatch(
            addPost({
              ...new_post,
              userInfo: { ...userInfo, userId: res.data.potato.userId },
              _id: res.data.potato.postId,
            })
          );
        })
        .catch((error) => console.log(error));
    }
  };

const deletePostDB =
  (post_id) =>
  (dispatch, getState, { history }) => {
    console.log("before axios");
    instance
      .delete(`/api/posts/${post_id}`)
      .then((res) => {
        console.log(res);
        dispatch(deletePost(post_id));
      })
      .catch((error) => console.log(error));
  };

const editPostDB = (postId = null, text = "") => {
  return function (dispatch, getState, { history }) {
    if (!postId) {
      console.log(postId);
      console.log("게시물 정보가 없습니다ㅜㅜ");
      return;
    }
    const post_idx = getState().post.list.findIndex((p) => p._id === postId);
    const _post = getState().post.list[post_idx];

    let new_post = {
      ..._post,
      content: { ..._post.content, text },
    };

    const _image = getState().profile.preview;

    dispatch(loading(true));

    // 수정할때 텍스트만 남기고 사진은 지울 때
    if (!_image) {
      new_post = {
        ..._post,
        content: {
          ..._post.content,
          text,
          picture: "",
        },
      };

      instance
        .put(`/api/posts/${postId}`, new_post)
        .then((res) => {
          console.log(res);
          dispatch(editPost(postId, { ...new_post }));
        })
        .catch((error) => console.log(error));
    }

    // 수정하기 전과 사진은 똑같고 text만 바뀔 때
    else if (_image === _post.content.picture) {
      instance
        .put(`/api/posts/${postId}`, new_post)
        .then((res) => {
          console.log(res);
          console.log(postId);
          dispatch(editPost(postId, { ...new_post }));
        })
        .catch((error) => console.log(error));
    } else {
      // 수정하기 전과 사진 text 모두 다를 때
      const userInfo = getState().user;
      const _upload = storage
        .ref(`images/${userInfo.email}_${new Date().getTime()}`)
        .putString(_image, "data_url");

      _upload.then((snapshot) => {
        snapshot.ref.getDownloadURL().then((url) => {
          let post = {
            ...new_post,
            content: { ...new_post.content, picture: url },
          };

          instance
            .put(`/api/posts/${postId}`, post)
            .then((res) => {
              console.log(res);
              dispatch(editPost(postId, post));
              dispatch(profileActions.setPreview(null));
            })
            .catch((error) => console.log(error));
        });
      });
    }
    dispatch(profileActions.setPreview(null));
  };
};

const getPostDB =
  () =>
  (dispatch, getState, { history }) => {
    console.log("before axios");
    instance
      .get("/api/posts")
      .then((res) => {
        console.log(res);
        dispatch(setPost(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
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
        draft.is_loading = false;
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((l) => l._id === action.payload.post_id);
        draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
        draft.is_loading = false;
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = draft.list.filter((l) => l._id !== action.payload.post_id);
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
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
  editPostDB,
  getPostDB,
};

export { actionCreators };
