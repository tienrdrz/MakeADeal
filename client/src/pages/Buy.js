// import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ITEM } from "../utils/queries";

function Buy() {
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { data } = useQuery(QUERY_ITEM);

  const products = data?.items || [];

  useEffect(() => {
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
  }, [products, id]);

  return (
    <>
      {currentProduct ? (
        <div className="">
          <h2>{currentProduct.name}</h2>

          <p>{currentProduct.description}</p>

          <p>
            <strong>Price:</strong>${currentProduct.price}{" "}
            <button>Buy it!</button>
          </p>

          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
        </div>
      ) : (
        <h2>No item</h2>
      )}
    </>
  );
}

export default Buy;
