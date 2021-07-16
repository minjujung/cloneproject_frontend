import React, { Children } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

export default function Modal({ children, width, height }) {
  console.log(width, height);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
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
