import React from "react";
import styled from "styled-components";

const Input = ({ placeholder, width }) => {
  const style = { width };
  return <InputBox type="text" placeholder={placeholder} {...style} />;
};

Input.defaultProps = {
  placeholder: null,
  width: null,
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
