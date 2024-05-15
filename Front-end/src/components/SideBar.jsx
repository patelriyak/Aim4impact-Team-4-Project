import classes from "./SideBar.module.css";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <section className={classes["side-bar-container"]}>
      <ul className={classes["side-bar-links"]}>
        <li>
          <NavLink>DASHBOARD</NavLink>
        </li>
        <li>
          <NavLink>MEDICATION</NavLink>
        </li>
        <li>
          <NavLink>LIBRARY</NavLink>
        </li>
        <li>
          <NavLink>HELP & SUPPORT</NavLink>
        </li>
        <li>
          <NavLink>SETTINGS</NavLink>
        </li>
      </ul>
    </section>
  );
}
