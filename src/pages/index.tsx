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
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleLoginFields = (
    event: ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const { value } = event.target;

    setLoginData({ ...loginData, [field]: value });

    if (validateEmail(loginData.email)) {
      setButtonDisabled(false);
      return;
    }
    setButtonDisabled(true);
  };

  const handleLogin = async () => {
    setButtonDisabled(true);
    try {
      await fakeLogin(loginData);
    } catch (error) {
    } finally {
      setButtonDisabled(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="login-form">
        <h1>Login Form 🐞</h1>
        <span>{loginData.email}</span>
        <div className="row">
          <label htmlFor={"email"}>Email</label>
          <input
            id={"email"}
            type={"email"}
            placeholder="email"
            value={loginData.email}
            onChange={(event) => handleLoginFields(event, "email")}
            autoComplete="off"
          />
        </div>
        <div className="row">
          <label htmlFor={"password"}>Password</label>
          <input
            id={"password"}
            type={"password"}
            placeholder="password"
            value={loginData.password}
            onChange={(event) => handleLoginFields(event, "password")}
          />
        </div>

        <div className="button">
          <Button
            label="Login"
            onClick={() => handleLogin()}
            disabled={buttonDisabled}
          />
        </div>
      </div>
    </div>
  );
}
