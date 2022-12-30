import { validateEmail, validatePassword } from "./validateFunctions";

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

  test("should return false if email is empty", () => {
    const email = "";
    const validate = validateEmail(email);

    expect(validate).toBe(false);
  });
});

describe("Validade Password function", () => {
  test("should return true if password is valid on regEx test", () => {
    const password = "Oi123#!@";
    const validate = validatePassword(password);

    expect(validate).toBe(true);
  });

  test("should return false if password isn't valid on regEx test", () => {
    const password = "oi";
    const validate = validatePassword(password);

    expect(validate).toBe(false);
  });
});
