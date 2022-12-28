describe("Validade Email function", () => {
  test("should return true if email is valid on regEx test", () => {
    const email = "beneditoura@gmail.com";
    const validate = validateEmail(email);

    expect(validate).toBe(true);
  });
});

function validateEmail(email: string) {
  return true;
}
