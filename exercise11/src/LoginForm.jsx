import { useState } from "react";

const LoginForm = ({ setIsLoggedIn, setUsername }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (username !== "" && password !== "") {
      setUsername(username);
      setIsLoggedIn(true);
    } 
  };

  return (
    <div>
      <h2>Login</h2>

      <label>Username: </label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br /><br />

      <label>Password: </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default LoginForm;