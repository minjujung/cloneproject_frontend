import React from "react";
import styled from "styled-components";

const Input = ({ placeholder }) => {
  return <InputBox type="text" placeholder={placeholder} />;
};

Input.defaultProps = {
  placeholder: null,
};

export default Input;

const InputBox = styled.input`
  width: 100%;
  font-size: 14px;
  padding: 0.8em;
  border-radius: 30px;
  background-color: #f0f2f5;
  border: none;
  outline: none;
`;
