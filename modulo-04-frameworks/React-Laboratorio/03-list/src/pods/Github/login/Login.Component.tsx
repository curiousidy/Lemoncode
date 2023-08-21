import React from "react";

interface Props {
  handleNavigation: (event) => void;
}

export const LoginComponent: React.FC<Props> = (props) => {
  const {handleNavigation} = props;
  
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <>
      <form onSubmit={handleNavigation}>
        <h2>Hello from login page</h2>

        <div>
          <div>
            <label>Username: </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
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
