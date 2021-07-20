import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  font-size: 12px;
  background: #fff;
  color: #1c1e21;
  display: block;
  line-height: 1.34;
`;
export const BackgroundC = styled.div`
  display: flex;
  padding-top: 85px;
  padding-bottom: 200px;
  
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding-bottom: 80px;
    margin-top: -130px;
    margin-left: 90px;
  }
`;
export const LoginBox = styled.div`
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
  height: 349px;
`;
export const FacebookLogo = styled.div`
  width: 500px;
  box-sizing: border-box;
  margin-right: 0;
  padding-right: 32px;
  margin-top: 100px;
  text-align: left;
  font-size: 16px;
`;
export const Bottom = styled.div`
  padding-top: 20px;
  display: block;
  background: #fff;

`;
export const Input = styled.input`
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
export const Image = styled.img`
  margin: -28px;
  width: 300px;
  height: 100px;
`;
export const Button = styled.button`
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
    &:hover {
    opacity: 1.2;
    outline: none;
    background-color: #4267b2;
    cursor: pointer;
  }
`;
export const SignUpB = styled.div`
margin: auto;
  text-align: center;
    margin-top: 30px;
  background-color: #42b72a;
  width: 100px;
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

export const SignUpT = styled.div`
  display: block;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;

export const Div = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: center;
  background: #f0f2f5;
`;

export const ButtonText = styled.div`
  height: 20%;
  color: #737373;
  max-width: 60%;
  margin: auto;
`;

export const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: #ccc;
`;

export const P = styled.p`
  color: #1877f2;
  font-size: 14px;
  font-weight: 500;
`;

export const H1 = styled.h1`
  margin-bottom: -5px;
  margin-top: 15px;
`;

export const P2 = styled.p`
      color: #606770;
      font-size: 13px;
      font-weight: 600;
`;

export const DivM = styled.div`
  
`;

export const DivMC = styled.div`
background-color: #fff;
    border-radius: 0 0 8px 8px;
    border-top: 1px solid #dadde1;
    box-sizing: border-box;
    padding: 16px;
    position: relative;
    width: 432px;
`;

export const NameBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputFirstN = styled.input`
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

export const InputSecondN = styled.input`
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

export const InputEmail = styled.input`
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

export const TotalDiv = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
`;

export const DivPicture = styled.div`
  display: flex;
  margin: 5px 0px 0px 115px;
`;

export const ProfileImage = styled.img`
  border-radius: 80px;
  width: 160px;
  height: 160px;
`;

export const DivSubButton = styled.div`
text-align: center;
margin: 130px 0px 0px -30px;
`;

export const SignUpBM = styled.div`
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

export const A = styled.a`
   word-break: keep-all;
`;