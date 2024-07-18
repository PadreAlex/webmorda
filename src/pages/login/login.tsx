import { FormEvent, useState } from "react";
import {
  mainColor,
} from "../../const-colors";
import { LoginForm } from "./form";
const Login = () => {
  const [login, setLogin] = useState<FormEvent<HTMLInputElement>>();
  const [password, setPassword] = useState<FormEvent<HTMLInputElement>>();

  const sendToVerify = async () => {
    const res = await fetch('temp_url')
    const data = await res.json()


  }

  const usernameOnInput = (data: FormEvent<HTMLInputElement>) => {
    setLogin(data)
  }

  const passwordOnEnter = (data: FormEvent<HTMLInputElement>) => {
    setPassword(data)
  }
  return (
    <div
      style={{
        backgroundColor: mainColor,
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoginForm>
        <input type="text" placeholder="Username" onInput={(data) => usernameOnInput(data)} />
        <input type="password" placeholder="Password" onInput={(data) => passwordOnEnter(data)} />
        <button>Login</button>
      </LoginForm>
    </div>
  );
};

export default Login;
