interface User {
  id: number;
  email: string;
  password: string;
}

export const users: User[] = [
  {
    id: 1,
    email: "john@example.com",
    password: "password123"
  },
  {
    id: 2, 
    email: "jane@example.com",
    password: "securepass456"
  },
  {
    id: 3,
    email: "bob@example.com", 
    password: "bobpass789"
  }
];

export const findUserByEmail = (email: string) => {
  const user = users.find((user) => user.email === email);
  return user;
};

