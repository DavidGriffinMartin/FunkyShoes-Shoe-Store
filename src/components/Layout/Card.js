import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useHistory } from "react-router-dom";

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
    // getItem();
    history.push("/");
  };

  // function to check to see if the ID gets printed?
  const addToCartHandler = (e, id) => {
    console.log("clicked!");
    // console.log(e.target, e.target._id);
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
        <Button
          size="small"
          onClick={(e) => {
            props.addToCartFn(e, props.item._id);
          }}
        >
          <h4 className="addtocartbtn">Add to Cart</h4>
        </Button>
        {props.user ? isAdminFn() : null}
      </CardActions>
    </Card>
  );
};

export default MediaCard;
