export type User = {
  id?: string;
  name: string;
  email: string;
  birthday: Date;
  password: string;
};

export type UserResponse = Omit<User, "password">;

export type CreateUser = (user: User) => Promise<UserResponse>;
