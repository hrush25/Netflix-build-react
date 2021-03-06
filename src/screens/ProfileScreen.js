import React from "react";
import Nav from "../Nav";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import PlansScreen from "./PlansScreen.js";

function ProfileScreen() {
  //get the logged in user name
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />

      <div className="profileScreen__body">
        <h2 className="profileScreen__title">Edit Profile</h2>

        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />

          <div className="profileScreen__details">
            <h2> {user.email} </h2>

            <div className="profileScreen__plans">
              <h3>Plans</h3>

              {/* Seperate component for dynamically changing plans */}
              <PlansScreen />

              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
