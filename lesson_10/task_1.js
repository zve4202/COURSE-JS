const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

const usersOnline = users.filter((user) => {
        return user.status === "online"
    });

const userNamesOnline = usersOnline.map((user) => {
        return user.username;
    }).join(", ");

alert(`Сейчас в онлайн следующие пользователи: ${userNamesOnline}`);