import { createUser } from "../../functions/create-user";

describe("Create User", () => {
  it("should create a new user", async () => {
    const dummyUserData = {
      name: "Jhon Doe",
      email: "jhon.doe@test.ts",
      birthday: new Date("1999-01-01"),
      password: "123456",
    };
    const user = await createUser(dummyUserData);

    expect(user.name).toEqual(dummyUserData.name);
    expect(user.email).toEqual(dummyUserData.email);
    expect(user.birthday).toEqual(dummyUserData.birthday);
    expect(user).toHaveProperty("id");
    expect(user).not.toHaveProperty("password");
  });
});
