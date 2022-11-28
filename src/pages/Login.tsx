import React from "react";
import ImagesCarousel from "../components/ImagesCarousel";
import "../styles/auth.css"

const Login:React.FC = () => {
  return (
    <main>
      <p className="text-lime">Login</p>
      <button onClick={() => {localStorage.setItem("user", "admin"); window.location.href = '/'}} className="relative z-50">Login admin</button>
      <button onClick={() => {localStorage.setItem("user", "artist"); window.location.href = '/'}} className="relative z-50">Login artist</button>

      <ImagesCarousel />
        
      <div className="container relative z-10">
        <header className="main-header">
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
        </header>
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
                            <button type="submit" className="btn" id="button-submit">Log In</button>
                        </div>
                </div>
            </section>
        </div>
    </main>
  )
}

export default Login;
