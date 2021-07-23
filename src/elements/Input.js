import React, { forwardRef } from "react";
import styled from "styled-components";

import { Gif, Note, SentimentSatisfiedRounded } from "@material-ui/icons";

const Input = forwardRef(
  ({ placeholder, width, value, _onChange, _onKeyPress, icons }, ref) => {
    const style = { width };
    return (
      <Container {...style}>
        <InputBox
          value={value}
          onChange={_onChange}
          onKeyPress={_onKeyPress}
          type="text"
          placeholder={placeholder}
          ref={ref}
          {...style}
        />
        {icons ? (
          <IconSet>
            {" "}
            <SentimentSatisfiedRounded style={iconStyle} />
            <Gif style={{ ...iconStyle, fontSize: "1.6em" }} />
            <Note style={iconStyle} />
          </IconSet>
        ) : null}
      </Container>
    );
  }
);
Input.defaultProps = {
  placeholder: null,
  width: null,
  value: "",
  _onChange: () => {},
  _onKeyPress: () => {},
};

export default Input;

const Container = styled.div`
  position: relative;
  ${(props) =>
    props.width ? `width: ${parseInt(props.width) + 3.6}em;` : `width: 90%;`}
  padding: 0.8em;
  border-radius: 30px;
  background-color: #f0f2f5;
  display: flex;
`;

const InputBox = styled.input`
  ${(props) => (props.width ? `width: ${props.width}em;` : `width: 80%;`)}
  font-size: 14px;
  border: none;
  outline: none;
  background-color: transparent;
`;

const iconStyle = { fontSize: "1.3em", color: "rgb(167 169 174)" };

const IconSet = styled.div`
  position: absolute;
  right: 1.5em;
  top: 0em;
  display: flex;
  height: 100%;
  align-items: center;
`;
