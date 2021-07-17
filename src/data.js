import profile from "./images/profile.jpg";

export const data = [
  {
    postId: 2,
    userInfo: {
      userEmail: "test@test.com",
      firstName: "test user name",
      profile: { profile },
    },
    content: {
      picture: [
        "https://i.pinimg.com/564x/08/22/5f/08225f0dc79fc03bad5d89cdbd5d354d.jpg",
      ],
      text: "test text",
      createdAt: "2021 07 13 08 47 13 pm",
    },

    comment: [
      {
        writerInfo: {
          name: "댓글러",
          profile: { profile },
        },
        commentId: 1,
        commentText: "blah blah",
        commentCreatedAt: " 1min ago",
      },
    ],

    like: {
      userList: [],
      likeCnt: 0,
    },
  },
];
