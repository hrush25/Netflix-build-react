import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";

function SignUpScreen() {
  // capturing email and password using useRef hook
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Register function
  const register = e => {
    e.preventDefault(); //prevents default behavious of refreshing

    // creating user account (firebase auth function) & passing email-passwd
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        console.log(authUser);
      })
      .catch(error => alert(error.message));
  };

  //   signin function
  const signIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        console.log(authUser);
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign in</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button className="signIn__button" type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
