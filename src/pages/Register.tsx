import React from "react";
import { useNavigate } from "react-router-dom";
import ImagesCarousel from "../components/ImagesCarousel";
import "../styles/auth.css";

function Register() {
  const navigate = useNavigate();
  async function onRegisterButton() {
    
    const nameInput = document.getElementById("name-input") as HTMLInputElement;
    const usernameInput = document.getElementById("username-input") as HTMLInputElement;
    const emailInput = document.getElementById("email-input") as HTMLInputElement;
    const passwordInput = document.getElementById("password-input") as HTMLInputElement;

    const name: string = nameInput.value;
    const username: string = usernameInput.value; 
    const email: string = emailInput.value; 
    const password: string = passwordInput.value; 

    const arg: {} = {
      email: email,
      name: name,
      username: username,
      password: password
    }

    const resp = await fetch("http://localhost:3000/authenticate/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(arg)
    });

    const respJson = await resp.json();

    if(respJson.return == "succeed") {
      navigate("/");
    }
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
