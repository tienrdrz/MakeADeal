import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function ProductItem(item) {
  const { image, name, _id, price, desc } = item;

  const purchase = () => {};

  return (
    <div className="">
      <Link to={`/products/${_id}`}>
        <img alt={name} src={`/images/${image}`} />
        <h3>{name}</h3>
      </Link>
      <div>
        <p>{desc}</p>
        <span>Total: ${price}</span>
      </div>
      {Auth.loggedIn() ? (
        <button onClick={purchase}>Purchase</button>
      ) : (
        <span> You must be logged in to purchase an item!</span>
      )}
    </div>
  );
}

export default ProductItem;
