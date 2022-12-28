import validateEmail from "../validateEmail/validateEmail";

interface FakeLoginProps {
  email: string;
  password: string;
}

export function fakeLogin({ email, password }: FakeLoginProps) {
  const delay = (0.7 + Math.random() * 2) * 1000;

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (password === "password123" && validateEmail(email)) {
        resolve(true);
      } else {
        reject({ error: "e-mail or password wrong." });
      }
    }, delay);
  });
}
