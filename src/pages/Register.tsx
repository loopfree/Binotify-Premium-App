import React from "react";
import ImagesCarousel from "../components/ImagesCarousel";
import "../styles/auth.css";

function Register() {
  async function onRegisterButton() {
    const name: string = document.getElementById("name-input")?.textContent as string;
    const username: string = document.getElementById("username-input")?.textContent as string;
    const email: string = document.getElementById("email-input")?.textContent as string;
    const password: string = document.getElementById("password-input")?.textContent as string;

    const arg: {} = {
      email: email,
      name: name,
      username: username,
      password: password
    }

    await fetch("http://localhost:3000/authenticate/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(arg)
    });
  }

  return (
    <main>
      <ImagesCarousel />

      <div className="container relative z-50">
        {/* <header className="main-header">
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
        </header> */}
        <section className="join-main-section">
          <h1 className="join-text">
            Join us as
            <span className="accent-text">Catify</span>
            family
          </h1>
          <div className="join-form">
            <div className="input-group">
              <label>Name</label>
              <input type="text" id="name-input" />
            </div>
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
              <button type="submit" 
                className="btnPrimary !rounded-md !text-lg !py-2 font-head" 
                id="submit-button"
                onClick={onRegisterButton}
                >Join now</button>
            </div>
            <p className="text-right text-sm">Already have an account? <a href="/login" className="text-green un">Log In</a></p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Register;
