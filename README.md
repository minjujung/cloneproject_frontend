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

<br/>

### 게시글이 일정 줄 이상 넘어가면 폰트 사이즈 조절

### 스타일 커스텀 하기

1. `Material UI`에서 Dialog(모달)과 icon 사용

2. inline style로 해결 할 수 있을 줄 알았지만 적용 불가

3. 공식 문서와 검색을 통해 해결: props를 넣어주거 `makeStyles`를 사용해야함!

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
import { makeStyles } from "@material-ui/core/styles";

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

<SentimentSatisfiedRounded className={classes.smileBtn} />
```
