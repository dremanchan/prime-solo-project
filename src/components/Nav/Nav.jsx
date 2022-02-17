import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">HitBook</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/instructions">
              Instructions
            </Link>

            <Link className="navLink" to="/buttoncheck">
              ButtonCheck
            </Link>

            <Link className="navLink" to="/gameselect">
              Game Select
            </Link>

            <Link className="navLink" to="/smashselect">
              Smash Ultimate
            </Link>

            <Link className="navLink" to="/favorite/">
              Favorites
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        {/* Hides admin page from non admin */}
        {user.admin === true && (
          <>
            <Link className="navLink" to="/admin">
              Admin
            </Link>
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
