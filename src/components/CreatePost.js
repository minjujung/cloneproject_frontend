import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import {
  ClearRounded,
  LockRounded,
  ArrowDropDownRounded,
  PhotoLibraryRounded,
  PersonAdd,
  LocationOn,
  SentimentSatisfiedRounded,
  GifRounded,
  VideocamOffRounded,
  CloseRounded,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import profile from "../images/profile.jpg";
import Profile from "../elements/Profile";
import Grid from "../elements/Grid";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/profile";

const useStyles = makeStyles((theme) => ({
  smileBtn: {
    position: "absolute",
    bottom: "5em",
    right: "0.9em",
    fontSize: "1.8em",
    color: "#dadde1",
    "&:hover": {
      color: "#bdc3c7",
    },
  },
}));

const CreatePost = (props) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const previewImage = useSelector((state) => state.profile.preview);

  const classes = useStyles();
  const [size, setSize] = useState(1.9);
  const [postText, setPostText] = useState("");
  const textInput = useRef();
  const imageInput = useRef();

  useEffect(() => {
    dispatch(imageActions.setPreview(null));
  }, []);

  const resize = () => {
    if (textInput === null || textInput.current === null) {
      return;
    }
    let textArea = textInput.current;
    console.log(textArea.scrollHeight);
    textArea.style.height = "38px";
    textArea.style.height = textArea.scrollHeight + "px";
    if (textArea.scrollHeight > 144) {
      if (previewImage) {
        return props.resizeModal(textArea.scrollHeight / 16 + 17);
      } else {
        props.resizeModal(textArea.scrollHeight / 16);
      }
    }
  };

  const sizeSmaller = (event) => {
    if (event.target.scrollHeight > 152) {
      setSize(1.5);
    }
  };

  const sizeBigger = (event) => {
    if (event.target.value === "") {
      setSize(1.9);
    }
    resize();
    setPostText(event.target.value);
  };

  const selectFile = (e) => {
    const reader = new FileReader();
    const file = imageInput.current.files[0];

    if (!file) {
      return;
    }
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
      props.resizeModal(17);
    };
  };

  // const deleteFile = (idx) => {
  //   const s = fileList.filter((item, index) => index !== idx);
  //   setFileList(s);
  // };

  const addOnePost = () => {
    dispatch(postActions.addPostDB(postText));
    props.handleClose();
    props.resizeModal(10.5);
  };

  return (
    <>
      <Container>
        <Title>게시물 만들기</Title>
        <Button>
          <ClearRounded
            style={{ color: "#606266", fontSize: "2.2em" }}
            onClick={props.handleClose}
          />
        </Button>
        <Grid is_flex padding="1em">
          <Profile
            src={userInfo.profile_url ? userInfo.profile_url : profile}
            alt="profile"
          />
          <Grid>
            <Name>{userInfo.firstName + userInfo.lastName}</Name>
            <ShowOption>
              <LockRounded style={{ fontSize: "1em", marginRight: "0.3em" }} />
              <span>모두보기</span>
              <ArrowDropDownRounded style={{ fontSize: "1.3em" }} />
            </ShowOption>
          </Grid>
        </Grid>

        <Grid padding="0.5em 1em">
          <WriteField>
            <textarea
              value={postText}
              ref={textInput}
              style={{ fontSize: `${size}em` }}
              onClick={sizeSmaller}
              onChange={sizeBigger}
              // onInput={resize}
              placeholder={`${
                userInfo.firstName + userInfo.lastName
              }님, 무슨 생각을 하고 계신가요?`}
            />
            {previewImage ? (
              <>
                <DeleteBtn
                  onClick={() => {
                    dispatch(imageActions.setPreview(null));
                    imageInput.current.value = "";
                    props.resizeModal(textInput.current.scrollHeight / 16 + 4);
                  }}
                >
                  <CloseRounded />
                </DeleteBtn>
                <img
                  src={previewImage}
                  style={{
                    width: "80%",
                    height: "80%",
                    margin: "0 auto",
                    display: "block",
                    borderRadius: "0.5em",
                    position: "relative",
                  }}
                  alt="preview"
                />
              </>
            ) : null}
          </WriteField>
          <BtnContainer>
            <AddPhotoBtn>
              <span>게시물 추가</span>
              <BtnGroup>
                <input
                  ref={imageInput}
                  id="postImg"
                  type="file"
                  multiple
                  accept="image/jpg,image/png,image/jpeg,image/gif"
                  onChange={selectFile}
                  style={{ display: "none" }}
                />
                <label htmlFor="postImg">
                  <PhotoLibraryRounded
                    style={{ ...iconStyle, color: "#45bd62" }}
                  />
                </label>
                <PersonAdd style={{ ...iconStyle, color: "#1877f2" }} />
                <LocationOn style={{ ...iconStyle, color: "#f5533d" }} />
                <SentimentSatisfiedRounded
                  style={{ ...iconStyle, color: "#f7bb2f" }}
                />
                <GifRounded
                  style={{
                    ...iconStyle,
                    color: "white",
                    backgroundColor: "#2abba7",
                    borderRadius: "0.3em",
                  }}
                />
                <VideocamOffRounded
                  style={{ ...iconStyle, color: "#f02849" }}
                />
              </BtnGroup>
            </AddPhotoBtn>
            <PostBtn
              onClick={addOnePost}
              disabled={postText === "" ? true : false}
            >
              게시
            </PostBtn>
          </BtnContainer>
        </Grid>
      </Container>
      <SentimentSatisfiedRounded className={classes.smileBtn} />
    </>
  );
};

CreatePost.defaultProps = {
  userInfo: {
    userEmail: "test@test.com",
    firstName: "사용자",
    profile: null,
  },
};

export default CreatePost;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  textarea {
    width: 93%;
    border: none;
    outline: none;
    word-spacing: -0.2em;
    resize: none;
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.3em;
  border-bottom: 1px solid #c4c5c9;
  box-sizing: border-box;
  padding: 1em 0;
  margin: 0;
`;

const Name = styled.p`
  margin: 0 0 0 0.5em;
  text-align: left;
  font-weight: bold;
  font-size: 0.9em;
`;

const Button = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
  border-radius: 50%;
  border: none;
  background-color: #dadde1;
  width: 2.6em;
  height: 2.6em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShowOption = styled.div`
  background-color: #dadde1;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 0.5em;
  padding: 0.2em 0.5em;
  margin: 0.3em 0 0 0.5em;
  span {
    font-size: 0.8em;
    font-weight: bold;
  }
`;

const WriteField = styled.div`
  height: 100%;
  max-height: 16em;
  margin-bottom: 1em;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0.5em;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #dadde1;
    border-radius: 0.5em;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const DeleteBtn = styled.button`
  position: absolute;
  background-color: #ffffffd4;
  border-radius: 1em;
  border: none;
  color: grey;
  display: flex;
  padding: 0.5em;
`;

const BtnContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddPhotoBtn = styled.div`
  width: 95%;
  height: 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5em;
  border: 0.5px solid #dadde1;
  font-weight: bold;
  box-sizing: border-box;
  padding: 0.5em 1em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  position: absolute;
  bottom: 4.3em;
`;

const BtnGroup = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const iconStyle = {
  fontSize: "1.8em",
};

const PostBtn = styled.button`
  width: 95%;
  font-weight: bold;
  color: ${(props) => (props.disabled ? "#606266" : "white")};
  background-color: ${(props) => (props.disabled ? "#dadde1" : "#1b74e4")};
  border: none;
  border-radius: 0.5em;
  margin-top: 1em;
  padding: 0.8em 0;
  position: absolute;
  bottom: 1em;
`;
