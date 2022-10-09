import React from "react";
import { Link } from "react-router-dom";

function ProductItem(item) {
  const { image, name, _id, price } = item;

  // return (
  //   <div>
  //     <div>
  //       <img src="" alt="" />
  //       <p>itemName: xxx</p>
  //       <p>itemDesc: xxxxxx</p>
  //       <p>itemPrice: 11.99</p>
  //     </div>
  //   </div>
  // );

  return (
    <div className="">
      <Link to={`/products/${_id}`}>
        <img alt={name} src={`/images/${image}`} />
        <p>{name}</p>
      </Link>
      <div>
        <span>${price}</span>
      </div>
      <button>Add to cart</button>
    </div>
  );
}

export default ProductItem;
