import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import styled from "styled-components";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [openNum, setNum] = React.useState(0);

const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
const openVedio1 = () => {
  setOpen(true);
  setNum(1);
}
const openVedio2 = () => {
  setOpen(true);
  setNum(2);
}
const openVedio3 = () => {
  setOpen(true);
  setNum(3);
}
const openVedio4 = () => {
  setOpen(true);
  setNum(4);
}

  const body = (
    <div style={modalStyle} className={classes.paper}>

  <video controls width="300px">
{openNum===1?
  <source src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-21-16-14-21.mp41626851890422?alt=media&token=22e5df62-3a12-48ca-a2d7-a112a8ef7940"
        type="video/webm"/>
:<div></div>}
{openNum===2?
  <source src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-21-16-14-15.mp41626851678200?alt=media&token=9c2ad581-7197-4bb3-bbff-be181051982a"
        type="video/webm"/>
:<div></div>}
{openNum===3?
  <source src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-21-16-10-24.mp41626851432687?alt=media&token=7a9b6f73-0867-45f4-99ff-980e2d3c0359"
        type="video/webm"/>
:<div></div>}
{openNum===4?
  <source src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-21-16-28-15.mp41626852512947?alt=media&token=e13c9c48-c197-4a61-b317-5f3049312bb1"
        type="video/webm"/>
:<div></div>}
</video>

    </div>
  );

  return (
    <div>
        <VideoContainer>
<Video onClick={openVedio1} src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-21-16-14-21.mp41626851890422?alt=media&token=22e5df62-3a12-48ca-a2d7-a112a8ef7940"></Video>
<Video onClick={openVedio2} src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-21-16-14-15.mp41626851678200?alt=media&token=9c2ad581-7197-4bb3-bbff-be181051982a"></Video>
<Video onClick={openVedio3} src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-21-16-10-24.mp41626851432687?alt=media&token=7a9b6f73-0867-45f4-99ff-980e2d3c0359"></Video>
<Video onClick={openVedio4} src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-21-16-28-15.mp41626852512947?alt=media&token=e13c9c48-c197-4a61-b317-5f3049312bb1"></Video>
</VideoContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}


const VideoContainer = styled.div`
display: flex;
`;


const Video = styled.video`
 width: 111.2px;
 border-radius: 15px;
 margin: 10px;
 &:hover {
    opacity: 1.2;
    width: 113px;
    outline: none;
    cursor: pointer;
  }
`;