import { validateObject } from "../../src/utils/object-validation";

describe("Object Validation", () => {
  it("should validate a simple object", () => {
    const dummyObject = {
      a: "Lorem Ipsum",
      b: 12,
    };
    const dummyRequired = ["a", "b"];

    expect(() => validateObject(dummyObject, dummyRequired)).not.toThrow();
  });

  it("should throw error when object is missing one required property", () => {
    const dummyObject = {
      a: "Lorem Ipsum",
      b: 12,
    };
    const dummyRequired = ["a", "b", "c"];

    expect(() => validateObject(dummyObject, dummyRequired)).toThrow(
      new Error("Validation failed, missing c property")
    );
  });
});
