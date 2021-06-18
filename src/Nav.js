import React, { useState, useEffect } from "react";
import "./Nav.css";
import { useHistory } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);

  //history store details of previous page so that we can go back
  const history = useHistory();

  // Handling navbar behavious after scrolling
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  // event listerner for scroll down, scroll back to top
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    // Make black navbar transperent after scrolling down, make it black again when it comes back
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">

      {/* Navbar netlfix logo */}
        <img
          className="nav__logo"
          src="https://www.abacustechnologies.com/wp-content/uploads/2020/05/580b57fcd9996e24bc43c529.png "
          alt=""
        />

      {/* Profile avatar on rhs (on click, save history and push to profile screen) */}
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
