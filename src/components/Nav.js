import logo from "../assets/images/logo-bg.png";
import classes from "../components/styles/Nav.module.css";
import Account from "./Account";
export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
          </a>
          <h3>Learn with Sumit</h3>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
