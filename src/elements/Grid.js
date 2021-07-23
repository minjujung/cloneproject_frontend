import React from "react";
import styled from "styled-components";

const Grid = ({ children, is_flex, padding, space_between, relative }) => {
  const style = { is_flex, padding, space_between, relative };
  return <GridBox {...style}>{children}</GridBox>;
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  padding: false,
  space_between: false,
  relative: false,
};

export default Grid;

const GridBox = styled.div`
  ${(props) => (props.padding ? `padding: ${props.padding};` : null)};
  ${(props) => (props.is_flex ? `display: flex; align-items: center;` : "")};
  ${(props) => (props.space_between ? `justify-content:space-between` : "")};
  ${(props) => (props.relative ? `position: relative;` : "")};
`;
