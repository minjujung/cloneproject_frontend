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
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: '0px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 0),
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
  <source src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-21-16-10-24.mp4?alt=media&token=15f3d007-d086-468f-a6aa-ebe65d347633"
        type="video/webm"/>
:<div></div>}
{openNum===2?
  <source src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-21-16-14-15.mp4?alt=media&token=bc0749c0-54b3-4951-99fc-1164e66ffe87"
        type="video/webm"/>
:<div></div>}
{openNum===3?
  <source src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-21-16-14-21.mp4?alt=media&token=971da8dc-9f1d-4f29-8d12-bf3e6c02a6cf"
        type="video/webm"/>
:<div></div>}
{openNum===4?
  <source src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-21-16-28-15.mp4?alt=media&token=8fc70a71-6808-4051-b1aa-0e576bbee7bb"
        type="video/webm"/>
:<div></div>}
</video>

    </div>
  );

  return (
    <div>
        <VideoContainer>
<Video onClick={openVedio1} src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-21-16-10-24.mp4?alt=media&token=15f3d007-d086-468f-a6aa-ebe65d347633"></Video>
<Video onClick={openVedio2} src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-21-16-14-15.mp4?alt=media&token=bc0749c0-54b3-4951-99fc-1164e66ffe87"></Video>
<Video onClick={openVedio3} src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-21-16-14-21.mp4?alt=media&token=971da8dc-9f1d-4f29-8d12-bf3e6c02a6cf"></Video>
<Video onClick={openVedio4} src="https://firebasestorage.googleapis.com/v0/b/facebookclone-93099.appspot.com/o/profiles%2FKakaoTalk_Video_2021-07-21-16-28-15.mp4?alt=media&token=8fc70a71-6808-4051-b1aa-0e576bbee7bb"></Video>
<Video style={{backgroundColor:"#A4A4A4"}}></Video>
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
 width: 100.2px;
 border-radius: 15px;
 margin: 7px;
 &:hover {
    opacity: 0.8;
    /* width: 113px; */
    outline: none;
    cursor: pointer;
  }
`;