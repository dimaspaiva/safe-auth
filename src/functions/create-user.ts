import { CreateUser } from "../models/User";

export const createUser: CreateUser = async (user) => {
  const { password: _, ...newUser } = user;
  return {
    id: Math.floor(Math.random() * 10000).toString(),
    ...newUser,
  };
};
