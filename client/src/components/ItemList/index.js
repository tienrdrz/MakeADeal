import React from "react";
import { useQuery } from "@apollo/client";
import ProductItem from "../ProductItem";
import { QUERY_ALL_ITEMS } from "../../utils/queries";

function ItemList() {
  const { data } = useQuery(QUERY_ALL_ITEMS);

  const items = data;

  return (
    <div className="">
      <div className="">
        {items.map((item) => (
          <ProductItem
            key={item._id}
            _id={item._id}
            name={item.itemName}
            price={item.itemPrice}
            image={item.itemImage}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;