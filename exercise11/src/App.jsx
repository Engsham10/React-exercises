import { useState } from "react";
import LoginForm from "./LoginForm";
import Logout from "./Logout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <>
      {isLoggedIn ? (
        <Logout
          username={username}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : (
        <LoginForm
          setIsLoggedIn={setIsLoggedIn}
          setUsername={setUsername}
        />
      )}
    </>
  );
}

export default App;