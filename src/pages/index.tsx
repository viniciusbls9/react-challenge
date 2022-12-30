import { fakeLogin } from "../utils/fakeLogin/fakeLogin";
import { ChangeEvent, useMemo, useState } from "react";
import Button from "../components/Button";
import {
  validateEmail,
  validatePassword,
} from "../utils/validateFunctions/validateFunctions";

// Tarefas:
// [x] - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// [x] - Desabilite o botão de Login caso o e-mail ou senha esteja inválidos.
// [x] - Desabilite o botão de Login equanto você está executando o login.
// [] - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// [] - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleEmailField = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value;

    setLoginData({ ...loginData, email: value });
  };

  const handlePasswordField = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value;

    setLoginData({ ...loginData, password: value });
  };

  const handleLogin = async () => {
    setButtonDisabled(true);
    try {
      if (
        validateEmail(loginData.email) &&
        validatePassword(loginData.password)
      ) {
        await fakeLogin(loginData);
      }
    } catch (error) {
    } finally {
      setButtonDisabled(false);
    }
  };

  const disabledButton = useMemo(() => {
    if (
      !validateEmail(loginData.email) ||
      !validatePassword(loginData.password)
    ) {
      return true;
    }
    return false;
  }, [loginData.email, loginData.password, fakeLogin]);

  return (
    <div className="wrapper">
      <div className="login-form">
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        <div className="errorMessage"></div>
        <div className="row">
          <label htmlFor={"email"}>Email</label>
          <input
            id={"email"}
            type={"email"}
            value={loginData.email}
            onChange={handleEmailField}
            autoComplete="off"
          />
        </div>
        <div className="row">
          <label htmlFor={"password"}>Password</label>
          <input
            id={"password"}
            type={"password"}
            value={loginData.password}
            onChange={handlePasswordField}
          />
        </div>

        <div className="button">
          <Button
            label="Login"
            onClick={() => handleLogin()}
            disabled={disabledButton || buttonDisabled}
          />
        </div>
      </div>
    </div>
  );
}
