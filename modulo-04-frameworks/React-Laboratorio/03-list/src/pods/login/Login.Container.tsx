import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginComponent } from './Login.Component';

const LoginContainer:FC = () => {
    const navigate = useNavigate();
    const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/list");
        // if (username === "admin" && password === "test") {
        //   navigate("/list");
        // } else {
        //   alert("User / password not valid, psst... admin / test");
        // }
      };
      return <LoginComponent handleNavigation = {handleNavigation}/>
}

export default LoginContainer