import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

export default function Modal({ children, width, height, btn, padding }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ width: "100%" }}>
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
            padding: `${padding ? padding : "16px"}`,
            borderRadius: "0.6em ",
          },
        }}
        BackdropProps={{
          style: {
            background: "#e4e6e89e",
            backdropFilter: "blur(2px)",
          },
        }}
      >
        {children}
      </Dialog>
    </div>
  );
}
