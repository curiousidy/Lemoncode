import React from "react";

interface Props {
  handleNavigation: (event: React.FormEvent<HTMLFormElement>) => void;
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
}

export const LoginComponent: React.FC<Props> = (props) => {
  const { handleNavigation, username, password, setUsername, setPassword } = props;

  return (
    <>
      <form onSubmit={handleNavigation}>
        <h2>Hello from login page</h2>

        <div>
          <div>
            <label>Username: </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
};
