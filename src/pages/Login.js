import React, { useRef, useState } from "react";
import Modal from "../components/Modal";
import styled from "styled-components";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {Background, Div, BackgroundC, FacebookLogo, Image, LoginBox, Input, Button, Hr, P, SignUpB, SignUpT, Bottom, ButtonText,
  H1,P2,DivM,DivMC,NameBox,InputFirstN,InputSecondN,InputEmail,DivPicture,ProfileImage,DivSubButton,SignUpBM,A} from "../components/LoginStyle";
import { actionCreators as ProfileActions } from "../redux/modules/profile";
import { actionCreators as LikeActions } from "../redux/modules/like";
import { actionCreators as UserActions } from "../redux/modules/user";
import { useSelector, useDispatch } from "react-redux";
import x from "../images/x.png";
import Tooltip from '@material-ui/core/Tooltip';
import ModalVedio from "../components/ModalVideo";
import Spinner from "../elements/Spinner";

const Login = (props) => {
  const [open, setOpen] = useState(false);
  // const [like, setLike] = useState(0);
  // const payloadLike = useSelector((state) => state.like.like_cnt)
  // const [likeState, setLikeState] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log("close!");
    setOpen(false);
  };

  const dispatch = useDispatch();
  const profileInput = React.useRef();
  const is_uploading = useSelector(state => state.profile.uploading);
  const profile_url = useSelector(state => state.profile.profile_url);
  
  const [FirstName, setFirst] = useState("");
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [emailL, setEmailL] = useState("");
  const [pwdL, setPwdL] = useState("");

  
  const selectFile = () => {
    let profile = profileInput.current.files[0];
    dispatch(ProfileActions.uploadProfileFB(profile))
  }

const logout = () => {
  dispatch(UserActions._logOut());
}

  const signUp = () => {
    dispatch(UserActions.signUpDB(FirstName, Name, email, pwd, profile_url, handleClose));
  }

  const _logIn = () => {
    dispatch(UserActions.loginDB(emailL,pwdL));
  }

  // const like_plus = () => {
  //   if(!likeState){
  //     let _like = like+1
      
  //     setLike(_like);
  //     setLikeState(true);
  //   console.log(likeState);
  //   console.log(_like)
  //   dispatch(LikeActions.setLike(_like));
  //   }
    
  //   else {
  //     let _like = like -1
  //     setLike(_like);
  //     setLikeState(false);
  //   console.log(likeState);
  //   dispatch(LikeActions.setLike(_like));
  //   }
  //   console.log(likeState);

  // }

  return (
    <>
        {/* <button onClick={like_plus}>더하기</button> */}
    {/* <input value={payloadLike}/> */}
     {/* <ModalVedio x={"df"}/> */}

      <Background>
        <Div>
          <BackgroundC>
            <FacebookLogo>
        <button onClick={logout}>로그아웃</button>

              <Image src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
              <h2>
                Facebook에서 전세계에 있는 친구, 가족, 지인들과 함께 이야기를
                나눠보세요.
              </h2>



            </FacebookLogo>

            <LoginBox>
              <Input onChange={(e) => {setEmailL(e.target.value)}} placeholder={"이메일"}></Input>
              <Input onChange={(e) => {setPwdL(e.target.value)}} placeholder={"비밀번호"} type={"password"}></Input>
              <Button onClick={_logIn}>로그인</Button>
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
                <div>
                  {is_uploading?<Spinner/>:
                <div>
                <DivPicture>
                <Tooltip title="아래에 카메라 버튼을 클릭하여 프로필 사진을 선택하세요." placement="left">
                  <ProfileImage src={profile_url} ></ProfileImage>
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
                </div>}</div>


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
