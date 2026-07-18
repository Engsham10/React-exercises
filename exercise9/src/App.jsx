import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  async function searchUser() {
  
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );

      const data = await response.json();

      if (response.ok) {
        setUser(data);
        setError("");
      } else {
        setUser(null);
        setError("User not found");
      }
    } catch (error) {
      console.error("Failed to fetch:", error);
      setUser(null);
      setError("Something went wrong");
    }
  }

  return (
    <>
      <h2>GitHub User Search</h2>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={searchUser}>Search</button>

      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="120" />
          <h3>{user.name || user.login}</h3>
          <p>
            <strong>Username:</strong> {user.login}
          </p>
          <p>
            <strong>Public Repositories:</strong> {user.public_repos}
          </p>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

export default App;