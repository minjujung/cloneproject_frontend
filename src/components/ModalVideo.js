import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import styled from "styled-components";
import Spinner from "../elements/Spinner";

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
  console.log(props)
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>

        <video controls width="300px">
<source src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-19-17-37-52.mp41626684611126?alt=media&token=613224f5-a061-44ba-b71b-354df3fe694f"
        type="video/webm"/>
</video>

    </div>
  );

  return (
    <div>
        <VideoContainer>
      {/* <Spinner/> */}
{/* <Video onClick={handleOpen} src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-19-17-37-52.mp41626684611126?alt=media&token=613224f5-a061-44ba-b71b-354df3fe694f"></Video> */}
{/* <Video onClick={handleOpen} src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-19-19-30-46.mp41626690661531?alt=media&token=527f5c99-2ecb-43b0-b57c-8b05a2d4cb27"></Video> */}
<Video  onClick={handleOpen} src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-19-19-38-08.mp41626691096987?alt=media&token=3ffdfde3-56fc-4f28-b61e-d8e213b7b891"></Video>
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