interface FakeLoginProps {
  email: string;
  password: string;
}

export function fakeLogin({ email, password }: FakeLoginProps) {
  const delay = (0.7 + Math.random() * 2) * 1000;

  return new Promise((resolve) => {
    setTimeout(function () {
      if (password === "password123" && !!email) {
        resolve(true);
      }
    }, delay);
  });
}
