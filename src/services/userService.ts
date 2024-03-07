const db = [
  {
    name: "Victor",
    email: "primeiroEmails@gmail.com",
  },
  {
    name: "Victor",
    email: "segundoEmails@gmail.com",
  },
];
export class UserService {
  createUser = (name: string, email: string) => {
    if (!name || !email) {
      console.error("Invalid user data");
      return;
    }
    const user = {
      name,
      email,
    };

    db.push(user);
  };

  getAllUsers = () => {
    return db;
  };
  getUserByEmail = (email: string) => {
    const result = db.find((user) => {
      return user.email === email;
    });
    return result;
  };
}
