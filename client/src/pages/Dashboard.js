import React, { useState } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_ITEM } from "../utils/mutations";
import MyItem from "../components/MyItem";

function Dashboard() {
  const [formState, setFormState] = useState({
    name: "",
    desc: "",
    price: "",
    file: null,
  });

  const [addItem] = useMutation(ADD_ITEM);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleUploadImage = async (event) => {
    event.preventDefault();

    let base64String = "";
    // console.log(event.target.files[0]);

    var reader = new FileReader();
    console.log("next");

    reader.onload = function () {
      base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      // const imageStrings = [];
      // let i = 0;
      // while (i < base64String.length) {
      //   imageStrings.push(base64String.slice(i, i + 250));
      //   i = i + 250;
      // }
      // console.log(imageStrings);

      setFormState({
        ...formState,
        // file: imageStrings,
        file: base64String,
      });
    };
    reader.readAsDataURL(event.target.files[0]);
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
      file: null,
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
              <input type="file" name="file" onChange={handleUploadImage} />
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
