function Login({ setUser }) {
  return (
    <main>
      <p className="text-lime">Login</p>
      <button onClick={() => localStorage.setItem("user", "admin")}>Login admin</button>
      <button onClick={() => localStorage.setItem("user", "artist")}>Login artist</button>
    </main>
  )
}

export default Login;
