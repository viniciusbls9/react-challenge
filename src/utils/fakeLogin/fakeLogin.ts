import {
  validateEmail,
  validatePassword,
} from "../validateFunctions/validateFunctions";

interface FakeLoginProps {
  email: string;
  password: string;
}

export function fakeLogin({ email, password }: FakeLoginProps) {
  const delay = (0.7 + Math.random() * 2) * 1000;

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (validatePassword(password) && validateEmail(email)) {
        resolve(true);
      } else {
        reject({ error: "e-mail or password wrong." });
      }
    }, delay);
  });
}
