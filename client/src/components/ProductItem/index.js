import React from "react";
import { Link } from "react-router-dom";

function ProductItem(item) {
  const { image, name, _id, price, desc } = item;

  return (
    <div className="">
      <Link to={`/products/${_id}`}>
        <img alt={name} src={`/images/${image}`} />
        <p>{name}</p>
      </Link>
      <div>
        <span>${price}</span>
        <p>{desc}</p>
      </div>
      <button>Buy</button>
    </div>
  );
}

export default ProductItem;
