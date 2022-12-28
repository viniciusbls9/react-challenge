function validateEmail(email: string) {
  const regEx = new RegExp(/^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i);

  if (regEx.test(email)) return true;

  return false;
}

export default validateEmail;
