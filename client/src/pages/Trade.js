import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import Auth from '../utils/auth';

const Trade = () => {
    const items = [
        {
            itemName: "Hoodie",
            itemDesc: "A large black hoodie that is partially used, looks and feels brand new",
            itemPrice: 35,
            itemImage: "https://t4.ftcdn.net/jpg/04/26/42/63/360_F_426426355_CV69FJfQ2XRWAQtBtOBwkrZwMI0UxVZ0.jpg"
        },
        {
            itemName: "Scarf",
            itemDesc: "Unused orange ",
            itemPrice: 10,
            itemImage: "https://t4.ftcdn.net/jpg/04/26/42/63/360_F_426426355_CV69FJfQ2XRWAQtBtOBwkrZwMI0UxVZ0.jpg"
        }
    ]
    return (
        <main name='trade'>
            <div className='trade-container'>
                <h1>Trade</h1>
                <p>Here you can trade your items with other items listed</p>
                <div className='trade-items'>
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

export default Trade;