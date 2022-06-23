import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import { auth } from "../services/firebase";

const MediaCard = (props, id) => {
  const isAdminFn = () => {
    if (props.user.email === "danewjkim@gmail.com") {
      return (
        <Button
          size="small"
          onClick={(e) => {
            removeItem(e, props.item._id);
          }}
        >
          <i className="trash fa-solid fa-trash-can fa-3x"></i>
        </Button>
      );
    }
  };

  const history = useHistory();
  const URL = "https://pipiopiproj.herokuapp.com/items/";

  // const items = props.item;

  const deleteItem = async (id) => {
    await fetch(URL + id, {
      method: "DELETE",
    });
    props.getShoes();
  };

  const removeItem = (e, id) => {
    console.log(e.target, id);
    deleteItem(id);
    history.push("/");
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
    return () => {
      unsubscribe();
    };
  }, []);

  // This is where we implemented the user auth to take away the add to cart btn
  const showCart = () => {
    if (!user) return;
    else {
      return (
        <Button
          size="small"
          onClick={(e) => {
            props.addToCartFn(e, props.item._id);
          }}
        >
          <h4 className="addtocartbtn">Add to Cart</h4>
        </Button>
      );
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <a href={props.item.linkto} target="_blank" rel="noreferrer">
        <CardMedia
          component="img"
          height="250"
          image={props.item.img}
          alt="funky shoes"
        />
      </a>
      <CardContent>
        <Typography gutterBottom variant="h5" align="center" component="div">
          {props.item.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center">
          {props.item.description}
        </Typography>
        <Typography variant="body1" color="text.primary" align="center">
          ${props.item.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions>
        {showCart()}
        {props.user ? isAdminFn() : null}
      </CardActions>
    </Card>
  );
};

export default MediaCard;
