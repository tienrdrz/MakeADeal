import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import Auth from '../utils/auth';



const Add = () => {
    return (
        <main name='add'>
            <div className='add-container'>
                <h1>Add an Item</h1>
                <p>Here you can add an item and create your own listing!</p>
                <div className='add-items'>
                        <div>
                            <h3>What is your item?</h3>
                            <input type="text" placeholder='Hoodie' />
                            <h3>Give a brief description of the item.</h3>
                            <input type="text" placeholder='A black hoodie slightly used' />
                            <h3>What would you price your item at?</h3>
                            <input type="number" placeholder='25' />
                            <h3>Add an image of your item.</h3>
                            <input type='file' />                      
                        </div>
                </div>
            </div>
        </main>
    )
}

export default Add;