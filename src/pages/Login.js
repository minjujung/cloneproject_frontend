import React, { useRef, useState } from "react";
import Modal from "../components/Modal";
import styled from "styled-components";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {Background, Div, BackgroundC, FacebookLogo, Image, LoginBox, Input, Button, Hr, P, SignUpB, SignUpT, Bottom, ButtonText} from "../components/LoginStyle";
import { actionCreators as ProfileActions } from "../redux/modules/profile";
import { useSelector, useDispatch } from "react-redux";

// todo 중복확인, url, email, name, pw 전송
const Login = (props) => {
  const dispatch = useDispatch();
  const profileInput = React.useRef();
  const is_uploading = useSelector(state => state.profile.uploading);
  const profile_url = useSelector(state => state.profile.profile_url);
  
  const [FirstName, setFirst] = useState("");
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const selectFile = () => {
    // console.log(profileInput.current.files[0]);
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
    <TotalDiv>
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
            >
              <DivM>
              <H1>가입하기</H1>
              <P2 color={"#eee"}>빠르고 쉽습니다.</P2>
              <DivMC>
                <NameBox>
                  <InputFirstN onChange={(e) => {setFirst(e.target.value)}} placeholder={"성(性)"}/>
                  <InputSecondN onChange={(e) => {setName(e.target.value)}} placeholder={"이름(성은 제외)"}/>
                </NameBox>
                <InputEmail onChange={(e) => {setEmail(e.target.value)}} placeholder={"이메일"}/>
                <InputEmail onKeyPress={(e) => {if(e.key === 'Enter'){console.log(e.target.value);}}} onChange={(e) => {setPwd(e.target.value)}} placeholder={"새 비밀번호"} type={"password"}/>

                <DivPicture>
                  <ProfileImage src={profile_url} ></ProfileImage>
                  <DivSubButton>
                  <input disabled={is_uploading} ref={profileInput} onChange={selectFile} style={{ display: "none" }} id="icon-button-file" type="file" />
                  <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </DivSubButton>
                </DivPicture>

                <SignUpBM disabled={is_uploading} width={"200px"}>
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
            <p>
              한국어 English (US) Tiếng Việt Bahasa Indonesia ภาษาไทย Español
              中文(简体) 日本語 Português (Brasil) Français (France) Deutsch
            </p>
            <Hr />
            <p>
              가입하기 로그인 Messenger Facebook LiteWatch 사람페이지페이지
              카테고리 장소 게임 위치 Marketplace Facebook Pay 그룹 채용 정보
              Oculus Portal Instagram 지역 기부 캠페인 서비스 투표 정보 센터
              정보 광고 만들기 페이지 만들기 개발자 채용 정보 개인정보처리방침
              쿠키 AdChoices 이용 약관 고객 센터 설정활동 로그
            </p>
          </ButtonText>
        </Bottom>
      </Background>
      </TotalDiv>
    </>
  );
};

export default Login;

const H1 = styled.h1`
  margin-bottom: -5px;
`;

const P2 = styled.p`
      color: #606770;
      font-size: 13px;
      font-weight: 600;
`;

const DivM = styled.div`
  
`;

const DivMC = styled.div`
background-color: #fff;
    border-radius: 0 0 8px 8px;
    border-top: 1px solid #dadde1;
    box-sizing: border-box;
    padding: 16px;
    position: relative;
    width: 432px;
`;

const NameBox = styled.div`
  display: flex;
  justify-content: center;
`;

const InputFirstN = styled.input`
      width: 170px;
      height: 10px;
      padding: 11px;
      margin: 0px 5px 10px 0px;
    font-size: 15px;
    line-height: 16px;
    background: #f5f6f7;
    border-radius: 5px;
    border: 1px solid #dddfe2;
`;

const InputSecondN = styled.input`
      width: 170px;
      height: 10px;
      padding: 11px;
      margin: 0px 0px 10px 5px;
    font-size: 15px;
    line-height: 16px;
    background: #f5f6f7;
    border-radius: 5px;
    border: 1px solid #dddfe2;
`;

const InputEmail = styled.input`
        width: 375px;
      height: 10px;
      padding: 11px;
      margin: 5px 0px 10px 0px;
    font-size: 15px;
    line-height: 16px;
    background: #f5f6f7;
    border-radius: 5px;
    border: 1px solid #dddfe2;
`;

const TotalDiv = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
`;

const DivPicture = styled.div`
  display: flex;
  margin: 5px 0px 0px 115px;
`;

const ProfileImage = styled.img`
  border-radius: 80px;
  width: 160px;
  height: 160px;
`;

const DivSubButton = styled.div`
text-align: center;
margin: 130px 0px 0px -30px;
`;

const SignUpBM = styled.div`
margin: auto;
  text-align: center;
    margin-top: 10px;
  background-color: #42b72a;
  width: 150px;
  height: 30px;
  padding: 10px 10px 0px 10px;
  border: none;
  border-radius: 6px;
  color: white;
    &:hover {
    opacity: 0.9;
    outline: none;
    background-color: #42b72a;
    cursor: pointer;
  }
`;