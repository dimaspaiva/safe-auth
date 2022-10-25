import { CreateUser } from "../models/User";

export const createUser: CreateUser = async (user) => {
  const { password, ...newUser } = user;

  if (!newUser.name) {
    throw new Error("Failed to create user - Missing property name");
  }
  if (!newUser.email) {
    throw new Error("Failed to create user - Missing property email");
  }
  if (!password) {
    throw new Error("Failed to create user - Missing property password");
  }

  return {
    id: Math.floor(Math.random() * 10000).toString(),
    ...newUser,
  };
};
