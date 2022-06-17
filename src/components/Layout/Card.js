import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { login, logout } from "../services/firebase";
import CartIcon from "../Cart/CartIcon";

const MediaCard = (props, id) => {
  const [newItem, setNewItem] = useState(null);
  const getItem = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setNewItem(data);
  };

  const isAdminFn = () => {
    if (props.user.email === "danewjkim@gmail.com") {
      return (
        <Button
          size="small"
          onClick={(e) => {
            removeItem(e, props.item._id);
          }}
        >
          <i class="fa-solid fa-trash-can fa-3x"></i>
        </Button>
      );
    }
  };

  const history = useHistory();
  const URL = "https://pipiopiproj.herokuapp.com/items/";

  const items = props.item;

  const deleteItem = async (id) => {
    await fetch(URL + id, {
      method: "DELETE",
    });
    props.getShoes();
  };

  const removeItem = (e, id) => {
    console.log(e.target, id);
    deleteItem(id);
    // getItem();
    history.push("/");
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <a href={props.item.linkto} target="_blank">
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
        <Button size="small">
          +<CartIcon />
        </Button>
        {props.user ? isAdminFn() : null}
      </CardActions>
    </Card>
  );
};

export default MediaCard;
