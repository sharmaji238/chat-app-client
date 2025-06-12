export const sampleChats = [
  {
    _id: "1",
    name: "Ravi",
    avatar: ["https://picsum.photos/200"],
    groupChat: false,
    members: ["1", "2"]
  },
  {
    _id: "2",
    name: "Jay",
    avatar: ["https://picsum.photos/201"],
    groupChat: false,
    members: ["1", "2"]
  },
//   {
//     _id: "chat2",
//     name: "Chat Two",
//     avatar: ["https://picsum.photos/202"],
//     groupChat: true,
//     members: ["user3", "user4"]
//   },
  {
    _id: "4",
    name: "Family Group",
    avatar: [
      "https://picsum.photos/203",
      "https://picsum.photos/204",
      "https://picsum.photos/205",
      "https://picsum.photos/206",
    ],
    groupChat: true,
    members: ["1", "2","3"]
  }
];



export const sampleUsers = [
  {
    _id: "1",
    name: "Ravi",
    avatar: ["https://picsum.photos/200"],
    online: true
  },
  {
    _id: "2",
    name: "Jay",
    avatar: ["https://picsum.photos/201"],
    online: false
  },
  {
    _id: "user3",
    name: "User Three fdf fdgdgderfrfer reee rt tr trr tertr rt  tre tf g gf  ffnffff fgf",
    avatar: ["https://example.com/avatar3.jpg"],
    online: true
  }
];


export const sampleMessage = [
  {
    attachments: [],
    content: "Der ka Message hai",
    _id: "sfnsdjkfsdnfkjsbnd",
    sender: {
      _id: "user._id",
      name: "Chaman ",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },

  {
    attachments: [
      {
        public_id: "asdsad 2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "",
    _id: "sfnsdjkfsdnfkdddjsbnd",
    sender: {
      _id: "sdfsdfsdf",
      name: "Chaman  2",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
];