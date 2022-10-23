import { safeLoginStart } from ".";

describe("Safe login", () => {
  it("should run the function", () => {
    expect(safeLoginStart()).toBeTruthy();
  });
});
