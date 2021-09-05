# Fakebook

Facebook의 `로그인 / 회원가입 페이지` 와 `메인페이지`만 클론코딩 해보았습니다!

![login](https://user-images.githubusercontent.com/75834421/132103354-eff697df-975b-4696-b7a6-85d11f51e8b0.png)
![main](https://user-images.githubusercontent.com/75834421/132103335-7702f9e6-3910-4c69-aff9-7e28ee429853.png)

[📺소개 영상 보러 가기](https://www.youtube.com/watch?v=CBZ22u1n6HU)

<br/>

## 🎀 목표

- Backend와 협업해서 `기본적인 CRUD` 제대로 구현

- 클론코딩이므로 css와 화면 구성은 Facebook과 최대한 똑같게!

- 좋아요🧡 와 댓글 CRUD 구현

<br/>

## 👩🏻‍🤝‍🧑🏼 기간 및 인원

- 기간: 7일

- 인원: 프론트 엔드 2명, 백엔드 2명

<br/>

## 🎁 사용 기술

- Frontend

  > 기본 스택 : `React with JavaScript`, `React-Router`, `material-UI`, `Styled-components`
  >
  > 상태 관리 : `Redux`, `Redux-Thunk`, `Immer`
  >
  > 정적 파일 저장소 및 배포 : `AWS S3`, `Route 53`

- Backend

  > 기본 스택 : `NodeJS`
  >
  > DataBase : `MongoDB`
  >
  > [Backend repository 보러가기](https://github.com/ombreman/cloneproject_backend)

<br/>

## 🧩 담당한 기능

- 메인 페이지 화면 구성

- 포스트 CRUD

- 좋아요 기능

- 댓글 CRUD

<br/>

## 🤦🏻‍♀️ 어려웠던 부분

### 게시글이 일정 줄 이상 넘어가면 모달 height 및 폰트 사이즈 조절

- 기능 예시

  ![폰트크기변경예시](https://user-images.githubusercontent.com/75834421/132114805-509c9e05-ad80-4c52-8c61-a2359f4ce273.gif)

  <br/>

- 코드 부분

1. 처음에는 실제로 입력한 게시글의 문장수에 따라 폰트 크기를 변동하려 했지만 입력할때 변동되는 `스크롤 높이` 파악이 더 빠르다고 판단하고 그 기준으로 `폰트 크기 및 모달 전체 height 조정` 하기로 결정!

2. textarea의 `onClick`으로 폰트 크기 조정, `onInput`을 이용해 입력할 때마다 `scrollHeight` 파악 후 모달 전체 height 조정

3. 이미지 preview가 있는지에 따라서도 나눠서 모달 height 조절, 일정 높이 이상이면 `resizeModal` 함수 실행 안 되도록 구현!

   ```jsx
       const resizeModal = (h) => {
       let new_height = h + 17.5;
           if (new_height > 35) {
             return;
           } else {
             setHeight(new_height);
           }
       };

       ...

       const sizeSmaller = (event) => {
           if (event.target.scrollHeight > 152) {
             setSize(1.5);
           }
         };

         const sizeBigger = (event) => {
           if (event.target.value === "") {
             setSize(1.9);
           }
           setPostText(event.target.value);
         };

         const resize = () => {
           if (textInput === null || textInput.current === null) {
             return;
           }
           let textArea = textInput.current;
           console.log(textArea.scrollHeight);
           textArea.style.height = "38px";
           textArea.style.height = textArea.scrollHeight + "px";
           if (textArea.scrollHeight > 144) {
             if (previewImage) {
               return props.resizeModal(textArea.scrollHeight / 16 + 17);
             } else {
               props.resizeModal(textArea.scrollHeight / 16);
             }
           }
         };

       ...

       <textarea
         value={postText}
         ref={textInput}
         style={{ fontSize: `${size}em` }}
         onClick={sizeSmaller}
         onChange={sizeBigger}
         onInput={resize}
         placeholder={`${
           userInfo.firstName + userInfo.lastName
         }님, 무슨 생각을 하고 계신가요?`}
       />
   ```

<br/>

### 스타일 커스텀 하기

1. `Material UI`에서 Dialog(모달)과 icon 사용

2. inline style로 해결 할 수 있을 줄 알았지만 적용 불가

3. 공식 문서와 검색을 통해 해결: props를 넣어주거나 `makeStyles`를 사용해야함!

   ```jsx
   // props로 넣어주는 경우
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

   // makeStyle 사용
   import { makeStyles } from "@material-ui/core/  styles";

   ...

   const useStyles = makeStyles((theme) => ({
     smileBtn: {
       position: "absolute",
       bottom: "5em",
       right: "0.9em",
       fontSize: "1.8em",
       color: "#dadde1",
       "&:hover": {
         color: "#bdc3c7",
       },
     },
   }));

   ...

   <SentimentSatisfiedRounded className={classes.  smileBtn} />
   ```

<br/>

## ✍🏻 프로젝트를 마치며..

- 좋았던 점

  - 백엔드와 data를 주고 받고 redux module을 만들어서 action을 dispatch 하는 연습을 좀 더 제대로 할 수 있었습니다!

  - facebook의 UI, UX 부분을 최대한 똑같이 구현하려고 하다보니 전에는 생각해보지 못했던걸 시도 할 수 있어서 좋았습니다!

- 다음의 목표

  - 반응형 CSS를 제대로 적용하고 싶습니다.

  - 채팅 기능을 구현하고 싶습니다.
