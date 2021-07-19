import React, { useRef, useState } from "react";
import Modal from "../components/Modal";
import styled from "styled-components";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {Background, Div, BackgroundC, FacebookLogo, Image, LoginBox, Input, Button, Hr, P, SignUpB, SignUpT, Bottom, ButtonText,
  H1,P2,DivM,DivMC,NameBox,InputFirstN,InputSecondN,InputEmail,DivPicture,ProfileImage,DivSubButton,SignUpBM,A} from "../components/LoginStyle";
import { actionCreators as ProfileActions } from "../redux/modules/profile";
import { useSelector, useDispatch } from "react-redux";
import x from "../images/x.png";
import Tooltip from '@material-ui/core/Tooltip';
import ModalVedio from "../components/ModalVideo";

// todo 중복확인, url, email, name, pw 전송
const Login = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log("close!");
    setOpen(false);
  };
  const onClick = () => {
    
  }
  const dispatch = useDispatch();
  const profileInput = React.useRef();
  const is_uploading = useSelector(state => state.profile.uploading);
  const profile_url = useSelector(state => state.profile.profile_url);
  
  const [FirstName, setFirst] = useState("");
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const selectFile = () => {
    let profile = profileInput.current.files[0];
    dispatch(ProfileActions.uploadProfileFB(profile))
  }

  const duplicate = () => {
  }

  const signUp = () => {
    console.log(FirstName, Name, email, pwd)
  }

  const logIn = () => {
  }

  return (
    <>
    <VideoContainer>
      <ModalVedio/>
<Video onClick={handleClickOpen} src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-19-17-37-52.mp41626684611126?alt=media&token=613224f5-a061-44ba-b71b-354df3fe694f"></Video>
<Video autoplay="autoplay" src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-19-19-30-46.mp41626690661531?alt=media&token=527f5c99-2ecb-43b0-b57c-8b05a2d4cb27"></Video>
<Video  autoplay="autoplay" src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-19-19-38-08.mp41626691096987?alt=media&token=3ffdfde3-56fc-4f28-b61e-d8e213b7b891"></Video>
</VideoContainer>
      <Background>
        <Div>
          <BackgroundC>
            <FacebookLogo>
              <Image src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
              <h2>
                Facebook에서 전세계에 있는 친구, 가족, 지인들과 함께 이야기를
                나눠보세요.
              </h2>



            </FacebookLogo>

            <LoginBox>
              <Input placeholder={"이메일"}></Input>
              <Input placeholder={"비밀번호"} type={"password"}></Input>
              <Button>로그인</Button>
              <P>비밀번호를 잊으셨나요?</P>
              <Hr width={"90%"} />

              <Modal
              width="432px"
              height="495px"
              btn={
                <SignUpB>
                  <SignUpT>
                    새 계정 만들기
                  </SignUpT>
                </SignUpB>
              }
              open={open}
              handleClickOpen={handleClickOpen}
              handleClose={handleClose}
            >
              <DivM>
            <img src={x} style={{width:"15px", height:"15px", float:"right"}} onClick={handleClose}/>
              <H1>가입하기</H1>
              <P2 color={"#eee"}>빠르고 쉽습니다.</P2>
              <DivMC>
                <NameBox>
              <Tooltip title="이름이 무엇인가요?">
                <InputFirstN onChange={(e) => {setFirst(e.target.value)}} placeholder={"성(性)"} onKeyPress={(e) => {if(e.key === 'Enter'){signUp()}}}/>
                </Tooltip>
                <Tooltip title="이름이 무엇인가요?" arrow>
                  <InputSecondN onChange={(e) => {setName(e.target.value)}} placeholder={"이름(성은 제외)"} onKeyPress={(e) => {if(e.key === 'Enter'){signUp()}}}/>
                  </Tooltip>
                </NameBox>
              <Tooltip title="로그인할 때와 비밀번호를 재설정해야할 때 사용하는 정보입니다." arrow>
                <InputEmail onChange={(e) => {setEmail(e.target.value)}} placeholder={"이메일"} onKeyPress={(e) => {if(e.key === 'Enter'){signUp()}}}/>
                </Tooltip>
              <Tooltip title="숫자, 영문, 특수기호(!,& 등)를 조합한 여섯 자리 이상의 비밀번호를 입력하세요." arrow>
                <InputEmail onKeyPress={(e) => {if(e.key === 'Enter'){signUp()}}} onChange={(e) => {setPwd(e.target.value)}} placeholder={"새 비밀번호"} type={"password"}/>
                </Tooltip>

                <DivPicture>

                <Tooltip title="아래에 카메라 버튼을 클릭하여 프로필 사진을 선택하세요." placement="left">
                  <div>
                  <ProfileImage src={profile_url} ></ProfileImage>
                  </div>
                  </Tooltip>

                  <DivSubButton>
                  <input disabled={is_uploading} ref={profileInput} onChange={selectFile} style={{ display: "none" }} id="icon-button-file" type="file" />
                  <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </DivSubButton>
                </DivPicture>

                <SignUpBM onClick={signUp} disabled={is_uploading} width={"200px"}>
                  <SignUpT>
                    가입하기
                  </SignUpT>
                </SignUpBM>
              </DivMC>
              </DivM>
            </Modal>
            </LoginBox>
          </BackgroundC>
        </Div>
        <Bottom>
          <ButtonText>
            <A>
              한국어 English (US) Tiếng Việt Bahasa Indonesia ภาษาไทย Español
              中文(简体) 日本語 Português (Brasil) Français (France) Deutsch
            </A>
            <Hr />
            
              <A>가입하기 로그인 Messenger Facebook LiteWatch 사람 페이지 
               페이지 카테고리 장소 게임 위치 Marketplace Facebook Pay 그룹 채용 정보
               Oculus Portal Instagram 지역 기부 캠페인 서비스 투표 정보 센터
               정보 광고 만들기 페이지 만들기 개발자 채용 정보 개인정보처리방침
               쿠키 AdChoices 이용 약관 고객 센터 설정활동 로그
            </A>
          </ButtonText>
        </Bottom>
      </Background>
    </>
  );
};

export default Login;

const VideoContainer = styled.div`
display: flex;
`;

const VideoContent = styled.div`
  width: 119.2px;
  height: 211.91px;
  background: #ffcdd2;
  border-radius: 15px;
  margin: 5px;
`;

const Video = styled.video`
 width: 119.2px;
 border-radius: 15px;
 margin: 10px;
 &:hover {
    opacity: 1.2;
  height: 210.02px;
    width: 117px;
    outline: none;
    cursor: pointer;
  }
`;