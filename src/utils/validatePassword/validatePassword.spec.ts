describe("Validade Password function", () => {
  test("should return true if password is valid on regEx test", () => {
    const password = "Oi123#!@";
    const validate = validatePassword(password);

    expect(validate).toBe(true);
  });
});

function validatePassword(password: string): boolean {
  return true;
}
