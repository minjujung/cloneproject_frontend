import React from "react";
import styled from "styled-components";

const Post = ({ children }) => {
  return <Card>{children}</Card>;
};

Post.defaultProps = {
  children: null,
};

export default Post;

const Card = styled.div`
  width: 35em;
  height: auto;
  margin-bottom: 1em;
  background-color: white;
  border-radius: 7px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
