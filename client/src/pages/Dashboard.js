import React, { useState } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_ITEM } from "../utils/mutations";
import MyItem from "../components/MyItem";
import { Link } from "react-router-dom";

function Dashboard() {
  const [formState, setFormState] = useState({
    name: "",
    desc: "",
    price: "",
    file: "",
  });

  const [addItem] = useMutation(ADD_ITEM);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await addItem({
      variables: {
        itemName: formState.name,
        itemDesc: formState.desc,
        itemPrice: formState.price,
        itemImage: formState.file,
      },
    });
    console.log(response);

    setFormState({
      name: "",
      desc: "",
      price: "",
      file: "",
    });
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <div>
          <div>Dashboard</div>
          <form onSubmit={handleFormSubmit}>
            <div className="">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="desc">Description:</label>
              <input
                type="text"
                name="desc"
                id="desc"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="price">Pricing:</label>
              <input
                type="text"
                name="price"
                id="price"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="file">Image:</label>
              <input type="file" name="file" onChange={handleChange} />
            </div>
            <button>Add New Item</button>
          </form>
          <div>
            <MyItem />
          </div>
        </div>
      ) : (
        <div className="">
          <p>Please login into your account dashboard</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
