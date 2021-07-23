import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { MoreHoriz, Create, Delete } from "@material-ui/icons";

import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import EditPost from "./EditPost";
import Modal from "./Modal";

export default function EditMenu(props) {
  const { _id } = props;

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [height, setHeight] = useState(27);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const resizeModal = (h) => {
    let new_height = h + 17.5;
    if (new_height > 35) {
      return;
    } else {
      setHeight(new_height);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const deletePost = () => {
    dispatch(postActions.deletePostDB(_id));
    handleCloseMenu();
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHoriz />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <Modal
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          width="32em"
          height={`${height}em`}
          padding="0"
          btn={
            <MenuItem onClick={handleClose}>
              <Create style={{ marginRight: "0.5em" }} />
              게시물 수정
            </MenuItem>
          }
        >
          <EditPost
            handleClose={handleClose}
            resizeModal={resizeModal}
            handleCloseMenu={handleCloseMenu}
            {...props}
          />
        </Modal>

        <MenuItem onClick={deletePost}>
          <Delete style={{ marginRight: "0.5em" }} />
          게시물 삭제
        </MenuItem>
      </Menu>
    </div>
  );
}
