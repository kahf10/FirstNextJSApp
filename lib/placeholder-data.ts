import { hashSync } from "bcryptjs";

const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "John Doe",
    email: "johndoe@example.com",
    password: hashSync("password123", 10),
  },
];

export { users };
