import USERS from "./users";

const POSTS = [
  {
    imageUrl:
      "https://st2.depositphotos.com/3378121/5531/i/600/depositphotos_55311869-stock-photo-crowd-of-people-in-the.jpg",
    user: USERS[0].user,
    likes: 7820,
    caption: "Walking in the crowd",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "theqwlfqwef",
        comment: "Wow!",
      },
      {
        user: "sdafsfd",
        comment: "Great vibes",
      },
    ],
  },
  {
    imageUrl:
      "https://st2.depositphotos.com/3378121/5531/i/600/depositphotos_55311869-stock-photo-crowd-of-people-in-the.jpg",
    user: USERS[1].user,
    likes: 1,
    caption: "I posted it too",
    profile_picture: USERS && USERS[0].image,
    comments: [
      {
        user: USERS[1].user,
        comment: "Great Job!",
      },
    ],
  },
];

export default POSTS;
