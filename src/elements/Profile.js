import React from "react";
import styled from "styled-components";
import profile from "../images/profile.jpg";

const Profile = ({ margin, src, alignSelf, width, height }) => {
  const style = { margin, alignSelf, width, height };
  return <Image {...style} src={src} alt="profile" />;
};

Profile.defualtProps = {
  src: { profile },
  margin: false,
  alignSelf: false,
  width: false,
  height: false,
};

export default Profile;

const Image = styled.img`
  ${(props) => (props.width ? `width: ${props.width};` : `width: 2.3em;`)}
  ${(props) => (props.height ? `height: ${props.height};` : `height: 2.3em;`)}
  border-radius: 50%;
  ${(props) => (props.margin ? `margin: ${props.margin};` : null)}
  ${(props) => (props.alignSelf ? `align-self: ${props.alignSelf};` : null)}
`;
