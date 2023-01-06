import { fakeLogin } from "./fakeLogin";

describe("fakeLogin function", () => {
  test("should resolve promise if email and password are correct", async () => {
    const loginData = {
      email: "beneditoloura@gmail.com",
      password: "Passw@rd123",
    };

    await expect(fakeLogin(loginData)).resolves.toBe(true);
  });

  test("should reject promise if email or password are wrong", async () => {
    const loginData = {
      email: "",
      password: "1",
    };

    await expect(fakeLogin(loginData)).rejects.toMatchObject({
      error: "e-mail or password wrong.",
    });
  });
});
