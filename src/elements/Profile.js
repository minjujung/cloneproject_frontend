import React from "react";
import styled from "styled-components";
import profile from "../images/profile.jpg";

const Profile = ({ margin, src, alignSelf }) => {
  const style = { margin, alignSelf };
  return <Image {...style} src={src} alt="profile" />;
};

Profile.defualtProps = {
  src: { profile },
  margin: false,
  alignSelf: false,
};

export default Profile;

const Image = styled.img`
  width: 2.3em;
  height: 2.3em;
  border-radius: 50%;
  ${(props) => (props.margin ? `margin: ${props.margin};` : null)}
  ${(props) => (props.alignSelf ? `align-self: ${props.alignSelf};` : null)}
`;
