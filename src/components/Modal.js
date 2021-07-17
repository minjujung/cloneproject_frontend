import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

export default function Modal({ children, width, height, btn }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <span onClick={handleClickOpen}>{btn}</span>
      <Dialog
        open={open}
        // disableBackdropClick
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            width: `${width}`,
            height: `${height}`,
            padding: "16px",
          },
        }}
        BackdropProps={{
          style: {
            background: "rgba(255,255,255,0.2)",
          },
        }}
      >
        {children}
      </Dialog>
    </div>
  );
}

const PostButton = styled.button`
  border: none;
  width: 100%;
  font-size: 16px;
  padding: 0.6em;
  border-radius: 30px;
  background-color: #f0f2f5;
  color: #606266;
  text-align: left;
  &:hover {
    background-color: #e4e6e8;
  }
`;
