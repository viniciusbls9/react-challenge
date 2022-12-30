export function validateEmail(email: string) {
  if (email === "") return false;

  const regEx = new RegExp(/^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i);

  if (regEx.test(email)) return true;

  return false;
}

export function validatePassword(password: string) {
  const regEx = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  );

  if (regEx.test(password)) return true;

  return false;
}
