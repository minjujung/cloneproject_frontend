import React from "react";
import styled from "styled-components";

const Chat = ({ handleOpen }) => {
  return (
    <Container>
      <button onClick={handleOpen}> X </button>
      <h1>hello</h1>
    </Container>
  );
};

export default Chat;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 5em;
  z-index: 100;
  width: 21em;
  height: 28em;
  background-color: white;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
