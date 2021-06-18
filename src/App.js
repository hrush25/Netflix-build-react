import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser, logout } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  //dynamically selecting the user
  const user = useSelector(selectUser);

  //for dispatching data into redux datastore
  const dispatch = useDispatch();

  //Change of state for login-logout
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //dispatch-in login info into redux store
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        );
      } else {
        //dispatch-out user info from redux store
        dispatch(logout());
      }
    });

    //RETURN state changed
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {/* If its not the registered user, show the login screen, else show homescreen (turnary) */}
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>

            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
