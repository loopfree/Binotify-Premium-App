import React from "react";
// import { useNavigate } from "react-router-dom";
import ImagesCarousel from "../components/ImagesCarousel";
import "../styles/auth.css"

const Login:React.FC = () => {

  // const navigate = useNavigate();

  async function onLoginButton() {
    const usernameInput: HTMLInputElement = document.getElementById("username-input") as HTMLInputElement;
    const passwordInput: HTMLInputElement = document.getElementById("password-input") as HTMLInputElement;
    const username: string = usernameInput.value;
    const password: string = passwordInput.value;

    const arg: any = {
      username: username,
      password: password
    }

    const response = await fetch("http://localhost:3000/authenticate/login",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(arg)
    });

    const resp = await response.json();
    const userType = resp.type;

    if(userType === "penyanyi") {
      localStorage.setItem("userId", resp.id);
      localStorage.setItem("user", "artist");
      localStorage.setItem("username", username);
      window.location.href = "/";
    } else if(userType === "admin") {
      localStorage.setItem("userId", resp.id);
      localStorage.setItem("user", "admin");
      localStorage.setItem("username", username);
      window.location.href = "/";
    } else {
      alert("BUAT ACCOUNT");
    }

    document.cookie = `token=${resp.token}`;
  }

  return (
    <main>
      <ImagesCarousel />
        
      <div className="container relative z-10">
        {/* <header className="main-header">
          <div className="brand-logo">
            <img className="logo" src="/assets/img/logo.png" />
            <div className="brand-logo-name">\(OwO)/</div>
          </div>
          <nav className="main-nav">
            <ul>
              <li><a href="https://gitlab.informatika.org/if3110-2022-k02-01-33/tugas-besar-1">About Project</a></li>
              <li><a href="/register">Register</a></li>
            </ul>
          </nav>
        </header> */}
        <section className="join-main-section">
          <h1 className="join-text">
            Welcome back<br />
            <span className="accent-text">Catify</span>
            fam's
          </h1>
          <div className="join-form">
            <div className="input-group">
              <label>Username</label>
              <input type="text" id="username-input" />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" id="password-input" />
            </div>
            <div className="input-group">
              <button 
                type="submit" 
                className="btnPrimary !rounded-md !text-lg !py-2 font-head" 
                id="button-submit"
                onClick={onLoginButton}
              >
                Log In
              </button>
            </div>
            <p className="text-right text-sm">Don't have an account? <a href="/register" className="text-green un">Register</a></p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Login;
