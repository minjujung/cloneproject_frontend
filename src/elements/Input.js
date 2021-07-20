import React, { forwardRef } from "react";
import styled from "styled-components";

const Input = forwardRef(
  ({ placeholder, width, value, _onChange, _onKeyPress }, ref) => {
    const style = { width };
    return (
      <InputBox
        value={value}
        onChange={_onChange}
        onKeyPress={_onKeyPress}
        type="text"
        placeholder={placeholder}
        ref={ref}
        {...style}
      />
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

const InputBox = styled.input`
  ${(props) => (props.width ? `width: ${props.width};` : `width: 90%; `)}
  font-size: 14px;
  padding: 0.8em;
  border-radius: 30px;
  background-color: #f0f2f5;
  border: none;
  outline: none;
`;
