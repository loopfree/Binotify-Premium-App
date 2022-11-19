import React from "react";

const Login:React.FC = () => {
  return (
    <main>
      <p className="text-lime">Login</p>
      <button onClick={() => {localStorage.setItem("user", "admin"); window.location.href = '/'}}>Login admin</button>
      <button onClick={() => {localStorage.setItem("user", "artist"); window.location.href = '/'}}>Login artist</button>
    </main>
  )
}

export default Login;
