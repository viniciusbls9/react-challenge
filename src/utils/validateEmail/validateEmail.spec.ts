import validateEmail from "./validateEmail";

describe("Validade Email function", () => {
  test("should return true if email is valid on regEx test", () => {
    const email = "beneditoura@gmail.com";
    const validate = validateEmail(email);

    expect(validate).toBe(true);
  });

  test("should return false if email isn't valid on regEx test", () => {
    const email = "beneditoura";
    const validate = validateEmail(email);

    expect(validate).toBe(false);
  });
});
