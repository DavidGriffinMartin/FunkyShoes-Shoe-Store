import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useState, useEffect } from "react";

const HeaderCartButton = (props) => {
  const [cartAmountDisplay, setCartAmountDisplay] = useState(0);
  // setCartAmountDisplay(props.itemsArr);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{props.itemsArr}</span>
    </button>
  );
};
export default HeaderCartButton;
