import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

function MyItem() {
  const { data } = useQuery(QUERY_ME);
  let user;

  if (data) {
    user = data.me;
  }

  return (
    <div>
      <div>
        <Link to="/">← Back to Products</Link>

        {user ? (
          <>
            <h2>Product for {user.username}</h2>
            <div className="container-card">
              {user.items.map((item) => (
                <div key={item._id} className="card">
                  <div className="card-detail">
                    <Link to={`/products/${item._id}`}>
                      <img
                        alt={item.itemName}
                        src={`/images/${item.itemImage}`}
                      />
                      <p>{item.itemName}</p>
                    </Link>
                    <p>${item.itemPrice}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default MyItem;
