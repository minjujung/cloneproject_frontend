import React from "react";
import Dialog from "@material-ui/core/Dialog";

export default function Modal({
  children,
  width,
  height,
  btn,
  padding,
  open,
  handleClickOpen,
  handleClose,
}) {
  return (
    <div style={{ width: "100%" }}>
      <span onClick={handleClickOpen}>{btn}</span>
      <Dialog
        open={open}
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
