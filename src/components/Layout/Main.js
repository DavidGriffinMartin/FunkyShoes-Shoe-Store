import MediaCard from "./Card";
import { useEffect } from "react";
import "./Main.css";

const Main = (props) => {
  useEffect(() => {
    props.getShoes();
  }, []);

  const loaded = () => {
    return props.items.map((item) => (
      <div className="main-item" key={item._id}>
        <MediaCard
          mediaCardKey={item._id}
          item={item}
          getShoes={props.getShoes}
          user={props.user}
          addToCartFn={props.addToCartFn}
        />
      </div>
    ));
  };

  const loading = () => {
    return <h1>loading...</h1>;
  };

  return props.items ? loaded() : loading();
};

export default Main;
