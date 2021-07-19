import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { storage } from "../../shared/firebase";

const UPLOADING = "UPLOADING";
const UPLOAD_PROFILE = "UPLOAD_PROFILE";
const SET_PREVIEW = "SET_PREVIEW";

const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadProfile = createAction(UPLOAD_PROFILE, (profile_url) => ({
  profile_url,
}));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));

const initialState = {
  profile_url: "",
  uploading: false,
  preview: null,
};

const uploadProfileFB = (profile) => {
  return function (dispatch, getState, { history }) {
    dispatch(uploading(true));

    const _upload = storage
      .ref(`profiles/${profile.name}${new Date().getTime()}`)
      .put(profile);
    _upload.then((snap) => {
      console.log(snap);
      dispatch(uploading(false));
      snap.ref.getDownloadURL().then((url) => {
        dispatch(uploadProfile(url));
        console.log(url);
      });
    });
  };
};

export default handleActions(
  {
    [UPLOAD_PROFILE]: (state, action) =>
      produce(state, (draft) => {
        draft.profile_url = action.payload.profile_url;
        draft.uploading = false;
      }),
    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
      }),
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
  },
  initialState
);

const actionCreators = {
  uploadProfileFB,
  setPreview,
};

export { actionCreators };
