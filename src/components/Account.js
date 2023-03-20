import classes from "../components/styles/Account.module.css";
export default function Account() {
  return (
    <div className="account">
      <span className={classes.account} title="Account">
        account_circle
      </span>
      <a href="signup.html">Signup</a>
    </div>
  );
}
