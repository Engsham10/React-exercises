const Logout = ({ username, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h2>Welcome {username}</h2>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;