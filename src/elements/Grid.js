import React from "react";
import styled from "styled-components";

const Grid = ({ children, is_flex, padding }) => {
  const style = { is_flex, padding };
  return <GridBox {...style}>{children}</GridBox>;
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  padding: false,
};

export default Grid;

const GridBox = styled.div`
  ${(props) => (props.padding ? `padding: ${props.padding};` : null)};

  ${(props) => (props.is_flex ? `display: flex; align-items: center;` : "")};
`;
