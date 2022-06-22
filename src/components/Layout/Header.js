import { Fragment } from "react";
import { login, logout } from "../services/firebase";
import headerShowImage from "../../image/Rectangle 2.png";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { Link } from "react-router-dom";

const Header = (props) => {
  const isAdminFn = () => {
    if (props.user.email === "danewjkim@gmail.com") {
      return (
        <Link style={{ textDecoration: "none" }} to="/create">
          <li className={classes.headerCreate}>Create</li>
        </Link>
      );
    }
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <h1 className={classes.logo}>FunkyShoes</h1>
        </Link>
        <div className={classes.combined}>
          <ul>
            {props.user ? isAdminFn() : null}

            {props.user ? (
              <li onClick={logout}>Logout</li>
            ) : (
              <li onClick={login}>Login</li>
            )}
          </ul>
          <HeaderCartButton
            onClick={props.showCart}
            itemsArr={props.itemsArr}
          />
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={headerShowImage} alt="..." />
        <div className={classes.container}>
          <h1>Funky Shoes</h1>
          <h1>for Funky Feet</h1>
          <h3>
            <a href="#shopnow">Shop Now</a>
          </h3>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
