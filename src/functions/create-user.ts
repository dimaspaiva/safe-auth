import { CreateUser } from "../models/User";
import { validateObject } from "../utils/object-validation";

const requiredUserProps = ["name", "email"];

export const createUser: CreateUser = async (user) => {
  const { password, ...newUser } = user;

  validateObject(newUser, requiredUserProps);
  if (!password) {
    throw new Error("Validation failed, missing password property");
  }

  return {
    id: Math.floor(Math.random() * 10000).toString(),
    ...newUser,
  };
};
