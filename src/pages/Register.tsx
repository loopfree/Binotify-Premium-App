import React from "react";
import ImagesCarousel from "../components/ImagesCarousel";
import "../styles/auth.css";

function Register() {
  return (
    <main>
      <ImagesCarousel />

      <div className="container relative z-50">
        <header className="main-header">
          <div className="brand-logo">
            <img className="logo" src="/assets/img/logo.png" />
            <div className="brand-logo-name">\(OwO)/</div>
          </div>
          <nav className="main-nav">
            <ul>
              <li><a href="https://gitlab.informatika.org/if3110-2022-k02-01-33/tugas-besar-1">About Project</a></li>
              <li><a href="/login">Sign In</a></li>
            </ul>
          </nav>
        </header>
        <section className="join-main-section">
          <h1 className="join-text">
            Join us as
            <span className="accent-text">Catify</span>
            family
          </h1>
          <div className="join-form">
            <div className="input-group">
              <label>Username</label>
              <input type="text" id="username-input" />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" id="email-input" />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" id="password-input" />
            </div>
            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" id="password-confirmation-input" />
            </div>
            <div className="input-group">
              <button type="submit" className="btn" id="submit-button">Join Now</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Register;
