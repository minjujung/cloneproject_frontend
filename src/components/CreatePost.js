import React, { usetextInput, useState, useEffect, useRef } from "react";
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
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import profile from "../images/profile.jpg";
import Profile from "../elements/Profile";
import Grid from "../elements/Grid";

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
  const classes = useStyles();
  const [size, setSize] = useState(1.9);
  const textInput = useRef();

  const sizeSmaller = (event) => {
    if (event.target.scrollHeight > 152) {
      setSize(1.5);
    }
  };

  const sizeBigger = (event) => {
    if (event.target.value === "") {
      setSize(1.9);
    }
  };

  const resize = () => {
    if (textInput === null || textInput.current === null) {
      return;
    }
    let textArea = textInput.current;
    textArea.style.height = "144px";
    textArea.style.height = textArea.scrollHeight + "px";
    if (textArea.scrollHeight > 144) {
      props.resizeModal(textArea.scrollHeight / 16 + 17.5);
    }
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
          <Profile src={profile} alt="profile" />
          <Grid>
            <Name>{props.userInfo.firstName}</Name>
            <ShowOption>
              <LockRounded style={{ fontSize: "1em", marginRight: "0.3em" }} />
              <span>나만보기</span>
              <ArrowDropDownRounded style={{ fontSize: "1.3em" }} />
            </ShowOption>
          </Grid>
        </Grid>

        <Grid padding="0.5em 1em">
          <WriteField>
            <textarea
              ref={textInput}
              style={{ fontSize: `${size}em` }}
              row={4}
              onClick={sizeSmaller}
              onChange={sizeBigger}
              onInput={resize}
              placeholder={`${props.userInfo.firstName}님, 무슨 생각을 하고 계신가요?`}
            />
          </WriteField>
          <AddPhotoBtn>
            <span>게시물 추가</span>
            <BtnGroup>
              <PhotoLibraryRounded style={{ ...iconStyle, color: "#45bd62" }} />
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
              <VideocamOffRounded style={{ ...iconStyle, color: "#f02849" }} />
            </BtnGroup>
          </AddPhotoBtn>
          <PostBtn>게시</PostBtn>
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
  max-height: 17em;
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

const AddPhotoBtn = styled.div`
  width: 90%;
  height: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5em;
  border: 0.5px solid #dadde1;
  font-weight: bold;
  padding: 0.3em 1em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  position: absolute;
  bottom: 3.5em;
  left: 0.5em;
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
  width: 97%;
  color: white;
  background-color: #1b74e4;
  border: none;
  border-radius: 0.5em;
  margin-top: 1em;
  padding: 0.8em 0;
  position: absolute;
  bottom: 0.5em;
  left: 0.5em;
`;
