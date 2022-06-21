import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useState, useEffect } from "react";

const Cart = (props) => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    for (const item of props.itemsArr) {
      newTotal += item[0].price;
    }
    setTotalAmount(newTotal);
  }, [props.itemsArr]);

  const capturedItems = props.itemsArr.map((item) => {
    console.log(item[0]._id);
    return (
      <div className={classes.cartItem} key={item[0]._id}>
        {item[0].name}
        <span className={classes.price}>${item[0].price}</span>
      </div>
    );
  });

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      {capturedItems}
      <div className={classes.actions}>
        {
          <i
            className="fa-solid fa-trash-can fa-1x"
            onClick={(e) => {
              props.removeHandler(e);
            }}
          ></i>
        }
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
