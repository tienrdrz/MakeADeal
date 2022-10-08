import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import Auth from '../utils/auth';

const Buy = () => {
    const items = [
        {
            itemName: "Hoodie",
            itemDesc: "A large black hoodie that is partially used, looks and feels brand new",
            itemPrice: 35.50,
            itemImage: "https://t4.ftcdn.net/jpg/04/26/42/63/360_F_426426355_CV69FJfQ2XRWAQtBtOBwkrZwMI0UxVZ0.jpg"
        },
        {
            itemName: "Scarf",
            itemDesc: "Unused orange ",
            itemPrice: 35.50,
            itemImage: "https://t4.ftcdn.net/jpg/04/26/42/63/360_F_426426355_CV69FJfQ2XRWAQtBtOBwkrZwMI0UxVZ0.jpg"
        }
    ]
    return (
        <main name='buy'>
            <div className='buy-container'>
                <h1>Buy</h1>
                <p>Here you can browse and purchase any items that are listed!</p>
                <div className='buy-items'>
                    {items.map(({ itemName, itemDesc, itemPrice, itemImage }) => (
                        <div>
                            <h3>{itemName}</h3>
                            <img className="item-image" src={itemImage} alt='' width="304" height="228"/>
                            <h4>{itemPrice}</h4>
                            <p>{itemDesc}</p> 
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Buy;