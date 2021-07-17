import React from "react";
import Modal from "../components/Modal";
import styled from "styled-components";

const Login = (props) => {
  console.log(props);
  return (
    <>
      <Background>
        <Div>
          <BackgroundC>
            <FacebookLogo>
              <Image src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
              <h2>
                facebook에서 전세계에 있는 친구, 가족, 지인들과 함께 이야기를
                나눠보세요.
              </h2>
            </FacebookLogo>

            <LoginBox>
              <Input placeholder={"이메일"}></Input>
              <Input placeholder={"비밀번호"} type={"password"}></Input>
              <Button>로그인</Button>
              <P>비밀번호를 잊으셨나요?</P>
              <Hr width={"90%"} />
              <Modal>새 계정 만들기</Modal>
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
    </>
  );
};

export default Login;

const Background = styled.div`
  width: 100%;
  height: 100%;
  font-size: 12px;
  background: #fff;
  color: #1c1e21;
  display: block;
  line-height: 1.34;
`;
const BackgroundC = styled.div`
  display: flex;
  /* padding-bottom: 237px;
  padding-top: 85px; */
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding-bottom: 100px;
    padding-top: 0px;
  }
`;
const LoginBox = styled.div`
  padding-bottom: 24px;
  padding-top: 10px;
  align-items: center;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  box-sizing: border-box;
  text-align: center;
  padding: 20px 0 28px;
  width: 396px;
  display: block;
  word-wrap: break-word;
  margin: 10px;
`;
const FacebookLogo = styled.div`
  width: 500px;
  box-sizing: border-box;
  margin-right: 0;
  padding-right: 32px;
  margin-top: 100px;
  text-align: left;
  font-size: 16px;
`;
const Bottom = styled.div`
  padding-top: 20px;
  display: block;
  background: #fff;
  &:hover {
    opacity: 0.8;
    outline: none;
    background-color: #eee;
  }
`;
const Input = styled.input`
  font-size: 17px;
  padding: 14px 16px;
  width: 330px;
  height: 52;
  padding: 14px 16px;
  border-radius: 6px;
  border: 1px solid #dddfe2;
  box-shadow: 0 0 0 2px #e7f3ff;
  margin-bottom: 12px;
`;
const Image = styled.img`
  margin: -28px;
  width: 300px;
  height: 100px;
`;
const Button = styled.button`
  margin-top: 6px;
  background-color: #1877f2;
  width: 364px;
  height: 48px;
  padding: 0px 16px;
  font: 20px;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 20px;
`;
const Div = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: center;
  background: #f0f2f5;
`;

const ButtonText = styled.div`
  height: 20%;
  color: #737373;
  max-width: 60%;
  margin: auto;
`;

const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: #ccc;
`;

const P = styled.p`
  color: #1877f2;
  font-size: 14px;
  font-weight: 500;
`;
