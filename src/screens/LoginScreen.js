import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen.js";
import { Link } from "react-router-dom";
import Footer from "../Footer";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreem__background ">
        <Link to="/">
          <img
            className="loginScreen__logo"
            src="https://www.abacustechnologies.com/wp-content/uploads/2020/05/580b57fcd9996e24bc43c529.png"
            alt=""
          />
        </Link>
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign in
        </button>

        {/* div for overlapping white body with background image */}
        <div className="loginScreen__gradient" />

        <div className="loginScreen__body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1> Unlimited films, TV Programmes and more.</h1>
              <h2>Watch anywhere, Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>

              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen__getStarted"
                  >
                    Get Started
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
