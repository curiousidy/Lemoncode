import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginComponent } from './Login.Component';

const LoginContainer: FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <LoginComponent
      handleNavigation={handleNavigation}
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
    />
  );
}

export default LoginContainer;
