import { NavLink, Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../assets/Logo.jpg";

export default function MainNavigation() {
  return (
    <header className={classes["nav-header"]}>
      <div>
        <img src={logo} width="105" height="36" alt="Maxwell" />
      </div>
      <nav className={classes.navigation}>
        <ul className={classes["nav-links"]}>
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <NavLink>Features</NavLink>
          </li>
          <li>
            <NavLink to="medication">Medication</NavLink>
          </li>
          <li>
            <NavLink>About Us</NavLink>
          </li>
        </ul>
      </nav>
      <div className={classes.cta}>
        <Link to="login" className={classes["sign-in-button"]}>
          Sign In
        </Link>
        <Link to="sign-up" className={classes["sign-up-button"]}>
          Sign Up
        </Link>
      </div>
    </header>
  );
}
