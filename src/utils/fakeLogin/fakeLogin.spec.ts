import { fakeLogin } from "./fakeLogin";

describe("fakeLogin function", () => {
  test("should resolve promise if email and password are correct", async () => {
    const loginData = {
      email: "beneditoloura@gmail.com",
      password: "password123",
    };

    await expect(fakeLogin(loginData)).resolves.toBe(true);
  });
});
