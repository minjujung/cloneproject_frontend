import React, { useState } from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { MoreHoriz } from "@material-ui/icons";

import { useDispatch } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    width: "10em",
    height: "5.2em",
    fontSize: "1em",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: "#F0F2F5",
    },
    padding: "0.3em",
  },
}))(MenuItem);

export default function CommentMenu({ cmtId, postId, cmtText, selectCmt }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [editText, setEditText] = useState("");
  const [editField, setEditField] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const updateCmt = () => {
    setAnchorEl(null);
    selectCmt(cmtId);
    setEditField(true);
  };

  const deleteCmt = () => {
    dispatch(commentActions.deleteCommentDB(cmtId, postId));
  };

  return (
    <div>
      <Button onClick={handleClick}>
        <MoreHoriz style={{ fontSize: "1.2em", color: "#808080" }} />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={updateCmt}>수정</StyledMenuItem>
        <StyledMenuItem onClick={deleteCmt}>삭제</StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

const Button = styled.button`
  background-color: white;
  border-radius: 50%;
  border: none;
  margin-left: 1em;
  padding: 0.6em;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  align-items: center;
  &:hover {
    background-color: #f0f2f5;
  }
`;
