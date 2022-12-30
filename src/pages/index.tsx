import { fakeLogin } from "../utils/fakeLogin/fakeLogin";
import { ChangeEvent, useState } from "react";
import Button from "../components/Button";

// Tarefas:
// [x] - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// [] - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// [] - Desabilite o botão de Login equanto você está executando o login.
// [] - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// [] - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value;

    setLoginData({ ...loginData, email: value });
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value;

    setLoginData({ ...loginData, password: value });
  };

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
            onChange={handleEmail}
            autoComplete="off"
          />
        </div>
        <div className="row">
          <label htmlFor={"password"}>Password</label>
          <input
            id={"password"}
            type={"password"}
            value={loginData.email}
            onChange={handlePassword}
          />
        </div>

        <div className="button">
          <Button label="Login" onClick={() => fakeLogin(loginData)} />
        </div>
      </div>
    </div>
  );
}
